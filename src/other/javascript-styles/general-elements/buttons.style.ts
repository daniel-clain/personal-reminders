import boxShadow from "../utilities/box-shadow";
import { size1, size8, size3, size5 } from "../utilities/fibonacci-sizes";
import { size } from "../utilities/font-and-line-size";
import { pxToRem } from "../utilities/pixels-to-rems";

export const buttons = /*css*/`
  
  button{
    border: ${pxToRem(size1)} outset black;
    ${size(size8)};
    padding: ${pxToRem(size3)} ${pxToRem(size5)};
    border-radius: ${pxToRem(size3)};
    display: inline-block;
    text-shadow: 1px 1px #000000;
    box-shadow: ${boxShadow};
  }

  button + button{
    margin-left: ${pxToRem(size5)};
  }
`
