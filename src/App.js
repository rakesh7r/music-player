import { createContext, useEffect } from "react"
import "./App.css"
import { useDispatch } from "react-redux"
import Routing from "./routing/Routes"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { fire } from "./config/firebaseConfig"
import { updateUser } from "./redux/actions"

export const GlobalsContext = createContext()

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        const checkAuthState = async () => {
            onAuthStateChanged(getAuth(fire), (user) => {
                console.log(user)
                if (user) dispatch(updateUser(user))
            })
        }
        checkAuthState()
    }, [])
    return (
        <GlobalsContext.Provider value={{ dispatch }}>
            <Routing />
        </GlobalsContext.Provider>
    )
}

export default App
