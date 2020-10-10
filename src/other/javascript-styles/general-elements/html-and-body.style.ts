import { baseFontSize } from "../utilities/base-font-size.style";
import { size1, size3 } from "../utilities/fibonacci-sizes";
import { size } from "../utilities/font-and-line-size";
import { pxToRem } from "../utilities/pixels-to-rems";
import { scrollbarWidth } from "../utilities/scrollbar-width";

export const htmlAndBody = /*css*/`  
  html{
    font-size: ${baseFontSize}px;
  }
  body{
    background-color: #333;
    overflow-y: scroll;
  }

  body * {    
    box-sizing: border-box;
    display: block;
    outline: none;
  }

  * ::-webkit-scrollbar{
    width: ${pxToRem(scrollbarWidth)};
  }

  * ::-webkit-scrollbar-track{
    border-radius: ${pxToRem(size3)};
    background-color: #0f3d46;
  }

  * ::-webkit-scrollbar-thumb{
    border-radius: ${pxToRem(size3)};
    background-color: #10839a;
  }

`