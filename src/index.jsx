import React from 'react'
import blessed from 'blessed'
import { render } from 'react-blessed'
import App from './components/app'

function BlessedPlugin (config, ee) {
  const screen = blessed.screen({
    autoPadding: true,
    smartCSR: false,
    title: 'minigun'
  })

  screen.key(['escape', 'q', 'C-c'], (ch, key) => {
    return process.exit(0)
  })

  this.component = render(<App config={config} minigun={ee} screen={screen} />, screen)

  return this
}

module.exports = BlessedPlugin
