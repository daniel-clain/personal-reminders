import { purpleButton } from "../utilities/button-colors";
import { size13, size2, size5, size8 } from "../utilities/fibonacci-sizes";
import { size } from "../utilities/font-and-line-size";
import { pxToRem } from "../utilities/pixels-to-rems";

export const list = /*css*/`



  input.list-filter{  
    margin-bottom: ${pxToRem(size8)};
    display: block;
    margin-left: auto;
    ${size(size5)};
  }


  list-item {
    background: #66add633;
    padding: ${pxToRem(size2)} ${pxToRem(size5)};
    color: #91cff1;
    margin-top: ${pxToRem(size2)};
    max-height: ${pxToRem(size13)};
    transition: all .5s linear;
    opacity: 1;
    overflow: hidden;
  }


  list-item[filtered-out]{
    max-height: 0;
    padding: 0 ${pxToRem(size5)};;
    margin: 0;
    opacity: 0;
    transform: translateX(-100%);
  }

  list-item[expanded]{
    max-height: 800px;
    background: #ffffff1f;
  }

  button.collapse{    
    margin-left: auto;
    display: block;
    ${purpleButton}
  }

` 