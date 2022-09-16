import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";


export default function MuiButton(props: { onClick: () => void }) {
    return (<CardActions disableSpacing>
        <IconButton
            onClick={props.onClick}
            aria-label="show more"
            sx={{ fontSize: "10pt" }}>
            예시 코드 보기
        </IconButton>
    </CardActions>)
}