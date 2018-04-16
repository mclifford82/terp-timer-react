import React from 'react'
import {
  Button,
  Icon
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import '../App.css'

const PresetButton = (props) => {
  
  return (
    <Button
      icon
      labelPosition='left'
      onClick={(e) => props.onStartTimer(props.config)}
    >
      <Icon name='play' />
      {props.config.heatupDuration} / {props.config.cooldownDuration} [{props.config.displayName}]
    </Button>
  )
}

export default PresetButton
