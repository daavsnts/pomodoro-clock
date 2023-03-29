import './Controls.css'
import { useSelector, useDispatch } from 'react-redux'
import { rootReducer, RootState } from '../../redux/root-reducer'

export default function Controls() {
    // Redux test
    const { currentSession } = useSelector((rootReducer: RootState) => rootReducer.sessionReducer)
    const { currentBreak } = useSelector((rootReducer: RootState) => rootReducer.breakReducer)
    const dispatch = useDispatch()
    //

    return (
        <div className="Controls">
            <div className="Control">
                <h1 id="break-label">Break Length</h1>
                <div className="Switch">
                    <p id="break-decrement" onClick={() => dispatch({ type: "break/decrement" })}>-</p>
                    <p id="break-length">{currentBreak}</p>
                    <p id="break-increment" onClick={() => dispatch({ type: "break/increment" })}>+</p>
                </div>
            </div>
            <div className="Control">
                <h1 id="session-label">Session Length</h1>
                <div className="Switch">
                    <p id="session-decrement" onClick={() => dispatch({ type: "session/decrement" })}>-</p>
                    <p id="session-length">{currentSession}</p>
                    <p id="session-increment" onClick={() => dispatch({ type: "session/increment" })}>+</p>
                </div>
            </div>
        </div>
    )
}