import './Display.css'
import { useSelector, useDispatch } from 'react-redux'
import { rootReducer, RootState } from '../../redux/root-reducer'
import { useEffect } from 'react'

export default function Display() {
    const currentSession = useSelector((rootReducer: RootState) => rootReducer.sessionReducer)
    const currentBreak = useSelector((rootReducer: RootState) => rootReducer.breakReducer)
    const currentClock = useSelector((rootReducer: RootState) => rootReducer.clockReducer)
    const dispatch = useDispatch()
    const audioElement = document.querySelector("#beep") as HTMLAudioElement

    useEffect(() => {
        if (currentClock.currentTimerLabel == "Session") {
            dispatch({ type: "clock/changeMinutes", payload: currentSession.currentMinutes })
            dispatch({ type: "clock/changeSeconds", payload: 0 })
        } else {
            dispatch({ type: "clock/changeMinutes", payload: currentBreak.currentMinutes })
            dispatch({ type: "clock/changeSeconds", payload: 0 })
        }
    }, [currentClock.currentTimerLabel, 
        currentSession.currentMinutes, 
        currentBreak.currentMinutes])

    function changeTimerLabel() { 
        dispatch({ type: "clock/changeLabel" }) 
        audioElement.play()
    }

    useEffect(() => {
        if (currentClock.currentPlay) {
            if (currentClock.currentSeconds == 0) {
                if (currentClock.currentMinutes != 0) {
                    dispatch({ type: "clock/changeSeconds", payload: 59 })
                    dispatch({ type: "clock/decrementMinutes" })
                }
            }
            if (currentClock.currentSeconds != 0) {
                setTimeout(() => {
                    dispatch({ type: "clock/decrementSeconds" })
                }, 1000)
            }

            if (currentClock.currentSeconds == 0 && currentClock.currentMinutes == 0) {
                changeTimerLabel()
            }
        }
    }, [currentClock.currentSeconds,
        currentClock.currentMinutes,
        currentClock.currentPlay])

    function start() {
        if (!currentClock.currentPlay) {
            dispatch({ type: "clock/on" }) 
        } else {
            dispatch({ type: "clock/off" }) 
        }
    }

    function getFormatedNumber(number: number) {
        if (number > 9) {
            return number
        } else {
            return `0${number}`
        }
    }

    function reset() {
        if (!currentClock.currentPlay) {
            dispatch({ type: "clock/off" })
            dispatch({ type: "session/reset" })
            dispatch({ type: "break/reset" })
            dispatch({ type: "clock/changeToSpecificLabel", payload: "Session" })
            audioElement.pause()
            audioElement.currentTime = 0
        }
    }

    return (
        <div className="Display">
            <div className="Session">
                <p id="timer-label">{currentClock.currentTimerLabel}</p>
                <h1 id="time-left">{getFormatedNumber(currentClock.currentMinutes)}:{getFormatedNumber(currentClock.currentSeconds)}</h1>
            </div>
            <div className="SessionControls">
                <h1 id="start_stop" onClick={() => start()}>Play/Pause</h1>
                <h1 id="reset" onClick={() => reset()}>Reset</h1>
            </div>
            <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
        </div>
    )
}