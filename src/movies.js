var request = require('request');
var cheerio = require('cheerio');

module.exports = function(uri, cb) {
  request('https://www.senscritique.com/film/' + uri, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      $ = cheerio.load(body);
      var title = $("h1.pvi-product-title").text().replace(/\(\d+\)/g, '').trim();
      var poster = $("img.pvi-hero-poster").attr('src');
      cb(null, {
          title: title || "N/A",
          poster: poster || "N/A",
      });
    } else {
      cb(new Error('SensCritique Failed to respond, or responded with error code'), null);
    }
  })
}
