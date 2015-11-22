import React from 'react'
import blessed from 'blessed'
import { render } from 'react-blessed'
import App from './components/app'
import configureStore from './reducers'
import logger from './logger'
import { resize } from './actions/screen'
import {
  stats,
  phaseStarted,
  phaseCompleted,
  done
} from './actions/minigun'

const store = configureStore()

function BlessedPlugin (config, ee) {
  logger.info('starting up')

  const screen = blessed.screen({
    autoPadding: true,
    smartCSR: false,
    title: 'minigun'
  })

  screen.key(['escape', 'q', 'C-c'], (ch, key) => {
    logger.info('exiting')
    return process.exit(0)
  })

  screen.on('resize', (data) => {
    store.dispatch(resize({ width: screen.width, height: screen.height }))
  })

  store.dispatch(resize({ width: screen.width, height: screen.height }))

  ee.on('stats', (data) => {
    store.dispatch(stats(data))
  })

  ee.on('phaseStarted', (data) => {
    store.dispatch(phaseStarted(data))
  })

  ee.on('phaseCompleted', (data) => {
    store.dispatch(phaseCompleted(data))
  })

  ee.on('done', (data) => {
    store.dispatch(done(data))
  })

  this.component = render(<App config={config} minigun={ee} store={store} />, screen)

  return this
}

module.exports = BlessedPlugin
