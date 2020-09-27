import {size1, size13, size3, size5, size8} from "../utilities/fibonacci-sizes";
import size from '../utilities/font-and-line-size'
import textShadow from "../utilities/text-shadow";


export const form = /*css*/`
  .form{    
  }
  label{
    ${size(size8)}
    margin-bottom: ${size3}px;
    text-shadow: ${textShadow};
    color: #66add6;
  }  
  .text-input{
    display: block;
    color: #333;
    background-color: white;
    border: 1px solid #9eb7e0;
    border-radius: ${size1}px;
  }
  form-field{    
    margin-bottom: ${size13}px;
  }
`
