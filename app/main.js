/**
 * @jsx React.DOM
 */
var maths = require('./maths');
var React = require('react');
var Sum = require('./sum.jsx');
var Timer =require('./timer.jsx');
var r = require('ramda');
var IScroll = require('iscroll');

var SumList = React.createClass({
  render: function() {

    var sums = maths.generate100Pairs();
    var makeSumList = r.map(function(sum) {
      return <Sum sum={sum} />
    });

    return <div> 
      <div className="row"> 
        <div className="col-md-8 col-sm-8 col-xs-8 bottom">
          <h1>Molly's maths program!</h1>
          { makeSumList(sums) }
        </div>
      </div>
      <nav className="navbar navbar-default navbar-fixed-bottom">
        <div className="container-fluid">
          <div className="navbar-header">
            <Timer />
          </div>
        </div>
      </nav>
    </div>
  },

  componentDidMount: function() {
    var myScroll = new IScroll('.navbar', {
      snap: true
    });
  }
})

React.render(<SumList />, document.getElementById('container'));
