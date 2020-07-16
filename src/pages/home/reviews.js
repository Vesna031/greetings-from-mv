import React, {useState} from 'react'
import styled from '@emotion/styled'


const Reviews = () => {
  const [yelp, setYelp] = useState({
    error: null,
    isLoaded: false,
    reviews: []
  })

  fetch('https://api.yelp.com/v3/businesses/greetings-from-marthas-vineyard-tours-oak-bluffs/reviews')
    .then(res => res.json())
    .then(
      (result) => {
        setYelp({
          isLoaded: true,
          reviews: result.reviews
        })
      },
      (error) => {
        setYelp({
          isLoaded: true,
          error
        })
      })
}

$.get('reviews_and_posts.php', function (data) {
  try {
    // Yelp and Facebook Reviews
    const yelpReviews = JSON.parse(data).yelp_reviews
    const facebookReviews = JSON.parse(data).facebook_reviews
    const facebookPosts = JSON.parse(data).facebook_posts

    yelpReviews.map(({text, url, rating, name}, index) => (
      <blockquote>
        <span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>

        <p>{text}</p>

        <footer>
          <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
        </footer>
      </blockquote>
    ))

    for(var i = 0; i < yelpReviews.length; i++) {
      if(yelpReviews[i].rating === 5) {
        $('<blockquote><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><br><p>' + yelpReviews[i].text + '</p><footer><a href="' + yelpReviews[i].url + '" target="_blank">' + yelpReviews[i].name + ' <cite title="Yelp">Yelp</cite></a></footer></blockquote>').appendTo('#yelp-reviews');
      }
    }

    // for(var j = 0; j < facebookReviews.length; j++) {
    //   $('<blockquote><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><br><p>' + facebookReviews[j].text + '</p><footer><a href="' + facebookReviews[j].url + '" target="_blank">' + facebookReviews[j].name + ' <cite title="Facebook">Facebook</cite></a></footer></blockquote>').appendTo('#facebook-reviews');
    // }

    $('.reviews-slider').slick({
      autoplay: true,
      arrows: false,
      autoplaySpeed: 7500,
      fade: true
    });

    $('#reviews-loader').hide();

    // Facebook Posts
    // for(var k = 0; k < facebookPosts.length; k++) {
    //   $('<a class="facebook-post" id="post-' + k + '" target="_blank" href="' + facebookPosts[k].link + '" style="background-image:url(' + facebookPosts[k].image + ')"></a>').appendTo('#facebook-posts #post-container');
    // }

    // $('#facebook-loader').hide();
  } catch (error) {
    $('#reviews').hide();
    $('#facebook-posts').hide();
  }
});
});