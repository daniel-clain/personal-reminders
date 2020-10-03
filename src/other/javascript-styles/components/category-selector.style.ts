import boxShadow from "../utilities/box-shadow";
import { size1, size3, size5, size8 } from "../utilities/fibonacci-sizes";

const h_spacing = size5
const v_spacing = size3

export const categorySelector = /*css*/`

  category-selector{
    
    width: 100%;
    border-radius: ${size1}px;
    border: 2px solid #10839a;
    box-shadow: ${boxShadow}, inset 1px 1px 1px 1px #1f3244, inset -1px -1px 1px 1px #14586d;
    background: #5d96d033;
    padding: ${size8}px;
  }

  input.categories-filter{  
    margin-bottom: ${size8}px;
    display: block;
    margin-left: auto;
  }
  categories-container{
    margin: 0 -${h_spacing}px -${v_spacing}px 0;
    display: flex;
    flex-wrap: wrap;
    max-width: unset;
  }
  categories-container:after{
    content: '';
    flex: 100;
  }

  category-tag{      
    flex: auto;  
    display: inline-flex;
    background: #ffffff;
    margin: 0 ${h_spacing}px ${v_spacing}px 0;
    padding: ${size1}px ${size3}px;
    color: #000000;
    box-shadow: 2px 2px 4px 1px rgb(0 0 0 / 0.80);
    border-radius: 2px;
    justify-content: center;
  }

  category-tag[selected]{
    background: yellow;
  }
`
