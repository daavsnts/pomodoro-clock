import './Display.css'
import { useSelector, useDispatch } from 'react-redux'
import { rootReducer, RootState } from '../../redux/root-reducer'

export default function Display() {

    const { currentSession } = useSelector((rootReducer: RootState) => rootReducer.sessionReducer)
    const { currentBreak } = useSelector((rootReducer: RootState) => rootReducer.breakReducer)
    const dispatch = useDispatch()

    function reset() {
        dispatch({ type: "session/reset" })
        dispatch({ type: "break/reset" })
    }

    return (
        <div className="Display">
            <div className="Session">
                <p id="timer-label">Session</p>
                <h1 id="time-left">{currentSession}:00</h1>
            </div>
            <div className="SessionControls">
                <h1 id="start_stop">Play/Pause</h1>
                <h1 id="reset" onClick={() => reset()}>Reset</h1>
            </div>
        </div>
    )
}