const hljs = require('highlight.js');
const MarkdownIt = require('markdown-it');

function getMdParser() {
    const mdparser: typeof MarkdownIt = new MarkdownIt({
        // https://github.com/markdown-it/markdown-it#syntax-highlighting
        highlight: (str: string, lang: string) => {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return (`<pre class="hljs-${lang}"><code>` +
                        hljs.highlight(str, { language: lang }).value
                        + '</code></pre>');
                } catch (__) { }
            }

            return (`<pre class="hljs-${lang}"><code>`
                + mdparser.utils.escapeHtml(str)
                + '</code></pre>');
        }
    });
    const mk = require('markdown-it-katex');

    mdparser.use(mk);

    return mdparser
}




async function fetchFile(src: string): Promise<string> {
    const md_src = await fetch(src);
    let res = await md_src.blob()
    return await res.text()
}

function wrapCodeBlock(codeBlock: string, lang: string = "python") {
    return `\`\`\`${lang}
${codeBlock}
\`\`\``;
}

interface Cell {
    cell_type: "markdown" | "code",
    source: string[]
}

class MarkdownCell implements Cell {
    readonly cell_type: "markdown" | "code" = "markdown";
    public source: string[] = [];
}

class CodeCell implements Cell {
    readonly cell_type: "markdown" | "code" = "code";
    public source: string[] = [];
    public imageOutputs: string[] = [];
    public textOutputs: string[] = [];
}


class IpynbBlock {
    public title: string;
    public body: string;
    public code: string;
    public images: string[];
    public output: string[];
    public api: string;
    public htmlOutput: string[];
    constructor() {
        this.title = "";
        this.body = "";
        this.code = "";
        this.images = [];
        this.output = [];
        this.api = "";
        this.htmlOutput = [];
    }

    public deepCopy(): IpynbBlock {
        const copiedObj: IpynbBlock = new IpynbBlock();
        copiedObj.title = this.title;
        copiedObj.body = this.body;
        copiedObj.code = this.code;
        copiedObj.images = [...this.images];
        copiedObj.output = [...this.output];
        copiedObj.api = this.api;
        copiedObj.htmlOutput = [...this.htmlOutput];

        return copiedObj
    }
}

class IpynbParser {
    private mdparser: any;
    private tempIpynbBlock: IpynbBlock;
    private answer: IpynbBlock[];

    constructor() {
        this.mdparser = getMdParser();
        this.tempIpynbBlock = new IpynbBlock();
        this.answer = [];
    }

    /**
     * @param {Cell} cell cell.cell_type must equals to "markdown". 
     */
    private markdownCell(cell: Cell) {
        console.assert(cell.cell_type === "markdown")
        const title: string = cell.source.shift() as string;
        const title_regex_result = title.match(`(?<=#{1,3} ).+?(=?\n)`)
        this.tempIpynbBlock.title = title_regex_result ? title_regex_result[0] : "💕";

        this.tempIpynbBlock.api = cell.source.shift() as string;
        this.tempIpynbBlock.body = this.mdparser
            .render(cell.source.join("\n"));
    }


    /**
     * 코드셀에 관한 처리를 담당하는 함수입니다.
     * @param {Cell} cell 인자로 전달되는 Cell은 반드시 cell_type 프로퍼티가 "code"여야 합니다. 
     */
    private codeCell(cell: Cell) {
        // Code Cell
        console.assert(cell.cell_type === "code")
        this.tempIpynbBlock.code = cell.source.join("");
        const __outputs = (cell as any).outputs as any[]

        __outputs.forEach(output => {
            if (("data" in output) && ("image/png" in output.data)) {
                this.tempIpynbBlock.images.push(`data:image/png;base64,${output.data["image/png"]}`);
            }
            if (("data" in output) && ("text/plain" in output.data)) {
                this.tempIpynbBlock.output.push(...output.data["text/plain"]);
            }
            if (("data" in output) && ("text/html" in output.data)) {
                this.tempIpynbBlock.htmlOutput.push(...output.data["text/html"]);
            }
            if (("data" in output) && ("text/markdown" in output.data)) {
                this.tempIpynbBlock.htmlOutput.push(

                    this.mdparser.render(output.data["text/markdown"].join("")))
            }
            if ("text" in output) {
                this.tempIpynbBlock.output.push(...output.text);
            }
        })
        this.answer.push(this.tempIpynbBlock.deepCopy());
        this.tempIpynbBlock = new IpynbBlock();
    }

    public async parse(ipynbPath: string): Promise<IpynbBlock[]> {
        const cells: Cell[] = JSON.parse(await fetchFile(ipynbPath)).cells;
        cells.forEach((cell: Cell, i: number) => {
            if (i % 2 === 0) this.markdownCell(cell);
            else this.codeCell(cell);
        })
        const copiedAnswer: IpynbBlock[] = [...this.answer];
        this.answer = [];
        return copiedAnswer;
    }
}

export { IpynbBlock };
export { fetchFile, getMdParser, wrapCodeBlock, IpynbParser };