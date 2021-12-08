import { size13,  size233,  size3,  size5,  size55,  size8 } from "../utilities/fibonacci-sizes";
import { mainFont } from "../utilities/fonts";
import { pxToRem } from "../utilities/pixels-to-rems";

export const personalPriorityReminder = /*css*/`
  personal-priorityReminder {
    background-color: #222;
    background-image: url('images/cracks-bg.jpg');
    max-width: ${size233}px;
    margin: 0 auto;
    display: block;
    min-height: 100vh;
    position: absolute;
    right: 0;
    left: 0;
    padding: ${pxToRem(size13)} ${pxToRem(size8)};
    font-family: ${mainFont};
    box-shadow: 0 0 ${pxToRem(size5)} ${pxToRem(size3)} black;
    color: white;
  }  


`