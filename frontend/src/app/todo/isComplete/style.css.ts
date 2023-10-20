import { style } from "@vanilla-extract/css";

const styles={
    containar:style({
        margin:"5px auto",
        width:"245px",
        '@media':{
            'screen and (max-width:350px)':{
                width:"100%",
            }
        }
    }),
    imcompleteBox:style({
        backgroundColor:"#FF00FF",
        maxHeight:"500px",
        overflowY:"auto",
    }),
    completeBox:style({
        backgroundColor:"#C0C0C0",
        maxHeight:"500px",
        overflowY:"auto",
    })
}

export default styles;