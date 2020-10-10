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
    padding: 0 ${pxToRem(size5)};
    ${size(size8)}
    color: #91cff1;
    margin-top: ${pxToRem(size2)};
    height: ${pxToRem(size13)};
    display: flex;
    justify-content: center;
    flex-direction: column;
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
    background: #789db333;
    height: unset;
    padding: ${pxToRem(size8)} ${pxToRem(size8)};
  }

  button.collapse{    
    margin-left: auto;
    display: block;
    ${purpleButton}
  }

` 