import { style } from "@vanilla-extract/css";

const styles={
    containar:style({
        '@media':{
            'screen and (max-width:500px)':{
                display:"flex",
                justifyContent:"center"
            }
        }
    })
}

export default styles;