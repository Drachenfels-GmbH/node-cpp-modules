var modulename = require('./build/Release/modulename');

modulename.async(1000000, function(err, result) {
  console.warn(result);
});

modulename.async(800000, function(err, result) {
  console.warn(result);
});


