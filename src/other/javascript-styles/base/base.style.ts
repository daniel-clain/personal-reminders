import { size13, size5, size8 } from "../utilities/fibonacci-sizes";
import { mainFont } from "../utilities/fonts";

export const base = /*css*/`
  body{
    background-color: #333;
  }
  personal-quiz {
    background-color: #222;
    background-image: url('images/cracks-bg.jpg');
    background-blend-mode: color-burn;
    color: #1b63ce;
    max-width: 500px;
    margin: 0 auto;
    display: block;
    min-height: 100vh;
    position: absolute;
    right: 0;
    left: 0;
    padding: ${size8}px ${size5}px;
    font: 15px ${mainFont};
    box-shadow: 0 0 13px 6px black;
  }  
 
  personal-quiz * {
    display: block;
  }

  view-selectors{
    margin-bottom: 30px;
  }
`