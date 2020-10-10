import boxShadow from "../utilities/box-shadow";
import { size1, size13, size144, size2, size3, size5, size8 } from "../utilities/fibonacci-sizes";
import { size } from "../utilities/font-and-line-size";
import { pxToRem } from "../utilities/pixels-to-rems";
import { scrollbarWidth } from "../utilities/scrollbar-width";

const h_spacing = size5
const v_spacing = size5



export const categorySelector = /*css*/`

  category-selector{
    
    width: 100%;
    border-radius: ${pxToRem(size1)};
    border: ${pxToRem(size1)} solid #10839a;
    box-shadow: ${boxShadow}, inset 1px 1px 1px 1px #1f3244, inset -1px -1px 1px 1px #14586d;
    background: #5d96d033;
    padding: ${pxToRem(size8)};
    padding-right: ${pxToRem(size8)};
    overflow-y: scroll;
    max-height: ${pxToRem(size144)}

  }

  categories-container + categories-container {
    margin-top: ${pxToRem(size8)};
  }

  input.categories-filter{  
    margin-bottom: ${pxToRem(size8)};
    display: block;
    margin-left: auto;
    ${size(size5)};
  }

  categories-container{
    margin-right: -${pxToRem(h_spacing)};    
    margin-bottom: -${pxToRem(v_spacing)};    
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  categories-container:after{
    content: '';
    flex: 100;
  }

  category-tag{      
    flex: auto;  
    display: inline-flex;
    background: #ffffff;
    margin: 0 ${pxToRem(h_spacing)} ${pxToRem(v_spacing)} 0;
    padding: 0 ${pxToRem(size3)};
    color: #000000;
    box-shadow: ${pxToRem(size1)} ${pxToRem(size1)}
    ${pxToRem(size1)} ${pxToRem(size1)} rgb(0 0 0 / 0.80);
    border-radius: ${pxToRem(size1)};
    justify-content: center;
    white-space: nowrap;
    height: ${pxToRem(size13)};
    align-items: center;
    overflow: hidden;

  }

  category-tag[is-hidden]{
    display: none;
  }
  category-tag[selected]{
    background: #ffec63;
  }
  category-wrapper[expanded]{
    max-width: max-content;
  }

  expanded-category-wrapper{
    margin-top: ${pxToRem(size5)};
    border-top: 1px white solid;
    padding-top: ${pxToRem(size8)};
  }

  parent-categories, child-categories{
    cursor: pointer;
    border-radius: ${pxToRem(size8)};
    color: black;
    border: 1px solid #b1b1b1;
    ${size(size5)};;
    display: flex;
    align-items: center;
    margin-left: ${pxToRem(size3)};
    height: ${pxToRem(size8)};
    width: ${pxToRem(size8)};
    justify-content: center;
    align-self: center;
  }
  parent-categories{
    margin-left: unset;
    margin-right: ${pxToRem(size3)};;
  }

  category-tag[is-expanded] > child-categories{
    background: #99ffb8;    
  }
`
