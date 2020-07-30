import React from 'react'
import styled from '@emotion/styled'

import Content from '../../components/content'

import aboutBgMobile from '../../images/about-contact/about-postcard-768.gif'
import aboutBgDesktop from '../../images/about-contact/about-postcard.gif'

const About = () => {
  return (
    <AboutContent id="about">
      <DesktopBackground src={aboutBgDesktop} alt="About" />

      <MobileBackground src={aboutBgMobile} id="mobile-about-contact-image" alt="About" />

      <TextContainer>
        <NoIndentP>Hello friends,</NoIndentP>

        <p>Greetings From Martha's Vineyard! Our tour guides show you our 6 towns; each with a unique history and feel. See where celebrities stay and stand on the sets of Jaws. Understand why we are all drawn to this magical island!</p>

        <p>Relax in our luxurious air conditioned vans on comfy leather captain chairs as we cruise alongside beautiful beaches and quaint seaside towns with whaling captains&rsquo; houses and stone walls framing rolling fields dotted with sheep all the way down to the sea!</p>

        <p>Explore the gingerbread cottages, shop the island&rsquo;s first general store, climb lighthouses, and view the colorful 200&rsquo; Clay cliffs!</p>

        <p>Finally, we&rsquo;ll have a picnic in Menemsha and dine on the freshest seafood on the docks next to the working fishing boats, with a complimentary bottle of wine!</p>

        <NoIndentP>We pick up customers and drop off friends.  Wish you were here!</NoIndentP>

        <NoIndentP alignRight={true}>Greeting From Martha&rsquo;s Vineyard Tours</NoIndentP>

        <ViewItineraryContainer>
          <GreenButton href="/itinerary/">View Itinerary</GreenButton>
        </ViewItineraryContainer>
      </TextContainer>
    </AboutContent>
  )
}

export default About

const AboutContent = styled(Content)`
  position: relative;
  padding-top: 0;
  margin-top: -60px;

  p {
    text-indent: 20px;
    margin-bottom: 10px;
    font-family: 'Special Elite', cursive;
  }

  @media screen and (min-width: 570px) {
    transform: rotate(2deg);
  }
`

const MobileBackground = styled.img`
  display: block;
  max-width: 100%;

  @media screen and (min-width: 840px) {
    display: none;
  }

  @media screen and (max-width: 570px) {
    max-width: none;
    margin-left: -6%;
    margin-right: -6%;
  }

  @media screen and (max-width: 535px) {
    margin-right: -10%;
    margin-left: -10%;
  }

  @media screen and (max-width: 500px) {
    margin-left: -15%;
    margin-right: -15%;
  }

  @media screen and (max-width: 470px) {
    margin-left: -27%;
    margin-right: -27%;
  }

  @media screen and (max-width: 430px) {
    margin-left: -35;
    margin-right: -35%;
  }

  @media screen and (max-width: 400px) {
    margin-left: -48%;
    margin-right: -48%;
  }
`

const DesktopBackground = styled.img`
  display: block;
  max-width: 110%;
  margin-left: -5%;
  margin-right: -5%;

  @media screen and (max-width: 839px) {
    display: none;
  }
`

const TextContainer = styled.div`
  position: absolute;
  top: 200px;
  bottom: 0;
  right: 80px;
  left: 80px;

  @media screen and (max-width: 890px) {
    top: 180px;
  }

  @media screen and (max-width: 839px) {
    left: 180px;
    right: 180px;
    top: 260px;
  }

  @media screen and (max-width: 715px) {
    left: 70px;
    right: 70px;
  }

  @media screen and (max-width: 680px) {
    top: 150px;
  }

  @media screen and (max-width: 570px) {
    top: 190px;
    left: 50px;
    right: 50px;
  }

  @media screen and (max-width: 535px) {
    left: 20px;
    right: 20px;
  }

  @media screen and (max-width: 420px) {
    top: 160px;
  }
`

const NoIndentP = styled.p`
  text-indent: 0 !important;

  ${props => props.alignRight ? 'text-align: right;' : ''}
`

const ViewItineraryContainer = styled.div`
  display: flex;
  justify-content: center;
`

const GreenButton = styled.a`
  color: #fff;
  background-color: #5cb85c;
  border-color: ;

  display: inline-block;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  border: 1px solid #4cae4c;
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 4px;
  user-select: none;
  text-decoration: none;

  font-family: 'Ubuntu', sans-serif;
`