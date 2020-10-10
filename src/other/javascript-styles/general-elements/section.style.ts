import { size21 } from "../utilities/fibonacci-sizes";
import { pxToRem } from "../utilities/pixels-to-rems";

export const section = /*css*/`  
  .section + .section{
    padding-top: ${pxToRem(size21)};
    border-top: 1px solid #66add6;
    margin-top: ${pxToRem(size21)};
  }
`