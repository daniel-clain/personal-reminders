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
    overflow-y: scroll;
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
    align-items: flex-start;
    width:100%;
    margin-bottom: ${v_spacing}px;
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
    white-space: nowrap;
    overflow: hidden;

  }

  category-tag[selected]{
    background: yellow;
  }
  category-wrapper[expanded]{
    max-width: max-content;
  }

  @keyframes tag-leave {
    0%   { 
      opacity: 1; 
      max-width: 200px;
    }
    80%{
      padding: ${size1}px ${size3}px;
      margin: 0 ${h_spacing}px ${v_spacing}px 0;
      box-shadow: 2px 2px 4px 1px rgb(0 0 0 / 0.80);
    }
    99% { 
      opacity: 1; 
      max-width: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: 0 0 transparent;
      margin: 0;
    }
    100% {
      display: none;
      opacity: 1; 
      max-width: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: 0 0 transparent;
      margin: 0;
    }
  }

  category-wrapper[is-hidden] {
    animation: tag-leave .5s forwards;
  }

  parent-categories, child-categories{
    
    border-radius: 12px;
    color: black;
    border: 1px solid #b1b1b1;
    font-size: 9px;
    display: flex;
    align-items: center;
    margin-left: 6px;
    height: 16px;
    width: 16px;
    justify-content: center;
    align-self: center;
  }
  parent-categories{
    margin-left: unset;
    margin-right: 6px;

  }

  category-wrapper[expanded] > category-tag > child-categories{
    background: #99ffb8;    
  }
`
