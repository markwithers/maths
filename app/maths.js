r = require('ramda');

randomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

easyNumbers = [ 2, 3, 4, 5, 9, 10, 11 ]

generateEasyNumber = function() {
  return easyNumbers[randomInt(0, easyNumbers.length)]
}

generateMultiple = function() { return randomInt(2, 12); }

generatePair = function() {
  return generateEasyNumber() + ' x ' + generateMultiple();
}

generate100Pairs = function() { return r.times(generatePair, 100); }

module.exports = {
  randomInt: randomInt,
  generateEasyNumber: generateEasyNumber,
  generatePair: generatePair,
  generate100Pairs: generate100Pairs
}
