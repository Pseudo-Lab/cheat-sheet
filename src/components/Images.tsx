import CardMedia from "@mui/material/CardMedia";
import React from "react";
// <CardMedia
//     component="img"
//     image={image}
//     alt="Image Ouput "
//     key={`${i}`}
// />

export default function Images(props: { images: string[] }) {
    return (<p>{
        props.images.map((image: string, i: number) => (<img
            src={image}
            key={`${i}`}
            className="codeOutputImg"
            alt="Image Output" />))
    }</p>);
}