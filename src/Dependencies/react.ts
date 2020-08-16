import ReactDOM from "react-dom"


export const react = {
  render: (personalQuizApp: JSX.Element) => {
    const appRootElement = document.createElement(`<personal-quiz></personal-quiz>`);
    document.body.appendChild(appRootElement);
    ReactDOM.render(personalQuizApp, appRootElement)
  }
}