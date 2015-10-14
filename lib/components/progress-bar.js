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

var ProgressBar = (function (_Component) {
  _inherits(ProgressBar, _Component);

  function ProgressBar(props) {
    _classCallCheck(this, ProgressBar);

    _get(Object.getPrototypeOf(ProgressBar.prototype), 'constructor', this).call(this, props);

    this.updateProgress = this.updateProgress.bind(this);

    this.state = { completion: 0 };

    setInterval(this.updateProgress, 100);
  }

  _createClass(ProgressBar, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.phase.index !== this.props.phase.index) {
        this.setState({
          completion: 0,
          completed: false
        });
      }
    }
  }, {
    key: 'updateProgress',
    value: function updateProgress() {
      if (this.state.completion >= 100) {
        this.setState({
          completed: true
        });
      }

      this.setState({
        completion: this.state.completion + 10 / this.props.phase.duration
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var completed = this.state.completed;
      var phase = this.props.phase;

      var style = completed ? { border: { fg: 'white' }, bar: { bg: 'green' } } : { border: { fg: 'white' }, bar: { bg: 'red' } };

      return _react2['default'].createElement('progressbar', { orientation: 'horizontal',
        filled: this.state.completion,
        top: '15%',
        left: 'center',
        height: '10%',
        width: '80%',
        label: 'Phase ' + phase.index + ' Progress (' + phase.duration + 's)',
        border: { type: 'line' },
        style: style });
    }
  }]);

  return ProgressBar;
})(_react.Component);

exports['default'] = ProgressBar;

ProgressBar.propTypes = {
  phase: _react.PropTypes.object
};
module.exports = exports['default'];