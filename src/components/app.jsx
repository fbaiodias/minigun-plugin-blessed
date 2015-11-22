import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Logo from './logo'
import ProgressBar from './progress-bar'
import StatusCodesChart from './charts/status-codes'
import LatencyChart from './charts/latency'

class App extends Component {
  render () {
    const {
      currentPhase,
      codes,
      latency,
      height
    } = this.props

    const progressBar = currentPhase ? (
      <ProgressBar
        phase={currentPhase}
        top={height >= 30 ? '15%' : '0%' }
        left='center'
        height={height >= 30 ? '10%' : '15%' }
        width='80%'
      />
    ) : null

    const logo = height > 30 ? (
      <Logo
        left='20%'
        width='60%'
        height='15%'
        top='0%'
      />
    ) : null

    return (
      <box>
        {logo}

        {progressBar}

        <StatusCodesChart
          ref='statusCodesChart'
          height={height >= 30 ? '35%' : '45%' }
          top={height >= 30 ? '25%' : '15%' }
          codes={codes}
        />

        <LatencyChart
          ref='latencyChart'
          height={height >= 30 ? '35%' : '45%' }
          top={height >= 30 ? '60%' : '55%' }
          latency={latency}
        />
      </box>
    )
  }
}

App.propTypes = {
  currentPhase: PropTypes.object,
  latency: PropTypes.object,
  codes: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number
}

function mapStateToProps ({ minigun, screen }) {
  return {
    stats: minigun.stats,
    currentPhase: minigun.currentPhase,
    latency: minigun.latency,
    codes: minigun.codes,
    width: screen.width,
    height: screen.height
  }
}

export default connect(mapStateToProps)(App)
