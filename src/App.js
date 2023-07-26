import { createContext, useEffect, useState } from "react"
import "./App.css"
import { useDispatch } from "react-redux"
import Routing from "./routing/Routes"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { fire } from "./config/firebaseConfig"
import { updateUser } from "./redux/actions"

export const GlobalsContext = createContext()

function App() {
    const dispatch = useDispatch()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    useEffect(() => {
        const checkAuthState = async () => {
            onAuthStateChanged(getAuth(fire), (user) => {
                if (user) {
                    dispatch(updateUser(user))
                    setIsAuthenticated(true)
                }
            })
        }
        checkAuthState()
    }, [])
    return (
        <GlobalsContext.Provider value={{ dispatch, isAuthenticated }}>
            <Routing />
        </GlobalsContext.Provider>
    )
}

export default App
