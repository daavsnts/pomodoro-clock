const initialState = {
    currentTimerLabel: "Session",
    currentMinutes: 0,
    currentSeconds: 0,
    currentPlay: false
}

export default function clockReducer(state = initialState, action: any) {
    switch(action.type) {
        case "clock/on":
            return { ...state, currentPlay: true }
        case "clock/off":
            return { ...state, currentPlay: false }
        case "clock/changeLabel":
            if (state.currentTimerLabel == "Session") {
                return { ...state, currentTimerLabel: "Break" }
            } else {
                return { ...state, currentTimerLabel: "Session" }
            }
        case "clock/changeToSpecificLabel":
            return { ...state, currentTimerLabel: action.payload }
        case "clock/changeMinutes":
            return { ...state, currentMinutes: action.payload }
        case "clock/decrementMinutes":
            return { ...state, currentMinutes: state.currentMinutes - 1}
        case "clock/changeSeconds":
            return { ...state, currentSeconds: action.payload }
        case "clock/decrementSeconds":
            return { ...state, currentSeconds: state.currentSeconds - 1}
    }
    return state
}