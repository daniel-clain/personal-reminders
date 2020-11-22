import { aquaButton, greenButton, lightGreenButton, lightRedButton,  redButton } from "../utilities/button-colors";
import { size21, size3, size5 } from "../utilities/fibonacci-sizes";
import { pxToRem } from "../utilities/pixels-to-rems";

export const quiz = /*css*/`

  button.start {
    ${greenButton}
  }

  question-categories{
    color: white;
    font-style: italic;
    font-size: ${pxToRem(size5)};
  }


  correctness-mark-button.Correct{   
    ${greenButton}
  }
  correctness-mark-button.Almost{ 
    ${lightGreenButton} 
  }
  correctness-mark-button.Kinda{   
    ${lightRedButton}
  }
  correctness-mark-button.Wrong{  
    ${redButton}
  }
  
  button.submit, button.next{   
    ${aquaButton}
  }

  hr {
    border: 0;
    border-bottom: 1px solid #66add6;
    margin: ${pxToRem(size21)} 0;
  }

` 