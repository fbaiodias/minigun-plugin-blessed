import React, { Component, PropTypes } from 'react'

export default class LatencyChart extends Component {
  getColorFromKey (key) {
    switch (key) {
      case 'min':
        return 'green'
      case 'max':
        return 'red'
      case 'median':
        return 'blue'
      case 'p99':
        return 'red'
      case 'p95':
        return 'green'
    }
  }

  render () {
    const { latency, ...other } = this.props

    const data = Object.keys(latency).map((key) => ({
      title: key,
      y: latency[key].samples,
      x: latency[key].samples.map((v, i) => `t${i}`),
      style: {
        line: this.getColorFromKey(key)
      }
    })) || []

    return (
      <contribline
        ref='line'
        data={data.length ? data : undefined}
        style={{ style: { text: 'blue', baseline: 'black' } }}
        xLabelPadding={3}
        xPadding={5}
        showLegend
        wholeNumbersOnly={false}
        label='latency'
        {...other}
      />
    )
  }
}

LatencyChart.propTypes = {
  latency: PropTypes.object.isRequired
}
