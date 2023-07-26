import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { routesArray } from "./RoutesArray"
import ProtectedRoute from "./ProtectedRoute"
import Header from "../components/Header"

const Routing = () => {
    return (
        <Router>
            <Header />
            <Routes>
                {routesArray.map((route) => {
                    return (
                        <Route
                            key={route.id}
                            path={route.path}
                            element={
                                <ProtectedRoute>{route.element}</ProtectedRoute>
                            }
                        />
                    )
                })}
            </Routes>
        </Router>
    )
}
export default Routing
