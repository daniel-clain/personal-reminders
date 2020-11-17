import boxShadow from "./box-shadow";
import { size1, size8, size3, size5 } from "./fibonacci-sizes";
import { size } from "./font-and-line-size";
import { pxToRem } from "./pixels-to-rems";

export const buttonStyle = `
  border: ${pxToRem(size1)} outset black;
  ${size(size8)};
  padding: ${pxToRem(size3)} ${pxToRem(size5)};
  border-radius: ${pxToRem(size3)};
  display: inline-block;
  text-shadow: 1px 1px #000000;
  box-shadow: ${boxShadow};
`

