'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _blessed = require('blessed');

var _blessed2 = _interopRequireDefault(_blessed);

var _reactBlessed = require('react-blessed');

var _componentsApp = require('./components/app');

var _componentsApp2 = _interopRequireDefault(_componentsApp);

function BlessedPlugin(config, ee) {
  var screen = _blessed2['default'].screen({
    autoPadding: true,
    smartCSR: false,
    title: 'minigun'
  });

  screen.key(['escape', 'q', 'C-c'], function (ch, key) {
    return process.exit(0);
  });

  this.component = (0, _reactBlessed.render)(_react2['default'].createElement(_componentsApp2['default'], { config: config, minigun: ee }), screen);

  ee.on('stats', function (stats) {
    // console.log('stats', stats)
  });

  ee.on('done', function (stats) {
    // console.log('done', stats)
  });

  return this;
}

module.exports = BlessedPlugin;