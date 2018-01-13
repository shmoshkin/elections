var Selectors = require('../mongo-models/selector.model');

// get all Selectors
Selectors.find({}, function(err, selectors) {
    if (err) throw err;
  
    // object of all the users
    console.log(selectors);
  });