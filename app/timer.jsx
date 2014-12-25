/**
 * @jsx React.DOM
 */
var React = require('react');

var toTime = function(seconds) {
  var mins = Math.floor(seconds / 60);
  var remainder = seconds - (mins * 60);
  return padLeft(mins) + ":" + padLeft(remainder);
}

var padLeft = function(num) {
  var string = '' + num
  return string.length == 1 ? '0' + string : string;
}

var Timer = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <span>{ toTime(this.state.secondsElapsed) }</span>
    );
  }
});

module.exports = Timer
