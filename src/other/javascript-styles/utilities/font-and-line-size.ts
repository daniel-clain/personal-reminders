import { pxToRem } from "./pixels-to-rems";

export const size = size => `
    font-size: ${pxToRem(size)};
    line-height: ${pxToRem(size)};
`