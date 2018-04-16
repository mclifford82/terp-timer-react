import React, { Component } from 'react'
import ClockFace from './ClockFace'
import PresetButton from './PresetButton'
import '../App.css'

class TimerContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 0,
      timer: undefined,
      timerPresets: [
        {
          displayName: '90m QCB',
          heatupDuration: 20,
          cooldownDuration: 45,
          reminderTime: 10,
        },
        {
          displayName: 'Grail',
          heatupDuration: 30,
          cooldownDuration: 85,
          reminderTime: 10,
        },
      ],
    }
  }

  updateTimer = () => {
    this.setState((prevState) => ({
      time: prevState.time - 1
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
              return <PresetButton
                      key={index}
                      onStartTimer={this.handleStartTimer}
                      config={preset}
              />
            })
          }
        </div>
      </div>
    );
  }
}

export default TimerContainer
