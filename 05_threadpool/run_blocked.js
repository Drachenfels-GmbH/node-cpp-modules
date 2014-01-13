var modulename = require('./build/Release/modulename');
var sleep = require('sleep');

modulename.async(1000000, function(err, result) {
  console.warn(result);
});

modulename.async(800000, function(err, result) {
  console.warn(result);
  sleep.sleep(5); // blocks the mainloop  and delays completion of first async call
});


