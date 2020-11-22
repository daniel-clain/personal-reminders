import { size13, size21, size3, size8 } from "../utilities/fibonacci-sizes";
import textShadow from "../utilities/text-shadow";
import boxShadow from "../utilities/box-shadow";
import { size } from "../utilities/font-and-line-size";
import { pxToRem } from "../utilities/pixels-to-rems";

const spacing = size8

export const viewSelector = /*css*/`
  view-selectors{
    display: grid;
    grid-template-columns: repeat(3, auto);
    margin-bottom: ${pxToRem(size21)};
    justify-content: start;
    margin-right: -${spacing};
  }
  view-selector{
    color: #e4f2ff;
    background: #3b5e81;
  }
`