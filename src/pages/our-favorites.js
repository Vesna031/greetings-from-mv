import React from 'react'
import styled from '@emotion/styled'

import Content from '../components/content'

import flyingHorses from '../images/our-favorites/flying-horses.jpg'
import africanAmericanTrail from '../images/our-favorites/african-american-trail.jpg'
import allensSheepFarm from '../images/our-favorites/allens-sheep-farm.jpg'
import campgroundMuseum from '../images/our-favorites/campground-museum.jpg'
import eastChopLighthouse from '../images/our-favorites/east-chop-lighthouse.jpg'
import jawsJumpingBridge from '../images/our-favorites/jaws-jumping-bridge.jpg'
import menemshaFishMarket from '../images/our-favorites/menemsha-fish-market.jpg'
import operationRescueMVLighthouse from '../images/our-favorites/operation-rescue-mv-lighthouse.jpg'
import orangePeelBakery from '../images/our-favorites/orange-peel-bakery.jpg'
import spiritKayak from '../images/our-favorites/spirit-kayak.jpg'
import wampanoagTribe from '../images/our-favorites/wampanoag-tribe.jpg'

const ourFavorites = [{
  title: 'Flying Horses Carousel',
  image: flyingHorses,
  link: 'https://www.tripadvisor.com/Attraction_Review-g41750-d104906-Reviews-Flying_Horses_Carousel-Oak_Bluffs_Martha_s_Vineyard_Massachusetts.html'
}, {
  title: 'East Chop Lighthouse',
  image: eastChopLighthouse,
  link: 'https://mvmuseum.org/lighthouses/east-chop/'
}, {
  title: 'Operation Rescue MV Lighthouse',
  image: operationRescueMVLighthouse,
  link: 'https://www.imdb.com/title/tt5696736/'
}, {
  title: 'Wampanoag Tribe',
  image: wampanoagTribe,
  link: 'https://www.wampanoagtribe.org/'
}, {
  title: 'Orange Peel Bakery',
  image: orangePeelBakery,
  link: 'http://www.orangepeelbakery.net/'
}, {
  title: 'Island Spirit Kayak',
  image: spiritKayak,
  link: 'http://www.islandspiritkayak.com/'
}, {
  title: 'Jaws Jumping Bridge',
  image: jawsJumpingBridge,
  link: 'https://www.google.com/maps/place/Jaws+Bridge/@41.4160981,-70.550933,17z/data=!3m1!4b1!4m5!3m4!1s0x89e52eb60954218d:0x91b46a3dfc3df1ce!8m2!3d41.4160981!4d-70.5487443?hl=en'
}, {
  title: 'Allen\'s Sheep Farm',
  image: allensSheepFarm,
  link: 'http://allenfarm.com/'
}, {
  title: 'African American Trail',
  image: africanAmericanTrail,
  link: 'http://mvafricanamericanheritagetrail.org/'
}, {
  title: 'Menemsha Fish Market',
  image: menemshaFishMarket,
  link: 'http://www.menemshafishmarket.net/'
}, {
  title: 'Campground Museum',
  image: campgroundMuseum,
  link: 'http://www.mvcma.org/cottage-museum--shop.html'
}]

const OurFavorites = () => (
  <OurFavoritesContent>
    <h1>Our Favorites</h1>

    <h2>Through the years of touring the Island, we've compiled a list of our favorite places to visit, things to do, and restaurants and bakeries to eat:</h2>

    <FavoritesContainer>
      {ourFavorites.map((favorite, index) => (
        <Favorite key={index} href={favorite.link} target="_blank" rel="noreferrer noopener">
          <ImageContainer>
            <Image image={favorite.image} />
          </ImageContainer>

          <h3>{favorite.title}</h3>
        </Favorite>
      ))}
    </FavoritesContainer>

    <div style={{textAlign: 'center'}}>
      <BackButton href="/">Back to site</BackButton>
    </div>
  </OurFavoritesContent>
)

export default OurFavorites

const OurFavoritesContent = styled(Content)`
  background: #f0eccf;
  font-family: 'Ubuntu', sans-serif;
  display: block;
  margin: 30px auto;
  border-radius: 2rem;
  padding: 30px;

  p {
    margin-bottom: 1rem;
  }
  
  a {
    color: #394a59;
    text-decoration: none;

    transition: color 0.25s ease;

    &:hover {
      color: #23527c
    }
  }

  h1 {
    text-align: center;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  h2 {
    text-align: center;
    font-weight: normal;
    margin-bottom: 2rem;
    font-size: 1.25rem;
  }

  ul, ol {
    margin-left: 2rem;
  }
`

const BackButton = styled.a`
  color: #fff !important;
  background-color: #337ab7;

  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid #2e6da4;

  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 4px;
  user-select: none;
  text-decoration: none !important;

  &:hover {
    background-color: #286090;
    border-color: #204d74;
  }
`

const FavoritesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
`

const Favorite = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(33% - 2rem);
  overflow: hidden;

  border: 1px solid #ddd;
  margin-bottom: 20px;
  border-radius: 4px;

  h3 {
    text-align: center;
    margin: 0;
    padding: 1rem .5rem;
  }

  > div > div, h3 {
    transition: transform 0.25s ease;
  }

  &:hover {
    > div > div, h3 {
      transform: scale(1.2);
    }
  }
`

const ImageContainer = styled.div`
  padding-bottom: 75%;
  overflow: hidden;
  position: relative;
`

const Image = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`