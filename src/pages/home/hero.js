import React from 'react'
import styled from '@emotion/styled'

import Content from '../../components/content'

import Hero1200 from '../../images/hero_sizes/hero_1200.png'
import Hero992 from '../../images/hero_sizes/hero_992.png'
import Hero768 from '../../images/hero_sizes/hero_768.png'

const Hero = () => (
  <div id="hero">
    <HeroContent>
      <div id="hero-content">
        <LargeImage src={Hero1200} alt="Greetings From Martha's Vineyard" />
        <MediumImage src={Hero992} alt="Greetings From Martha's Vineyard" />
        <SmallImage src={Hero768} alt="Greetings From Martha's Vineyard" />
      </div>
    </HeroContent>
  </div>
)

export default Hero

const HeroContent = styled(Content)`
  padding-top: 0;
`

const LargeImage = styled.img`
  display: none;

  @media screen and (min-width: 992px) {
    display: block;
  }
`

const MediumImage = styled.img`
  display: none;

  @media screen and (min-width: 768px) and (max-width: 991px) {
    display: block;
  }
`

const SmallImage = styled.img`
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
  }
`