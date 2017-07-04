var rp = require('request-promise')

module.exports = function(app) {
  
  app.get('/api/weather/:location', function (req, res) {
    //Get weather data from Yahoo's API, then send it as response
    var options = {
        uri: `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20
              where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22` +
              req.params.location + '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
        json: true
    }
 
    rp(options)
        .then(function (data) {
            res.send(data)
        })
        .catch(function (err) {
            console.log('error', err)
            res.send('An error occurred')
        })
  })
  
}