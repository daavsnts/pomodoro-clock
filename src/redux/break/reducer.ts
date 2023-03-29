const initialState = {
    currentBreak: 5
}

export default function sessionBreak(state = initialState, action: any) {
    switch(action.type) {
        case "break/reset":
            return { ...state , currentBreak: 5 }
        case "break/increment":
            return { ...state, currentBreak: state.currentBreak + 1}
        case "break/decrement":
            return { ...state, currentBreak: state.currentBreak - 1}
    }
    return state
}