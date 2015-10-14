import React, { Component, PropTypes } from 'react'

export default class ProgressBar extends Component {
  constructor (props) {
    super(props)

    this.updateProgress = this.updateProgress.bind(this)

    this.state = {completion: 0}

    setInterval(this.updateProgress, 100)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.phase.index !== this.props.phase.index) {
      this.setState({
        completion: 0,
        completed: false
      })
    }
  }

  updateProgress () {
    if (this.state.completion >= 100) {
      this.setState({
        completed: true
      })
    }

    this.setState({
      completion: this.state.completion + 10 / this.props.phase.duration
    })
  }

  render () {
    const { completed } = this.state
    const { phase } = this.props

    const style = completed
      ? {border: {fg: 'white'}, bar: {bg: 'green'}}
      : {border: {fg: 'white'}, bar: {bg: 'red'}}

    return (
      <progressbar orientation='horizontal'
        filled={this.state.completion}
        top='15%'
        left='center'
        height='10%'
        width='80%'
        label={`Phase ${phase.index} Progress (${phase.duration}s)`}
        border={{type: 'line'}}
        style={style} />
    )
  }
}

ProgressBar.propTypes = {
  phase: PropTypes.object
}
