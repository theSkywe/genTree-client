import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import treeReducer from "../reducers/reducers"

export default function configureStore(initialState) {
    const store = createStore(treeReducer, initialState, applyMiddleware(thunk))
    return store
}