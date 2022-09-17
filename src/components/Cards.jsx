/**
  * Responsive Masonry : https://www.npmjs.com/package/react-responsive-masonry
  * 
*/
import { BASE_URL, columnsCountBreakPoints, BASE_NAME } from '../config.json';
import { useEffect, useState } from 'react';
import { IpynbParser } from './utils';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import MuiCard from './MuiCard';
import { useSearchParams } from 'react-router-dom';

function Cards() {
    const [ipynbBlocks, setIpynbBlocks] = useState([]);
    const ipynbParser = new IpynbParser();

    const [searchParams] = useSearchParams()
    const src = searchParams.get("src")

    useEffect(() => {
        (async () => {

            let baseUrl = window.location.href.match("http.+(?=/{0,1}\\?)")
            baseUrl = baseUrl ? baseUrl[0] : window.location.href
            // console.log(baseUrl)
            const ipy_objs = await ipynbParser
                .parse(`${baseUrl}/assets/${src || "matplotlib"}.ipynb`);
            setIpynbBlocks(ipy_objs);
        })();
    }, [])

    return (<ResponsiveMasonry
        columnsCountBreakPoints={columnsCountBreakPoints}>
        <Masonry>
            {ipynbBlocks.map((ipynbBlock) => (
                <MuiCard
                    ipynbBlock={ipynbBlock}
                // ignoreTextOutput
                // ignoreImageOuput
                // ignoreCodeBlock
                // ignoreHTMLOutput
                />
            ))}
        </Masonry>
    </ResponsiveMasonry>);

}

export { Cards };