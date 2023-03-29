const initialState = {
    currentSession: 25
}

export default function sessionReducer(state = initialState, action: any) {
    switch(action.type) {
        case "session/reset":
            return { ...state, currentSession: 25 }
        case "session/increment":
            return { ...state, currentSession: state.currentSession + 1}
        case "session/decrement":
            return { ...state, currentSession: state.currentSession - 1}
    }
    return state
}