import { size1, size13, size2, size21, size3, size5, size8 } from "../utilities/fibonacci-sizes";
import size from '../utilities/font-and-line-size'
import { mainFont } from "../utilities/fonts";

export const base = /*css*/`
  body{
    background-color: #333;
  }
  personal-quiz {
    background-color: #222;
    background-image: url('images/cracks-bg.jpg');
    background-blend-mode: color-burn;
    max-width: 500px;
    margin: 0 auto;
    display: block;
    min-height: 100vh;
    position: absolute;
    right: 0;
    left: 0;
    padding: ${size13}px ${size8}px;
    font: 15px ${mainFont};
    box-shadow: 0 0 13px 6px black;
  }  
 
  personal-quiz * {
    display: block;
    max-width: 100%;
    box-sizing: border-box;
  }

  .section + .section{
    padding-top: ${size21}px;
    border-top: 1px solid #66add6;
    margin-top: ${size21}px;
    
  }
  button{
    border: 2px outset black;
    font-weight: bold;
    ${size(size8)};
    padding: ${size5}px ${size8}px;
    border-radius: ${size3}px;
    display: inline-block;
  }
  button + button{
    margin-left: ${size5}px;
  }

  button.add, 
  button.update{
    background-color: #276b31;
    color: #dff3e6;
    border-color: #2c9654;
  }

  button.delete{
    background-color: #883535;
    border-color: #924242;
    color: #f7e0e0;
  }
  button.collapse{    
    margin-left: auto;
    display: block;
    background: #543865;
    color: #f3deff;
    border-color: #6f4688;
  }
`