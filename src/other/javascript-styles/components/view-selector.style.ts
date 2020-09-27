import { size13, size21, size8 } from "../utilities/fibonacci-sizes";
import textShadow from "../utilities/text-shadow";
import size from '../utilities/font-and-line-size'


export const viewSelector = /*css*/`
  view-selectors{
    display: grid;
    grid-template-columns: repeat(3, auto);
    margin-bottom: ${size21}px;
  }
  view-selector{
    font-weight: bold;
    ${size(size8)}
    text-shadow: ${textShadow};
    color: #66d66d;
  }
`