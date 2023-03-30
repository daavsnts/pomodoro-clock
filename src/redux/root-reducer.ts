import { combineReducers } from "redux"
import sessionReducer from "./session/reducer"
import breakReducer from "./break/reducer"
import clockReducer from "./clock/reducer"

export const rootReducer = combineReducers({
    sessionReducer,
    breakReducer,
    clockReducer
})

export type RootState = ReturnType<typeof rootReducer>