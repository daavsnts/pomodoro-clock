const initialState = {
    currentMinutes: 5
}

export default function sessionBreak(state = initialState, action: any) {
    switch(action.type) {
        case "break/reset":
            return { ...state , currentMinutes: 5 }
        case "break/increment":
            if ((state.currentMinutes == 60)) return { ...state, currentMinutes: 60 }
            return { ...state, currentMinutes: state.currentMinutes + 1}
        case "break/decrement":
            if ((state.currentMinutes == 1)) return { ...state, currentMinutes: 1 }
            return { ...state, currentMinutes: state.currentMinutes - 1}
    }
    return state
}