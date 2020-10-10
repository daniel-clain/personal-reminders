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
    ${size(size8)}
    
    box-shadow: ${boxShadow}, inset 1px 1px 1px 0 #8cafd2;  
    margin-right: ${pxToRem(size8)};;
    padding: ${pxToRem(size3)} ${pxToRem(size8)};
    border-radius: ${pxToRem(size13)};
    text-shadow: 1px 1px #0f1a25;
    transition-duration: 0.5s;
    transition-property: color, background;
    color: #e4f2ff;
    background: #3b5e81;
  }
  view-selector[isActive]{
    color: #ffffff;
    background: #3676b7;
  }
`