const initialState = {
    currentBreak: 5
}

export default function sessionBreak(state = initialState, action: any) {
    switch(action.type) {
        case "break/reset":
            return { ...state , currentBreak: 5 }
        case "break/increment":
            if ((state.currentBreak == 60)) return { ...state, currentBreak: 60 }
            return { ...state, currentBreak: state.currentBreak + 1}
        case "break/decrement":
            if ((state.currentBreak == 1)) return { ...state, currentBreak: 1 }
            return { ...state, currentBreak: state.currentBreak - 1}
    }
    return state
}