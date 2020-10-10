const reduceBaseSizeOnSmallDeviceWidth = personalQuizContainer => {
    
  window.onresize = e => {
    console.log('tada, i did that shit')
    const appWidth = personalQuizContainer.clientWidth
    if(appWidth < 500){  
      const percencategoryeOfMaxWidth = appWidth / 500
      const newFontSize = percencategoryeOfMaxWidth * 16
      document.documentElement.style.fontSize = `${newFontSize}px`
    }
  }
}


export const deviceWidthService = {  
  reduceBaseSizeOnSmallDeviceWidth
}
