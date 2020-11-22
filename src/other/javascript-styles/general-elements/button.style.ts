import boxShadow from "../utilities/box-shadow";
import { size1, size8, size3, size5, size13, size21 } from "../utilities/fibonacci-sizes";
import { size } from "../utilities/font-and-line-size";
import { pxToRem } from "../utilities/pixels-to-rems";

export const button = /*css*/`
  .button, button {
    border: ${pxToRem(size1)} outset black;
    ${size(size8)};
    padding: ${pxToRem(size3)} ${pxToRem(size5)};
    border-radius: ${pxToRem(size3)};
    display: inline-block;
    text-shadow: 1px 1px #000000;
    box-shadow: ${boxShadow};
    transition-duration: 0.2s;
    transition-property: filter;
    margin-right: ${pxToRem(size3)};
    cursor: pointer;
  }

  .button:last-of-type, button:last-of-type{
    margin-right: unset;
  }

  .button:active, button:active{
    transform: translateY(${pxToRem(size1)})
  }
  .button[selected], button[selected]{
    filter: brightness(1.2);
  }
  

  .button[notselected], button[notselected]{
    filter: brightness(0.6);
  }
`
