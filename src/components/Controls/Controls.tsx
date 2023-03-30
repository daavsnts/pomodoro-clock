import './Controls.css'
import { useSelector, useDispatch } from 'react-redux'
import { rootReducer, RootState } from '../../redux/root-reducer'
import { useState } from 'react'

export default function Controls() {
    const { currentSession } = useSelector((rootReducer: RootState) => rootReducer.sessionReducer)
    const { currentBreak } = useSelector((rootReducer: RootState) => rootReducer.breakReducer)
    const { currentPlay } = useSelector((rootReducer: RootState) => rootReducer.playReducer)
    const dispatch = useDispatch()

    function increment(type: string) {
        if (!currentPlay) {
            switch(type) {
                case "break":
                    dispatch({ type: "break/increment" })
                    break;
                case "session":
                    dispatch({ type: "session/increment" })
            }
        }
    }

    function decrement(type: string) {
        if (!currentPlay) {
            switch(type) {
                case "break":
                    dispatch({ type: "break/decrement" })
                    break;
                case "session":
                    dispatch({ type: "session/decrement" })
            }
        }
    }

    return (
        <div className="Controls">
            <div className="Control">
                <h1 id="break-label">Break Length</h1>
                <div className="Switch">
                    <p id="break-decrement" onClick={() => decrement("break")}>-</p>
                    <p id="break-length">{currentBreak}</p>
                    <p id="break-increment" onClick={() => increment("break")}>+</p>
                </div>
            </div>
            <div className="Control">
                <h1 id="session-label">Session Length</h1>
                <div className="Switch">
                    <p id="session-decrement" onClick={() => decrement("session")}>-</p>
                    <p id="session-length">{currentSession}</p>
                    <p id="session-increment" onClick={() => increment("session")}>+</p>
                </div>
            </div>
        </div>
    )
}