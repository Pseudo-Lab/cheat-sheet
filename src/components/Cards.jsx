/**
  * Responsive Masonry : https://www.npmjs.com/package/react-responsive-masonry
  * 
*/


import { BASE_URL, columnsCountBreakPoints, BASE_NAME, IS_DEVELOPMENT } from '../config';
import { useEffect, useState } from 'react';
import { IpynbParser } from './utils';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import MuiCard from './MuiCard';
import { useParams } from 'react-router-dom';

function Cards() {
    const { src } = useParams()
    const [ipynbBlocks, setIpynbBlocks] = useState([]);
    const ipynbParser = new IpynbParser();

    useEffect(() => {
        (async () => {
            const ipy_objs = await ipynbParser.parse(
                `${IS_DEVELOPMENT ? "" : BASE_URL + BASE_NAME}/notebooks/${src || "matplotlib"}.ipynb`
            );
            setIpynbBlocks(ipy_objs);
            console.log(src);
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