import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import { getMdParser, wrapCodeBlock } from "./utils";
import React from "react";

function CodeBlock(props: {
    in: boolean,
    code: string,
    output: string[],
    ignoreCodeBlock: boolean,
    ignoreTextOutput: boolean
}) {

    const mdparser = getMdParser();

    return (<Collapse in={props.in} timeout="auto" unmountOnExit>
        <CardContent>
            {props.ignoreCodeBlock || (<div
                dangerouslySetInnerHTML={{
                    __html: mdparser.render(
                        wrapCodeBlock(
                            props.code,
                            "python"))
                }} />)}


            {props.ignoreTextOutput || (<div
                dangerouslySetInnerHTML={{
                    __html: mdparser.render(
                        wrapCodeBlock(
                            `\noutput:\n${props.output.join("\n")}`,
                            "bash"))
                }} />)}
        </CardContent>
    </Collapse>)
}

export default CodeBlock;