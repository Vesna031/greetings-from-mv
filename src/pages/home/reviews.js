import React, {useState, useEffect} from 'react'
import styled from '@emotion/styled'

import graph from 'fbgraph'

const Reviews = () => {
  graph.setAccessToken('673765b8f10bb9b5c9de4895e4f80bc8')

  const [yelp, setYelp] = useState({
    error: null,
    isLoaded: false,
    reviews: []
  })
  const [facebook, setFacebook] = useState({
    error: null,
    isLoaded: false,
    reviews: []
  })

  useEffect(() => {
    fetch('https://api.yelp.com/v3/businesses/greetings-from-marthas-vineyard-tours-oak-bluffs/reviews', {
      method: "GET",
      headers: {
        'access-control-allow-origin': '*',
        'Content-type': 'application/json; charset=UTF-8'
      }})
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          
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
    
    graph.get(
      "/greetings.from.mv.tours/ratings",
      (error, response) => {
        console.log(response)

        if(response && !error) {
          setFacebook({
            isLoaded: true,
            reviews: response.data
          })
        } else if(error) {
          setFacebook({
            isLoaded: true,
            error
          })
        } else {
          setFacebook({
            isLoaded: true,
            error: 'There was an error'
          })
        }
      })
    }, [])

  return (
    <div>Reviews</div>
  )
}

export default Reviews

    // yelpReviews.map(({text, url, rating, name}, index) => {
    //   if(rating === 5) {
    //     return (
    //       <blockquote key={index}>
    //         <span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>

    //         <p>{text}</p>

    //         <footer>
    //           <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
    //         </footer>
    //       </blockquote>
    //     )
    //   }
    // })

//     for(var i = 0; i < yelpReviews.length; i++) {
//       if(yelpReviews[i].rating === 5) {
//         $('<blockquote><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><br><p>' + yelpReviews[i].text + '</p><footer><a href="' + yelpReviews[i].url + '" target="_blank">' + yelpReviews[i].name + ' <cite title="Yelp">Yelp</cite></a></footer></blockquote>').appendTo('#yelp-reviews');
//       }
//     }

//     // for(var j = 0; j < facebookReviews.length; j++) {
//     //   $('<blockquote><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><br><p>' + facebookReviews[j].text + '</p><footer><a href="' + facebookReviews[j].url + '" target="_blank">' + facebookReviews[j].name + ' <cite title="Facebook">Facebook</cite></a></footer></blockquote>').appendTo('#facebook-reviews');
//     // }

//     $('.reviews-slider').slick({
//       autoplay: true,
//       arrows: false,
//       autoplaySpeed: 7500,
//       fade: true
//     });

//     $('#reviews-loader').hide();

//     // Facebook Posts
//     // for(var k = 0; k < facebookPosts.length; k++) {
//     //   $('<a class="facebook-post" id="post-' + k + '" target="_blank" href="' + facebookPosts[k].link + '" style="background-image:url(' + facebookPosts[k].image + ')"></a>').appendTo('#facebook-posts #post-container');
//     // }

//     // $('#facebook-loader').hide();
//   } catch (error) {
//     $('#reviews').hide();
//     $('#facebook-posts').hide();
//   }
// });
// });