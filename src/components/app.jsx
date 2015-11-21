import React, { Component, PropTypes } from 'react'
import Logger from './logger'
import ProgressBar from './progress-bar'
import LineChart from './line-chart'

const logo =
`           _       _
 _ __ ___ (_)_ __ (_) __ _ _   _ _ __
| '_ \` _ \\| | '_ \\| |/ _\` | | | | '_ \\
| | | | | | | | | | | (_| | |_| | | | |
|_| |_| |_|_|_| |_|_|\\__, |\\__,_|_| |_|
                     |___/
`

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
      this.refs.chart.logStats(data)
    })

    props.minigun.on('done', (data) => {
      this.refs.logger.logDone(data)
    })
  }

  render () {
    const { currentPhase } = this.state

    return (
      <box>
        <box
          draggable
          ref='logo'
          left='20%'
          width='60%'
          height='15%'
          top='0%'
          style={{border: {fg: 'blue'}}}>
          {logo}
        </box>

        <LineChart
          ref='chart'
          height='25%'
          top='25%'
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
  minigun: PropTypes.object
}

export default App
