'use strict'

const EventEmitter = require('events').EventEmitter
const config = {}
const BlessedPlugin = require('../src/index.jsx')

const ee = new EventEmitter()

const getRandomNumber = (min, max) => min + Math.floor(Math.random() * (max - min))

const getRandomDistribution = () => {
  const median = getRandomNumber(5000, 10000)
  const max = median + getRandomNumber(0, median)
  const min = median - getRandomNumber(0, median)
  const p95 = getRandomNumber(median, max)
  const p99 = getRandomNumber(p95, max)

  return {
    min: min,
    max: max,
    median: median,
    p95: p95,
    p99: p99
  }
}

const getRandomStats = () => {
  const scenariosCreated = getRandomNumber(200)
  return {
    timestamp: new Date(),
    scenariosCreated: scenariosCreated,
    scenariosCompleted: getRandomNumber(scenariosCreated, 200),
    requestsCompleted: getRandomNumber(0, 300),
    rps: {
      mean: getRandomNumber(0, 100),
      count: getRandomNumber(0, 500)
    },
    latency: getRandomDistribution(),
    scenarioDuration: getRandomDistribution(),
    errors: {
      ETIMEDOUT: getRandomNumber(0, 20),
      ESOCKETTIMEDOUT: getRandomNumber(0, 20)
    },
    codes: {
      200: getRandomNumber(0, 200),
      302: getRandomNumber(0, 200)
    },
    matches: 0
  }
}

let phase = 0

const announcePhase = () => {
  const duration = getRandomNumber(1000, 10000)

  ee.emit('phaseStarted', {
    index: phase,
    name: `phase ${phase}`,
    duration: duration / 1000
  })

  setTimeout(() => {
    ee.emit('phaseCompleted', {
      index: phase++,
      name: `phase ${phase}`,
      duration: duration / 1000
    })

    announcePhase()
  }, duration)
}

setInterval(() => ee.emit('stats', getRandomStats()), 2000)

setTimeout(() => announcePhase(), 500)

const plugin = new BlessedPlugin(config, ee)

module.exports = plugin
