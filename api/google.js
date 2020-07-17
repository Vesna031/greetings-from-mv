var https = require('follow-redirects').https
var graph = require('fbgraph')
var fetch = require('node-fetch')
require('dotenv-flow').config()

var options = {
  'method': 'POST',
  'hostname': process.env.INTERPAYMENTS_API_URL,
  'path': '/v1/ch',
  'headers': {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + process.env.INTERPAYMENTS_API_KEY
  },
  'maxRedirects': 20
}


module.exports = (req, res) => {
  var apiReq = https.request(options, function (apiRes) {
    var chunks = []
  
    apiRes.on('data', function (chunk) {
      chunks.push(chunk)
    })
  
    apiRes.on('end', function (chunk) {
      var body = Buffer.concat(chunks)

      res.status(200).send(body.toString())
    })
  
    apiRes.on('error', function (error) {
      res.status(500).send(error)
    })
  })
  
  apiReq.write(JSON.stringify(req.query))
  
  apiReq.end()
}

// fetch('https://api.yelp.com/v3/businesses/greetings-from-marthas-vineyard-tours-oak-bluffs/reviews', {
//   method: "GET",
//   headers: {
//     'access-control-allow-origin': '*',
//     'Content-type': 'application/json; charset=UTF-8'
//   }})
//   .then(res => res.json())
//   .then(
//     (result) => {
//       console.log(result)
      
//       setYelp({
//         isLoaded: true,
//         reviews: result.reviews
//       })
//     },
//     (error) => {
//       setYelp({
//         isLoaded: true,
//         error
//       })
//     })

// graph.get(
//   "/greetings.from.mv.tours/ratings",
//   (error, response) => {
//     console.log(response)

//     if(response && !error) {
//       setFacebook({
//         isLoaded: true,
//         reviews: response.data
//       })
//     } else if(error) {
//       setFacebook({
//         isLoaded: true,
//         error
//       })
//     } else {
//       setFacebook({
//         isLoaded: true,
//         error: 'There was an error'
//       })
//     }
//   })