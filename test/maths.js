var maths = require('../app/maths')

describe('generating random numbers', function() {
  it('generating a random int works', function() {
    var pairs = maths.generate100Pairs();
    var sum = pairs[0].replace('x', '*');
    console.log(eval(sum));
  })
})
