import React from 'react'
import styled from '@emotion/styled'

import Content from '../../components/content'

import handdrawnDivider from '../../images/hand-drawns/every-tuesday-hand-drawn-decorative-divider-horizontal-white.gif'

import tripadvisor from '../../images/reviews/Tripadvisor_Logo_circle-green_RGB.png'
import yelp from '../../images/reviews/burst_icon@2x.png'
import facebook from '../../images/reviews/f_logo_RGB-Blue_250.png'
import google from '../../images/reviews/google-icon.svg'

const Reviews = () => (
  <div id="reviews">
    <ReviewsContent>
      <Heading>Check out our reviews!</Heading>
      
      <ReviewSites>
        <ReviewSite><a href="https://www.tripadvisor.com/Attraction_Review-g41750-d13221005-Reviews-Greetings_from_Martha_s_Vineyard_Tours-Oak_Bluffs_Martha_s_Vineyard_Massachusetts.html?m=19905" target="_blank" rel="noopener noreferrer"><img src={tripadvisor} alt="TripAdvisor" /></a></ReviewSite>

        <ReviewSite><a href="https://www.yelp.com/biz/greetings-from-marthas-vineyard-tours-oak-bluffs?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)" target="_blank" rel="noopener noreferrer"><img src={yelp} alt="Yelp" /></a></ReviewSite>

        <ReviewSite><a href="https://www.facebook.com/greetings.from.mv.tours/" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Facebook" /></a></ReviewSite>

        <ReviewSite><a href="https://g.page/marthas-vineyard-tours" target="_blank" rel="noopener noreferrer"><img src={google} alt="Google" /></a></ReviewSite>
      </ReviewSites>
    </ReviewsContent>
  </div>
)

export default Reviews

const ReviewsContent = styled(Content)`
  background: rgba(0, 0, 0, 0.4);
  border-radius: 2rem;
  flex-direction: column;
  
  @media screen and (max-width: 1160px) {
    margin: 3rem 1rem;
  }
`

const Heading = styled.h2`
  width: 100%;
  font-family: 'Ubuntu', sans-serif;
  color: #f0eccf;
  font-size: 2.5rem;
  text-align: center;

  &:after {
    content: '';
    display: block;
    background-image: url(${handdrawnDivider});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 25%;
    padding-bottom: 3%;
    margin: 0.5rem auto;
  }
`

const ReviewSites = styled.div`
  display: flex;
  padding-top: 20px;

  @media screen and (max-width: 680px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

const ReviewSite = styled.div`
  color: #f0eccf;
  text-decoration: none;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
  display: block;
  margin: 20px auto;

  @media screen and (max-width: 680px) {
    margin: 40px auto;
    width: 50%;
  }

  img {
    max-width: 90px;
    margin: 0 auto;
    transition: transform .75s ease;

    @media screen and (max-width: 680px) {
      width: 100%;
    }
  }
  
  &:hover img {
    transform: rotate(720deg);
  }
`