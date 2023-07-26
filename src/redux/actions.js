import {
    UPDATE_CREDS,
    UPDATE_HOME,
    UPDATE_SEARCH_RESULTS,
    UPDATE_USER,
} from "./types"

export const updateUser = (user) => ({
    type: UPDATE_USER,
    payload: user,
})
export const updateCreds = (creds) => ({
    type: UPDATE_CREDS,
    payload: creds,
})

export const updateHome = (list) => ({
    type: UPDATE_HOME,
    payload: list,
})

export const updateSearchResults = (list) => ({
    type: UPDATE_SEARCH_RESULTS,
    payload: list,
})
