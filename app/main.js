/**
 * @jsx React.DOM
 */
var maths = require('./maths');
var React = require('react');
var Sum = require('./sum.jsx');
var Timer =require('./timer.jsx');
var r = require('ramda');

var SumList = React.createClass({
  render: function() {

    var sums = maths.generate100Pairs();
    var makeSumList = r.map(function(sum) {
      return <Sum sum={sum} />
    });

    return <div> 
      <div className="col-lg-4 col-lg-offset-1">
        { makeSumList(sums) }
      </div>
      <div className="col-lg-4 col-lg-offset-1">
        <div className="fixed">
          <h1>Molly's maths program!</h1>
          <h2>Time Spent</h2>
          <Timer />
        </div>
      </div>
    </div>
  }
})

React.render(<SumList />, document.getElementById('container'));
