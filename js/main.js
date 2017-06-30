$(document).ready(function() {
  var data = {
    term: 'Greetings from martha\'s vineyard',
    location: 'Martha\'s Vineyard'
  };

  $.ajax({
    url: 'https://api.yelp.com/v3/businesses/search',
    data: data,
    crossDomain: true
  }).done(function(data) {
    console.log(data);
  });
});