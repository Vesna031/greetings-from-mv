import React from 'react'
import styled from '@emotion/styled'

import Hero from './home/hero'
import About from './home/about'
import BookNow from './home/book-now'
// import Reviews from './home/reviews'
import Gallery from './home/gallery'
import Map from './home/map'

const Home = () => (
  <HomeContainer>
    <Hero />
    <About />
    <BookNow />
    {/* <Reviews /> */}
    <Gallery />
    <Map />
  </HomeContainer>
)

export default Home

const HomeContainer = styled.div`
  width: 100%;
  overflow: hidden;
`