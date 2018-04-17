import React from 'react'
import '../App.css'

const PresetOptionsButton = (props) => {

  return (
    <div
      className="presetOptionsButton"
      onClick={(e) => props.onEditTimer(props.config)}
    >
      <img src="../images/orange_gear.png" alt="options button" />
    </div>
  )
}

export default PresetOptionsButton
