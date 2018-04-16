import React from 'react'
import '../App.css'

const ClockFace = (props) => {

  const formatTime = (timeInSeconds) => {
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = timeInSeconds % 60;
    let displayMinutes = minutes > 9 ? minutes : '0' + minutes;
    let displaySeconds = seconds > 9 ? seconds : '0' + seconds;
    let timeDisplay = `${displayMinutes}:${displaySeconds}`;
    return timeDisplay;
  }

  return (
    <div className="clockface">
      {formatTime(props.time)}
    </div>
  )

}

export default ClockFace
