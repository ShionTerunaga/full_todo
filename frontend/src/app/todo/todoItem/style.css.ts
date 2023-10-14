import { style } from "@vanilla-extract/css";

const styles={
    itemBox:style({
        height:"50px",
        backgroundColor:"white",
        display:"flex",
        alignItems:"center",
        margin:"5px"
    }),
    textbox:style({
        width:"50%",
        textAlign:"start",
    }),
    editButtons:style({
        display:"flex",
        width:"50%",
    })
}

export default styles;