const initialState = {
    currentSession: 25
}

export default function sessionReducer(state = initialState, action: any) {
    switch(action.type) {
        case "session/reset":
            return { ...state, currentSession: 25 }
        case "session/increment":
            if ((state.currentSession == 60)) return { ...state, currentSession: 60 }
            return { ...state, currentSession: state.currentSession + 1}
        case "session/decrement":
            if ((state.currentSession == 1)) return { ...state, currentSession: 1 }
            return { ...state, currentSession: state.currentSession - 1}
    }
    return state
}