import React from 'react'
import '../App.css'

const PresetButton = (props) => {

  const formatTime = (timeInSeconds) => {
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = timeInSeconds % 60;
    let displayMinutes = minutes > 9 ? minutes : '0' + minutes;
    let displaySeconds = seconds > 9 ? seconds : '0' + seconds;
    let timeDisplay = `${displayMinutes}:${displaySeconds}`;
    return timeDisplay;
  }
  
  return (
    <div className="presetButton" onClick={(e) => props.onStartTimer(props.config)}>
      <div className="buttonTitle">
        {props.config.displayName}
      </div>
      <div className="buttonHeatup">
        {formatTime(props.config.heatupDuration)}
      </div>
      <div className="buttonCooldown">
        {formatTime(props.config.cooldownDuration)}
      </div>
    </div>
  )
}

export default PresetButton
