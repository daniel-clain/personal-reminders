import { aquaButton } from "../utilities/button-colors";
import { size13, size2, size21, size5, size8 } from "../utilities/fibonacci-sizes";
import { size } from "../utilities/font-and-line-size";
import { pxToRem } from "../utilities/pixels-to-rems";

export const list = /*css*/`

  filter-tools{
    display: flex;
    margin-bottom: ${pxToRem(size8)};
  }

  .no-category-checkbox{
    ${size(size5)}
    display: inline-flex;
    align-items: center;
    margin-bottom: 0;
  }
  .no-category-checkbox input{
    width: ${size8}px;
    height: ${size8}px;
    margin-left: ${size5}px;
  }

  input.list-filter{  
    display: block;
    margin-left: auto;
    ${size(size5)};
  }


  list-item {
    background: #66add633;
    padding: 0 ${pxToRem(size5)};
    ${size(size8)}
    color: #91cff1;
    margin-top: ${pxToRem(size2)};
    height: ${pxToRem(size13)};
    display: flex;
    justify-content: center;
    flex-direction: column;
    transition: all 0.2s;
  }


  list-item[filtered-out]{
    max-height: 0;
    padding: 0 ${pxToRem(size5)};;
    margin: 0;
    opacity: 0;
    transform: translateX(-100%);
  }

  list-item[expanded]{
    max-height: 800px;
    background: #789db333;
    height: unset;
    padding: ${pxToRem(size8)} ${pxToRem(size8)};
  }

  button.collapse{    
    margin-left: auto;
    display: block;
    ${aquaButton}
  }

  item-excerpt {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

` 