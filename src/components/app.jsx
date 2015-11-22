import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Logo from './logo'
import Logger from './logger'
import ProgressBar from './progress-bar'
import StatusCodesChart from './charts/status-codes'
import LatencyChart from './charts/latency'

class App extends Component {
  render () {
    const {
      currentPhase,
      codes,
      latency
    } = this.props

    const progressBar = currentPhase ? (
      <ProgressBar
        phase={currentPhase}
        top='15%'
        left='center'
        height='10%'
        width='80%'
      />
  ) : null

    return (
      <box>
        <Logo
          left='20%'
          width='60%'
          height='15%'
          top='0%'
        />

        {progressBar}

        <StatusCodesChart
          ref='statusCodesChart'
          height='25%'
          top='25%'
          codes={codes}
        />

        <LatencyChart
          ref='latencyChart'
          height='25%'
          top='50%'
          latency={latency}
        />
      </box>
    )
  }
}

App.propTypes = {
  minigun: PropTypes.object,
  currentPhase: PropTypes.object,
  latency: PropTypes.object,
  codes: PropTypes.object
}

function mapStateToProps ({ minigun }) {
  return {
    stats: minigun.stats,
    currentPhase: minigun.currentPhase,
    latency: minigun.latency,
    codes: minigun.codes
  }
}

export default connect(mapStateToProps)(App)
