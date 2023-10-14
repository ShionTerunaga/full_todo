import { style } from "@vanilla-extract/css";

const styles={
    containar:style({
        margin:"5px",
        width:"240px",
        '@media':{
            'screen and (max-width:345px)':{
                width:"100%",
            }
        }
    }),
    imcompleteBox:style({
        backgroundColor:"#FF00FF",
        maxHeight:"500px",
        overflowY:"auto",
    })
}

export default styles;