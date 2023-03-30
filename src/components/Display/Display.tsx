import './Display.css'
import { useSelector, useDispatch } from 'react-redux'
import { rootReducer, RootState } from '../../redux/root-reducer'
import { useEffect, useState } from 'react'

export default function Display() {
    const { currentSession } = useSelector((rootReducer: RootState) => rootReducer.sessionReducer)
    const { currentBreak } = useSelector((rootReducer: RootState) => rootReducer.breakReducer)
    const { currentPlay } = useSelector((rootReducer: RootState) => rootReducer.playReducer)
    const dispatch = useDispatch()
    const [currentSessionTimer, setCurrentSessionTimer] = useState(currentSession)
    const [currentBreakTimer, setCurrentBreakTimer] = useState(currentBreak)
    const [currentSessionSeconds, setCurrentSessionSeconds] = useState(0)
    const [timerLabel, setTimerLabel] = useState("Session")

    useEffect(() => {setCurrentSessionTimer(currentSession)}, [currentSession])
    useEffect(() => {setCurrentBreakTimer(currentBreak)}, [currentBreak])

    function reset() {
        if (!currentPlay) {
            dispatch({ type: "session/reset" })
            dispatch({ type: "break/reset" })
            setCurrentSessionTimer(25)
            setCurrentBreakTimer(5)
            setCurrentSessionSeconds(0)
        }
    }

    useEffect(() => {
        if (currentPlay) {
            if (currentSessionSeconds == 0 && currentSessionTimer != 0) {
                setCurrentSessionSeconds(59)
                setCurrentSessionTimer(currentSessionTimer - 1)
            } else if (currentSessionSeconds != 0 && currentBreakTimer != 0) {
                setTimeout(() => {
                    setCurrentSessionSeconds(currentSessionSeconds - 1)
                }, 1000)
            }
            if (currentSessionSeconds == 0 && currentSessionTimer == 0) {
                if (timerLabel == "Session") {
                    setTimerLabel("Break")
                    setCurrentSessionSeconds(59)
                    setCurrentBreakTimer(currentBreak)
                    setCurrentSessionTimer(currentBreakTimer - 1)
                } else {
                    setTimerLabel("Session")
                    setCurrentSessionSeconds(59)
                    setCurrentSessionTimer(currentSession)
                    setCurrentSessionTimer(currentSessionTimer - 1)
                }
            }
        }
    }, [currentSessionSeconds, currentPlay])

    function getFormatedNumber(number: number) {
        if (number > 9) {
            return number
        } else {
            return `0${number}`
        }
    }

    function getFormatedMinutesNumber() {
        if (timerLabel == "Session") {
            return getFormatedNumber(currentSessionTimer)
        } else {
            return getFormatedNumber(currentBreakTimer)
        }
    }

    function start() {
        if (currentSessionSeconds == 0 && currentSessionTimer != 0) {
            setCurrentSessionSeconds(59)
            setCurrentSessionTimer(currentSessionTimer - 1)
        }
        dispatch({ type: "play/onoff" })
    }

    return (
        <div className="Display">
            <div className="Session">
                <p id="timer-label">{timerLabel}</p>
                <h1 id="time-left">{getFormatedMinutesNumber()}:{getFormatedNumber(currentSessionSeconds)}</h1>
            </div>
            <div className="SessionControls">
                <h1 id="start_stop" onClick={() => start()}>Play/Pause</h1>
                <h1 id="reset" onClick={() => reset()}>Reset</h1>
            </div>
        </div>
    )
}