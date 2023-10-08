import { style } from "@vanilla-extract/css";

const styles={
    containar:style({
        width:"75%",//長さはブラウザの横の75% 
        margin:"150px auto",// 上に50pxで以外は中央よせに,
        textAlign:"center",//文字を中央に寄せる(デフォルトは中央添え)
    }),
}
export default styles;
