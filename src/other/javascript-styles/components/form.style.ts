import {size1, size13, size21, size3, size34, size5, size8} from "../utilities/fibonacci-sizes";
import size from '../utilities/font-and-line-size'
import boxShadow from "../utilities/box-shadow";
import textShadow from "../utilities/text-shadow";


export const form = /*css*/`
  .form{    
  }
  label{
    ${size(size8)}
    margin-bottom: ${size3}px;
    text-shadow: ${textShadow};
    color: #99daff;
  }  
  text-input{
    height: ${size34}px;
    width: 100%;
    border-radius: ${size1}px;
    border: 2px solid #10839a;
    box-shadow: ${boxShadow}, inset 1px 1px 1px 1px #1f3244, inset -1px -1px 1px 1px #14586d;
    background: white;
    padding: ${size8}px ${size5}px;
    overflow-y: scroll;
    outline: none;
    color: black;
  }
  form-field{    
    margin-bottom: ${size21}px;
  }
`
