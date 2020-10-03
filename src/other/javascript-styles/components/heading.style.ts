import { size13, size21, size8 } from "../utilities/fibonacci-sizes";
import textShadow from "../utilities/text-shadow";
import size from '../utilities/font-and-line-size'

export const heading = /*css*/`
  section-heading {
    font-weight: bold;
    ${size(size13)}
    text-shadow: ${textShadow};
    color: #66add6;
    margin-bottom: ${size21}px;
  }
`