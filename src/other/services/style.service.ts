
import * as allStyles from '../javascript-styles'

const setupStyles = () => {
    const sheet = document.createElement('style')
  sheet.innerHTML = Object.values(allStyles).join('')
  document.head.appendChild(sheet)
}

export default setupStyles