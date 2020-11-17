import { greenButton, lightGreenButton, lightRedButton, purpleButton, redButton } from "../utilities/button-colors";
import { buttonStyle } from "../utilities/buttons.style";
import { size2, size21, size5, size8 } from "../utilities/fibonacci-sizes";
import { pxToRem } from "../utilities/pixels-to-rems";

export const quiz = /*css*/`
  button.start {
    ${buttonStyle}
    ${greenButton}
  }

  correctness-mark-button.Correct{   
    ${buttonStyle}
    ${greenButton}
  }
  correctness-mark-button.Almost{ 
    ${buttonStyle} 
    ${lightGreenButton} 
  }
  correctness-mark-button.Kinda{   
    ${buttonStyle}
    ${lightRedButton}
  }
  correctness-mark-button.Wrong{  
    ${buttonStyle} 
    ${redButton}
  }
  
  button.submit, button.next{   
    ${buttonStyle}
    ${purpleButton}
  }

  hr {
    border: 0;
    border-bottom: 1px solid #66add6;
    margin: ${pxToRem(size21)} 0;
  }

` 