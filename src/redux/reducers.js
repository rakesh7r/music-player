import {
    UPDATE_CREDS,
    UPDATE_HOME,
    UPDATE_SEARCH_RESULTS,
    UPDATE_USER,
} from "./types"

const initialState = {
    homeResults: null,
    searchResults: null,
}
const userState = {
    user: null,
    creds: null,
}

export const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER:
            return { ...state, user: action.payload }
        case UPDATE_CREDS:
            return { ...state, creds: action.payload }
        case UPDATE_HOME:
            return { ...state, homeResults: action.payload }
        case UPDATE_SEARCH_RESULTS:
            return { ...state, searchResults: action.payload }
        default:
            return state
    }
}

export const userReducer = (state = userState, action) => {
    switch (action.type) {
        case UPDATE_USER:
            return { ...state, user: action.payload }
        case UPDATE_CREDS:
            return { ...state, creds: action.payload }
        default:
            return state
    }
}
