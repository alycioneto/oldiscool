module.exports = function(app) {
    const mongoose = require('mongoose');
    const Promise = require('bluebird');

    mongoose.Promise = Promise;

    return mongoose.connect('mongodb://oldiscool:oldiscool@ds141960.mlab.com:41960/oldiscool');
};
