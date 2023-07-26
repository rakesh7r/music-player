import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
} from "redux"
import { musicReducer, userReducer } from "./reducers"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { Provider } from "react-redux"

const rootReducer = combineReducers({
    music: musicReducer,
    user: userReducer,
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export const DataProvider = ({ children }) => {
    return <Provider store={store}>{children}</Provider>
}
