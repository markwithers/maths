/**
 * @jsx React.DOM
 */
var React = require('react')

var Sum = React.createClass({
  getInitialState: function() {
    return { text: '' }
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  render: function() {
    var answer = eval(this.props.sum.replace('x', '*'));
    var correct = this.state.text == answer
    var success = correct ? 'has-success' : ''

    return <div className= { "form-group " + success }>
      <label className="control-label left">
        { this.props.sum }
      </label>
      <input
        className="form-control no-width"
        onChange={this.onChange}
        value={this.state.text}
      />
    </div>
  }
})

module.exports = Sum
