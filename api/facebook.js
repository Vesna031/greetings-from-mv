require('dotenv-flow').config()
var graph = require('fbgraph')
var fetch = require('node-fetch')
const bizSdk = require('facebook-nodejs-business-sdk')

module.exports = (req, res) => {
  fetch(`https://graph.facebook.com/v7.0/greetings.from.mv.tours/ratings?access_token=${process.env.FACEBOOK_ID}|${process.env.FACEBOOK_SECRET}`)
      .then((result) => {
        console.log(result)
      })

  // graph.setAccessToken(process.env.FACEBOOK)

  // graph.get(
  //   "/greetings.from.mv.tours/ratings",
  //   (error, response) => {
  //     console.log(response)
  
  //     if(response && !error) {
  //       res.json({
  //         body: response.data
  //       })
  //     } else if(error) {
  //       res.json({
  //         body: error
  //       })
  //     } else {
  //       res.json({
  //         body: 'There was an error'
  //       })
  //     }
  //   })
  }