import { combineReducers } from "redux"
import sessionReducer from "./session/reducer"
import breakReducer from "./break/reducer"

export const rootReducer = combineReducers({
    sessionReducer,
    breakReducer
})

export type RootState = ReturnType<typeof rootReducer>