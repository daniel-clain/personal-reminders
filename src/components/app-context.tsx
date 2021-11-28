/* import { useLocalStore } from "mobx-react"
import React from "react"
import { App } from "./app"

const AppContext = React.createContext(null)

export const AppProvider = ({children}) => {
  const appStore = useLocalStore()
  return <AppContext.Provider value={appStore}>
    {children}
  </AppContext.Provider>
}

export const useAppContext = React.useContext(AppContext)
 */