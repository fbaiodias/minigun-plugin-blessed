import React, { Component, PropTypes } from 'react'
import Logo from './logo'
import Logger from './logger'
import ProgressBar from './progress-bar'
import StatusCodesChart from './charts/status-codes'
import LatencyChart from './charts/latency'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      stats: []
    }

    props.minigun.on('phaseStarted', (data) => {
      this.setState({
        currentPhase: data
      })

      this.refs.logger.logPhaseStarted(data)
    })

    props.minigun.on('phaseCompleted', (data) => {
      this.refs.logger.logPhaseCompleted(data)
    })

    props.minigun.on('stats', (data) => {
      this.refs.logger.logStats(data)
      this.refs.statusCodesChart.logStats(data)
      this.refs.latencyChart.logStats(data)
    })

    props.minigun.on('done', (data) => {
      this.refs.logger.logDone(data)
    })

    props.screen.on('resize', function () {
      this.setState({
        width: props.screen.width,
        height: props.screen.height
      })
    })
  }

  render () {
    const { currentPhase } = this.state

    return (
      <box>
        <Logo
          left='20%'
          width='60%'
          height='15%'
          top='0%'
        />

        <StatusCodesChart
          ref='statusCodesChart'
          height='25%'
          top='25%'
        />

        <LatencyChart
          ref='latencyChart'
          height='25%'
          top='50%'
        />

        <Logger
          ref='logger'
          left='0%'
          width='100%'
          height='25%'
          top='75%'
        />

        {
          currentPhase ? <ProgressBar phase={currentPhase} /> : undefined
        }
      </box>
    )
  }
}

App.propTypes = {
  minigun: PropTypes.object,
  screen: PropTypes.object
}

export default App
