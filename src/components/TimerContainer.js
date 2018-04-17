import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import AddTimerButton from './AddTimerButton'
import AddTimerForm from './AddTimerForm'
import ClockFace from './ClockFace'
import PresetTimer from './PresetTimer'
import '../App.css'

class TimerContainer extends Component {
  constructor(props) {
    super(props)
    this.defaults = [
      {
        displayName: 'QCB',
        heatupDuration: 30,
        cooldownDuration: 50,
        reminderTime: 10,
      },
      {
        displayName: 'Grail',
        heatupDuration: 35,
        cooldownDuration: 85,
        reminderTime: 10,
      },
    ]
    this.state = {
      time: 0,
      timer: undefined,
      timerPresets: this.defaults,
      showNewTimerForm: false,
    }
  }

  componentDidMount() {
    let timers = JSON.parse(localStorage.getItem('timerPresets'))
    timers && this.setState({
      timerPresets: timers
    })
  }

  componentDidUpdate() {
    localStorage.setItem('timerPresets', JSON.stringify(this.state.timerPresets))
  }

  updateTimer = () => {
    this.setState((prevState) => ({
      time: prevState.time - 1
    }))
  }

  handleToggleNewTimerForm = () => {
    this.setState((prevState) => ({
      showNewTimerForm: !prevState.showNewTimerForm
    }))
  }

  handleAddTimerSubmit = (payload) => {
    this.setState((prevState) => ({
      timerPresets: prevState.timerPresets.concat(payload),
      showNewTimerForm: false,
    }))
  }

  handleStartTimer = (presetTimer) => {
    // Check for existing timer running and clear interval if necessary
    if (this.state.timer) {
      clearInterval(this.state.timer)
    }
    this.setState({
      time: presetTimer.heatupDuration,
      timer: setInterval(() => {
        this.updateTimer()
        if (this.state.time <= 0) {
          clearInterval(this.state.timer)
          this.setState({
            time: presetTimer.cooldownDuration,
            timer: setInterval(() => {
              this.updateTimer()
              if (this.state.time <= 0) {
                clearInterval(this.state.timer)
                this.setState({
                  timer: undefined
                })
              }
              if (this.state.time === presetTimer.reminderTime) {
                //TODO: Implement functionality to remind user timer is almost done
              }
            }, 1000)
          })
        }
      }, 1000)
    })
  }

  render() {
    return (
      <div className="timer">
        <ClockFace time={this.state.time} />
        <div className="timerPanel">
          {
            this.state.timerPresets.map((preset, index) => {
              return (
                  <PresetTimer
                    key={index}
                    preset={preset}
                    onStartTimer={this.handleStartTimer}
                    onEditTimer={this.handleEditTimer}
                   />
              )
            })
          }
          <AddTimerButton
            onToggleNewTimerForm={this.handleToggleNewTimerForm}
          />
          <button onClick={() => {
            localStorage.removeItem('timerPresets')
            this.setState({
              timerPresets: this.defaults
            })
          }}>beta: clear timers</button>

          {this.state.showNewTimerForm && <AddTimerForm
            onAddTimerSubmit={this.handleAddTimerSubmit}
          />}
        </div>
      </div>
    );
  }
}

export default TimerContainer
