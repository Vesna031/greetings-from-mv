require('dotenv-flow').config()
const yelp = require('yelp-fusion')

const client = yelp.client(process.env.YELP)

module.exports = (req, res) => {
  client.reviews('greetings-from-marthas-vineyard-tours-oak-bluffs').then(response => {
    console.log(response.jsonBody.reviews);
    
    res.json({
      body: response.jsonBody.reviews
    })
  }).catch(e => {
    console.log(e);
  });
}