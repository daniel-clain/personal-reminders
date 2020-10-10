import { size13, size21, size8 } from "../utilities/fibonacci-sizes";
import { size } from "../utilities/font-and-line-size";
import { pxToRem } from "../utilities/pixels-to-rems";
import textShadow from "../utilities/text-shadow";

export const heading = /*css*/`
  section-heading {
    font-weight: bold;
    ${size(size13)}
    text-shadow: ${textShadow};
    color: #66add6;
    margin-bottom: ${pxToRem(size21)};
  }
`