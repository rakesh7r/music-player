import { useContext } from "react"
import { GlobalsContext } from "../App"

function ProtectedRoute({ children }) {
    const { isAuthenticated } = useContext(GlobalsContext)
    return isAuthenticated ? children : <h1>No user signed in</h1>
}

export default ProtectedRoute
