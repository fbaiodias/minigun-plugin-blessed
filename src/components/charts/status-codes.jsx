import React, { Component } from 'react'

export default class StatusCodesChart extends Component {
  constructor (props) {
    super(props)

    this.state = {
      count: 0,
      codes: {}
    }
  }

  logStats (data) {
    const codes = {
      ...this.state.codes
    }

    Object.keys(data.codes).forEach((code) => {
      codes[code] = codes[code] || {
        total: 0,
        samples: []
      }

      codes[code].total += data.codes[code]
      codes[code].samples.push(data.codes[code])
    })

    this.setState({
      codes
    })
  }

  getColorFromCode (code) {
    if (code <= 299) {
      return 'green'
    } else if (code <= 399) {
      return 'yellow'
    } else if (code <= 499) {
      return 'red'
    } else if (code <= 599) {
      return 'red'
    }
  }

  render () {
    const data = Object.keys(this.state.codes).map((code) => ({
      title: code,
      y: this.state.codes[code].samples,
      x: this.state.codes[code].samples.map((v, i) => `t${i}`),
      style: {
        line: this.getColorFromCode(parseInt(code, 10))
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
        label='Codes'
        {...this.props}
      />
    )
  }
}
