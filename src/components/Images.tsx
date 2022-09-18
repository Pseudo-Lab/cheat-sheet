import CardMedia from "@mui/material/CardMedia";
import React from "react";
// <CardMedia
//     component="img"
//     image={image}
//     alt="Image Ouput "
//     key={`${i}`}
// />

export default function Images(props: { images: string[] }) {
    return (<>{props.images.map((image: string, i: number) => (
        <p className="codeOutputImg">
            <img src={image} key={`${i}`} alt="Image Output" />
        </p>)
    )}</>);
}