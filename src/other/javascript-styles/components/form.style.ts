import {size1, size13, size21, size3, size34, size5, size55, size8} from "../utilities/fibonacci-sizes";
import boxShadow from "../utilities/box-shadow";
import textShadow from "../utilities/text-shadow";
import { greenButton, redButton } from "../utilities/button-colors";
import { size } from "../utilities/font-and-line-size";
import { pxToRem } from "../utilities/pixels-to-rems";


export const form = /*css*/`
  .form{    
  }
  label{
    ${size(size8)}
    margin-bottom: ${pxToRem(size3)};
    text-shadow: ${textShadow};
    color: #99daff;
  }  
  text-input{
    height: ${pxToRem(size55)};
    width: 100%;
    border-radius: ${pxToRem(size1)};
    border:  ${pxToRem(size1)} solid #10839a;
    border-right: 0;
    box-shadow: ${boxShadow}, inset 1px 1px 1px 1px #1f3244, inset -1px -1px 1px 1px #14586d;
    background: white;
    padding: ${pxToRem(size5)} ${pxToRem(size5)};
    overflow-y: scroll;
    color: black;
  }
  form-field{    
    margin-bottom: ${pxToRem(size21)};
  }
  
  button.add, 
  button.update{
    ${greenButton}
  }

  button.delete{
    ${redButton}
  }
`
