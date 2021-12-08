import { aquaButton, greenButton, lightGreenButton, lightRedButton,  redButton } from "../utilities/button-colors";
import { size21, size3, size5 } from "../utilities/fibonacci-sizes";
import { pxToRem } from "../utilities/pixels-to-rems";

export const priorityReminder = /*css*/`

  button.start {
    margin-top: ${pxToRem(size21)};
    ${greenButton}
  }

  reminder-categories{
    color: white;
    font-style: italic;
    font-size: ${pxToRem(size5)};
  }

  importance-mark-buttons{
    margin-top: ${pxToRem(size21)}; 
  }

  importance-mark-button.Important{   
    ${greenButton}
  }
  importance-mark-button.Mostly{ 
    ${lightGreenButton} 
  }
  importance-mark-button.Kinda{   
    ${lightRedButton}
  }
  importance-mark-button.Unimportant{  
    ${redButton}
  }
  
  button.submit, button.next{  
    margin-top: ${pxToRem(size21)}; 
    ${aquaButton}
  }

  hr {
    border: 0;
    border-bottom: 1px solid #66add6;
    margin: ${pxToRem(size21)} 0;
  }

` 