const initialState = {
    currentMinutes: 25
}

export default function sessionReducer(state = initialState, action: any) {
    switch(action.type) {
        case "session/reset":
            return { ...state, currentMinutes: 25 }
        case "session/increment":
            if ((state.currentMinutes == 60)) return { ...state, currentMinutes: 60 }
            return { ...state, currentMinutes: state.currentMinutes + 1}
        case "session/decrement":
            if ((state.currentMinutes == 1)) return { ...state, currentMinutes: 1 }
            return { ...state, currentMinutes: state.currentMinutes - 1}
    }
    return state
}