import {size1, size13, size2, size21, size3, size34, size5, size55, size8} from "../utilities/fibonacci-sizes";
import boxShadow from "../utilities/box-shadow";
import textShadow from "../utilities/text-shadow";
import { greenButton, redButton } from "../utilities/button-colors";
import { size } from "../utilities/font-and-line-size";
import { pxToRem } from "../utilities/pixels-to-rems";
import { scrollbarWidth } from "../utilities/scrollbar-width";
import { mainFont } from "../utilities/fonts";


export const form = /*css*/`
  label{
    ${size(size8)}
    margin-bottom: ${pxToRem(size3)};
    text-shadow: ${textShadow};
    color: #99daff;
  }  
  textarea{
    height: ${pxToRem(size55)};
    width: 100%;
    border-radius: ${pxToRem(size1)};
    border-right: 0;
    background: rgb(255 255 255 / 86%);
    padding: ${pxToRem(size5)} ${pxToRem(size5)};
    padding-right: ${pxToRem(size5 - scrollbarWidth)};
    overflow-y: scroll;
    color: black;
    resize: none;
    box-shadow: ${boxShadow};
    font-family: ${mainFont}, arial;
  }

  form-field {
    margin-bottom: ${pxToRem(size21)};
  }

  form-field:last-of-type {
    margin-bottom: 0;
  }

  form-buttons{
    margin-top: ${pxToRem(size21)};
  } 
  form-buttons.has-small-buttons{
    margin-top: ${pxToRem(size5)};
  }
  
  form-buttons.has-small-buttons button{
    ${size(size5)};
    padding: ${pxToRem(size1)} ${pxToRem(size2)};
    filter: contrast(0.8) brightness(0.8);
  }
  
  button.add, 
  button.update{
    ${greenButton}
  }

  button.delete{
    ${redButton}
  }
`
