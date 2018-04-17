import React, { Component } from 'react'

class AddTimerForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayName: '',
      heatupDuration: '',
      cooldownDuration: '',
      reminderTime: '',
    }
  }

  handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onAddTimerSubmit(this.state)
  }

  render() {
    return (
      <div>
        <form className="newTimerForm" onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input type="text" name="displayName" value={this.state.displayName} onChange={this.handleChange} />
          <label>Heatup:</label>
          <input type="text" name="heatupDuration" value={this.state.heatupDuration} placeholder="in seconds" onChange={this.handleChange} />
          <label>Cooldown:</label>
          <input type="text" name="cooldownDuration" value={this.state.cooldownDuration} placeholder="in seconds" onChange={this.handleChange} />
          <label>Reminder:</label>
          <input type="text" name="reminderTime" value={this.state.reminderTime} placeholder="in seconds" onChange={this.handleChange} />
          <input type="submit" value="Add New Timer, Bruh" />
        </form>
      </div>
    )
  }
}

export default AddTimerForm
