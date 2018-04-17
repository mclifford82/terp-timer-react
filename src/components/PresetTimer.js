import React from 'react'
import PresetButton from './PresetButton'
import PresetOptionsButton from './PresetOptionsButton'
import '../App.css'

const PresetTimer = (props) => {

  return (
    <div className="presetTimer">
      <PresetButton
            onStartTimer={props.onStartTimer}
            config={props.preset}
            />
    </div>
  )

}

export default PresetTimer
