import React, { Component } from 'react'

export default class Logger extends Component {
  logPhaseStarted ({ index }) {
    this.refs.logger.pushLine(`{green-bg} + {/green-bg} Phase ${index} started`)
  }

  logPhaseCompleted ({ index }) {
    this.refs.logger.pushLine(`{red-bg} x {/red-bg} Phase ${index} completed`)
  }

  logStats (data) {
    this.refs.logger.pushLine(
`{blue-bg} ! {/blue-bg} Stats
${JSON.stringify(data, null, 2)}`
    )
  }

  logDone (data) {
    this.refs.logger.pushLine(
`{green-bg} √ {/green-bg} Done!
${JSON.stringify(data, null, 2)}`
    )
  }

  render () {
    return (
      <element ref='logger'
        label={'Stats'}
        tags
        mouse
        keys
        scrollable
        scrollOnInput
        scrollback={Infinity}
        border={{type: 'line'}}
        style={{border: {fg: 'white'}}}
        {...this.props}
      />
    )
  }
}
