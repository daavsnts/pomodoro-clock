const initialState = {
    currentPlay: false
}

export default function playReducer(state = initialState, action: any) {
    switch(action.type) {
        case "play/onoff":
            return { ...state, currentPlay: !(state.currentPlay) }
    }
    return state
}