import { size2, size5 } from "../utilities/fibonacci-sizes";

export const list = /*css*/`
  list-item {
    background: #66add633;
    padding: ${size2}px ${size5}px;
    color: #91cff1;
    margin-top: ${size2}px;
    max-height: 30px;
    transition: all .5s linear;
    opacity: 1;
    overflow: hidden;
  }

  list-item[filtered-out]:not([expanded]){
    max-height: 0;
    padding: 0 10px;
    margin: 0;
    opacity: 0;
    transform: translateX(-100%);
  }
  list-item[expanded]{
    max-height: 800px;
    background: #ffffff1f;

  }

` 