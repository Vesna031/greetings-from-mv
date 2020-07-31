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
        <img src={Hero768} srcSet={`${Hero992} 768w, ${Hero1200} 992w`} alt="Greetings From Martha's Vineyard" />
      </div>
    </HeroContent>
  </div>
)

export default Hero

const HeroContent = styled(Content)`
  padding-top: 0;
`