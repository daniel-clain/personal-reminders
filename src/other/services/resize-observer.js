const resizeObserver = new ResizeObserver( elem => {
  const compressedWidth = elem[0].target.clientWidth

  const percencategoryeOfMaxWidth = compressedWidth / 500
  const newFontSize = percencategoryeOfMaxWidth * 12
  document.documentElement.style.fontSize = `${newFontSize}px`

}) 

export default resizeObserver