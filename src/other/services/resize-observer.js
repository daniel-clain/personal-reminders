const resizeObserver = new ResizeObserver( elem => {
  const appWidth = elem[0].target.clientWidth
  /* 
  if(appWidth < 500){  
    const percencategoryeOfMaxWidth = appWidth / 500
    const newFontSize = percencategoryeOfMaxWidth * 12
    document.documentElement.style.fontSize = `${newFontSize}px`
  } */

}) 

export default resizeObserver