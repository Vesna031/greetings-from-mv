import React, {useState, useEffect} from 'react'
import styled from '@emotion/styled'

const Reviews = () => {
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
    fetch('/api/yelp')
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
      
    // fetch('/api/facebook')
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
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
  }, [])

  return (
    <div>Reviews</div>
  )
}

export default Reviews
