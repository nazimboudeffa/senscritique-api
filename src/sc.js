var movies = require('./movies');

module.exports = function(uri, cb) {
  movies(uri, function(err, data) {
    cb(err, data);
  });
}
