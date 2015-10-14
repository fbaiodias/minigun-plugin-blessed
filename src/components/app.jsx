import React, { Component } from 'react'
import Logger from './logger'
import ProgressBar from './progress-bar'

const logo =
`           _       _
 _ __ ___ (_)_ __ (_) __ _ _   _ _ __
| '_ \` _ \\| | '_ \\| |/ _\` | | | | '_ \\
| | | | | | | | | | | (_| | |_| | | | |
|_| |_| |_|_|_| |_|_|\\__, |\\__,_|_| |_|
                     |___/
`

export default class App extends Component {
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

        <Logger ref='logger' />

        {
          currentPhase ? <ProgressBar phase={currentPhase} /> : undefined
        }
      </box>
    )
  }
}
