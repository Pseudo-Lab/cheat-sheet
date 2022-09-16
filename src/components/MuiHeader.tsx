import React from "react";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";


export default function MuiHeader(props: { title: string, api: string }) {
    return (<CardHeader
        action={
            <IconButton
                href={props.api}
                target="_blank"
                aria-label="settings"
                sx={{ fontSize: "12pt" }}>
                API
            </IconButton>
        }
        title={props.title}
        subheader=""
    />);
}