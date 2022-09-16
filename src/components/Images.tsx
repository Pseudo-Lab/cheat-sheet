import CardMedia from "@mui/material/CardMedia";



export default function Images(props: { images: string[] }) {
    return (<>{
        props.images.map((image: string, i: number) => (<CardMedia
            component="img"
            image={image}
            alt="Image Ouput "
            key={`${i}`}
        />))
    }</>);
}