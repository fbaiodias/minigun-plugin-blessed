import React, { Component } from 'react'

export default class LatencyChart extends Component {
  constructor (props) {
    super(props)

    this.state = {
      count: 0,
      latency: {}
    }
  }

  logStats (data) {
    const latency = {
      ...this.state.latency
    }

    Object.keys(data.latency).forEach((key) => {
      latency[key] = latency[key] || {
        total: 0,
        samples: []
      }

      latency[key].total += data.latency[key]
      latency[key].samples.push(data.latency[key])
    })

    this.setState({
      latency
    })
  }

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
    const data = Object.keys(this.state.latency).map((key) => ({
      title: key,
      y: this.state.latency[key].samples,
      x: this.state.latency[key].samples.map((v, i) => `t${i}`),
      style: {
        line: this.getColorFromKey(key)
      }
    }))

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
        {...this.props}
      />
    )
  }
}
