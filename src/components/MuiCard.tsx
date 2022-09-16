/**
 * References
 * 1. https://com/material-ui/react-card/
*/
import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { useState } from 'react';
import { IpynbBlock } from './utils';
import { maxWidth } from "../config";
import MuiHeader from './MuiHeader';
import Images from './Images';
import HTMLOutput from './HTMLOutput';
import MuiButton from './MuiButton';
import CodeBlock from './CodeBlock';

function MuiCard(props: {
    ipynbBlock: IpynbBlock,
    ignoreCodeBlock: boolean,
    ignoreTextOutput: boolean,
    ignoreHTMLOutput: boolean,
    ignoreImageOuput: boolean,
}) {
    const [expanded, setExpanded] = useState(false);

    return (
        <Card sx={{ "maxWidth": maxWidth }}>
            <MuiHeader title={props.ipynbBlock.title} api={props.ipynbBlock.api} />
            {props.ignoreImageOuput || (
                < Images images={props.ipynbBlock.images} />)}

            <CardContent>
                {props.ignoreHTMLOutput || <HTMLOutput
                    htmlOutput={props.ipynbBlock.htmlOutput} />}
                <Typography variant="body2" color="text.secondary">
                    <div dangerouslySetInnerHTML={{
                        __html: props.ipynbBlock.body
                    }}></div>
                </Typography>
            </CardContent>

            <MuiButton onClick={() => {
                setExpanded(!expanded);
            }} />

            <CodeBlock
                in={expanded}
                ignoreCodeBlock={props.ignoreCodeBlock}
                ignoreTextOutput={props.ignoreTextOutput}
                code={props.ipynbBlock.code}
                output={props.ipynbBlock.output} />

        </Card >
    )
}


export default MuiCard;