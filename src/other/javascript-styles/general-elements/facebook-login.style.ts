import { size55 } from "../utilities/fibonacci-sizes";
import { pxToRem } from "../utilities/pixels-to-rems";

export const facebookLogin = /*css*/`
  
  facebook-login{
    color: white;
  }

  button.Facebook-Login{
    background-color: #3a5696;
    color: white;
    display: block;
    margin: ${pxToRem(size55)} auto;
    border-color: white;
  }
`