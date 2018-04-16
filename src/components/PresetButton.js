import React from 'react'
import {
  Button,
  Icon
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import '../App.css'

const PresetButton = (props) => {

  return (
    <div className="presetButton" onClick={(e) => props.onStartTimer(props.config)}>
      <div className="buttonTitle">
        {props.config.displayName}
      </div>
      <div className="buttonHeatup">
        {props.config.heatupDuration}
      </div>
      <div className="buttonCooldown">
        {props.config.cooldownDuration}
      </div>
    </div>
  )
}

export default PresetButton
