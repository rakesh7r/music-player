import Account from "../pages/Account"
import Home from "../pages/Home"
import Search from "../pages/Search"

export const routesArray = [
    { id: 1, path: "/", element: <Home /> },
    { id: 2, path: "/home", element: <Home /> },
    { id: 3, path: "/search", element: <Search /> },
    { id: 4, path: "/profile", element: <Account /> },
    { id: 5, path: "/*", element: <Home /> },
]
