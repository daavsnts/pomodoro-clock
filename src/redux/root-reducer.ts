import { combineReducers } from "redux"
import sessionReducer from "./session/reducer"
import breakReducer from "./break/reducer"
import playReducer from "./play/reducer"

export const rootReducer = combineReducers({
    sessionReducer,
    breakReducer,
    playReducer
})

export type RootState = ReturnType<typeof rootReducer>