import React from 'react'
import styled from '@emotion/styled'

import Content from '../../components/content'

import handdrawnDivider from '../../images/hand-drawns/every-tuesday-hand-drawn-decorative-divider-horizontal-white.gif'
import instagram from '../../images/instagram/IG_Glyph_Fill.png'

const Instagram = () => (
  <InstagramContent>
    <Heading>Check out our Instagram!</Heading>

    <InstagramLink target="_blank" href="https://www.instagram.com/greetingsfrommarthasvineyard/" rel="noopener noreferrer"><img src={instagram} alt="Instagram" /></InstagramLink>
  </InstagramContent>
)

export default Instagram

const InstagramContent = styled(Content)`
  max-width: 640px;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 2rem;
  
  @media screen and (max-width: 660px) {
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
    width: 50%;
    padding-bottom: 6%;
    margin: 0.5rem auto;
  }
`

const InstagramLink = styled.a`
  max-width: 200px;
  margin: 0 auto;

  img {
    max-width: 100%;
    transition: transform .75s ease;
  }
  
  &:hover img {
    transform: rotate(720deg);
  }
`