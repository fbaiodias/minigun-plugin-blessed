import React, { Component, PropTypes } from 'react'

export default class StatusCodesChart extends Component {
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
    const { codes, ...other } = this.props

    const data = Object.keys(codes).map((key) => ({
      title: key,
      y: codes[key].samples,
      x: codes[key].samples.map((v, i) => `t${i}`),
      style: {
        line: this.getColorFromCode(key)
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
        label='codes'
        {...other}
      />
    )
  }
}

StatusCodesChart.propTypes = {
  codes: PropTypes.object.isRequired
}
