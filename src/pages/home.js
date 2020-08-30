import React from 'react'
import styled from '@emotion/styled'
import ScrollToTop from 'react-scroll-to-top'
import {Helmet} from 'react-helmet'

import Header from '../components/header'
import Hero from './home/hero'
import About from './home/about'
import BookNow from './home/book-now'
import Reviews from './home/reviews'
import Gallery from './home/gallery'
import Map from './home/map'
import Instagram from './home/instagram'

import scrollToTop from '../images/icons/scroll-to-top.png'

const Home = () => (
  <>
    <Helmet>
      <title>Welcome to Greetings from Martha's Vineyard Tours</title>
      <meta name="description" content="Greetings from Martha's Vineyard Tours! Our tour guides will show you our towns so you'll understand why we are all drawn to this magical island!" />
      <link rel="canonical" href="https://toursmv.com" />
    </Helmet>

    <ScrollToTop smooth component={<ScrollToTopIcon />} style={{backgroundColor: 'transparent', boxShadow: 'none', width: '2rem', height: '2rem'}} />
    
    <Header />

    <HomeContainer>
      <Hero />
      <About />
      <BookNow />
      <Reviews />
      <Gallery />
      <Map />
      <Instagram />
    </HomeContainer>
  </>
)

export default Home

const HomeContainer = styled.div`
  width: 100%;
  overflow: hidden;
`

const ScrollToTopIcon = styled.div`
  width: 2rem;
  padding-bottom: 2rem;

  background-image: url(${scrollToTop});
  background-repeat: no-repeat;
  background-size: 100%;
  background-size: contain;
  background-position: center;
`