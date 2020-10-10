import { greenButton, lightGreenButton, lightRedButton, purpleButton, redButton } from "../utilities/button-colors";
import { size2, size21, size5, size8 } from "../utilities/fibonacci-sizes";
import { pxToRem } from "../utilities/pixels-to-rems";

export const quiz = /*css*/`
  button.start {
    ${greenButton}
  }

  button.Correct{   
    ${greenButton}
  }
  button.Almost{  
    ${lightGreenButton} 
  }
  button.Kinda{   
    ${lightRedButton}
  }
  button.Wrong{   
    ${redButton}
  }
  
  button.submit, button.next{   
    ${purpleButton}
  }

  hr {
    border: 0;
    border-bottom: 1px solid #66add6;
    margin: ${pxToRem(size21)} 0;
  }

` 