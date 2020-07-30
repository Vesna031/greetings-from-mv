import React from 'react'
import styled from '@emotion/styled'

import Header from '../components/header'
import Hero from './home/hero'
import About from './home/about'
import BookNow from './home/book-now'
import Reviews from './home/reviews'
import Gallery from './home/gallery'
import Map from './home/map'
import Instagram from './home/instagram'

const Home = () => (
  <>
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