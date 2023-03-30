import './Controls.css'
import { useSelector, useDispatch } from 'react-redux'
import { rootReducer, RootState } from '../../redux/root-reducer'
import { useState } from 'react'

export default function Controls() {
    const currentSession = useSelector((rootReducer: RootState) => rootReducer.sessionReducer)
    const currentBreak = useSelector((rootReducer: RootState) => rootReducer.breakReducer)
    const currentClock = useSelector((rootReducer: RootState) => rootReducer.clockReducer)
    const dispatch = useDispatch()

    function increment(type: string) {
            switch(type) {
                case "break":
                    if (!currentClock.currentPlay) dispatch({ type: "break/increment" })
                    break;
                case "session":
                    if (!currentClock.currentPlay) dispatch({ type: "session/increment" })
            }
    }

    function decrement(type: string) {
            switch(type) {
                case "break":
                    if (!currentClock.currentPlay) dispatch({ type: "break/decrement" })
                    break;
                case "session":
                    if (!currentClock.currentPlay) dispatch({ type: "session/decrement" })
            }
    }

    return (
        <div className="Controls">
            <div className="Control">
                <h1 id="break-label">Break Length</h1>
                <div className="Switch">
                    <p id="break-decrement" onClick={() => decrement("break")}>-</p>
                    <p id="break-length">{currentBreak.currentMinutes}</p>
                    <p id="break-increment" onClick={() => increment("break")}>+</p>
                </div>
            </div>
            <div className="Control">
                <h1 id="session-label">Session Length</h1>
                <div className="Switch">
                    <p id="session-decrement" onClick={() => decrement("session")}>-</p>
                    <p id="session-length">{currentSession.currentMinutes}</p>
                    <p id="session-increment" onClick={() => increment("session")}>+</p>
                </div>
            </div>
        </div>
    )
}