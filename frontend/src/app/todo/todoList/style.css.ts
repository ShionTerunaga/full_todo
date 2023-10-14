import { style } from "@vanilla-extract/css";

const styles={
    containar:style({
        '@media':{
            'screen and (min-width:530px)':{
                display:"flex",
                justifyContent:"center"
            }
        }
    })
}
export default styles;