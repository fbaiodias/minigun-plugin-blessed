'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _progressBar = require('./progress-bar');

var _progressBar2 = _interopRequireDefault(_progressBar);

var logo = '           _       _\n _ __ ___ (_)_ __ (_) __ _ _   _ _ __\n| \'_ ` _ \\| | \'_ \\| |/ _` | | | | \'_ \\\n| | | | | | | | | | | (_| | |_| | | | |\n|_| |_| |_|_|_| |_|_|\\__, |\\__,_|_| |_|\n                     |___/\n';

var App = (function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    var _this = this;

    _classCallCheck(this, App);

    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this, props);

    this.state = {
      stats: []
    };

    props.minigun.on('phaseStarted', function (data) {
      _this.setState({
        currentPhase: data
      });

      _this.refs.logger.logPhaseStarted(data);
    });

    props.minigun.on('phaseCompleted', function (data) {
      _this.refs.logger.logPhaseCompleted(data);
    });

    props.minigun.on('stats', function (data) {
      _this.refs.logger.logStats(data);
    });

    props.minigun.on('done', function (data) {
      _this.refs.logger.logDone(data);
    });
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var currentPhase = this.state.currentPhase;

      return _react2['default'].createElement(
        'box',
        null,
        _react2['default'].createElement(
          'box',
          {
            draggable: true,
            ref: 'logo',
            left: '20%',
            width: '60%',
            height: '15%',
            top: '0%',
            style: { border: { fg: 'blue' } } },
          logo
        ),
        _react2['default'].createElement(_logger2['default'], { ref: 'logger' }),
        currentPhase ? _react2['default'].createElement(_progressBar2['default'], { phase: currentPhase }) : undefined
      );
    }
  }]);

  return App;
})(_react.Component);

exports['default'] = App;
module.exports = exports['default'];