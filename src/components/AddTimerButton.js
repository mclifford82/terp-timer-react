import React from 'react'
import '../App.css'

const AddTimerButton = (props) => {

  return (
    <div
      className="addTimerButton"
      onClick={(e) => props.onToggleNewTimerForm()}
    >
      Click to Add New Timer
    </div>
  )

}

export default AddTimerButton
