import { size233 } from "../javascript-styles/utilities/fibonacci-sizes"

const reduceBaseSizeOnSmallDeviceWidth = personalQuizContainer => {
    
  updateIfWidthIsSmallerThanDefault()

  window.onresize = e => {
    updateIfWidthIsSmallerThanDefault()
  }

  function updateIfWidthIsSmallerThanDefault(){
    const appWidth = personalQuizContainer.clientWidth
    if(appWidth < size233){  
      const percencategoryeOfMaxWidth = appWidth / size233
      const newFontSize = percencategoryeOfMaxWidth * 16
      document.documentElement.style.fontSize = `${newFontSize}px`
    }
  }
}


export const deviceWidthService = {  
  reduceBaseSizeOnSmallDeviceWidth
}
