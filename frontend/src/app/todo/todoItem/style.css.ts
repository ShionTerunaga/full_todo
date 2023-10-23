import { style } from "@vanilla-extract/css";

const styles={
    itemBox:style({
        height:"50px",
        backgroundColor:"white",
        display:"flex",
        alignItems:"center",
        margin:"5px",
        paddingInline: "10px"
    }),
    textbox:style({
        width:"50%",
        textAlign:"start",
    }),
    editButtons:style({
        display:"flex",
    })
}

export default styles;