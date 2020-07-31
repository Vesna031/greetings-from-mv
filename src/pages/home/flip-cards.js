import React, {useState} from 'react'
import styled from '@emotion/styled'
import ReactCardFlip from 'react-card-flip'

import Content from '../../components/content'

import oakBluffs from '../../images/map_sizes/toursmv-mobile-map-oak-bluffs-lores.png'
import edgartown from '../../images/map_sizes/toursmv-mobile-map-edgartown-lores.png'
import menemsha from '../../images/map_sizes/toursmv-mobile-map-menemsha-lores.gif'
import aquinnah from '../../images/map_sizes/toursmv-mobile-map-aquinnah-lores.png'
import vineyardHaven from '../../images/map_sizes/toursmv-mobile-map-vineyard-haven-lores.png'
import westTisbury from '../../images/map_sizes/toursmv-mobile-map-west-tisbury-lores.png'

const FlipCards = ({popups, className}) => {
  const flipCards = [{
    title: popups.oakBluffs.title,
    description: popups.oakBluffs.description,
    image: oakBluffs,
    key: 'oakBluffs'
  }, {
    title: popups.edgartown.title,
    description: popups.edgartown.description,
    image: edgartown,
    key: 'edgartown'
  }, {
    title: popups.menemsha.title,
    description: popups.menemsha.description,
    image: menemsha,
    key: 'menemsha'
  }, {
    title: popups.vineyardHaven.title,
    description: popups.vineyardHaven.description,
    image: vineyardHaven,
    key: 'vineyardHaven'
  }, {
    title: popups.westTisbury.title,
    description: popups.westTisbury.description,
    image: westTisbury,
    key: 'westTisbury'
  }, {
    title: popups.aquinnah.title,
    description: popups.aquinnah.description,
    image: aquinnah,
    key: 'aquinnah'
  }]

  const [cardsShown, flipTheCards] = useState({
    oakBluffs : false,
    edgartown : false,
    menemsha : false,
    vineyardHaven : false,
    westTisbury : false,
    aquinnah : false
  })
  
  return (
    <FlipCardsContent className={className}>
      {flipCards.map((card) => (
        <FlipCardContainer key={card.key}>
          <ReactCardFlip isFlipped={cardsShown[card.key]} flipDirection="horizontal">
            <div key="front" onClick={(e) => {
                flipTheCards({...cardsShown, [card.key]: true})
              }}>
              <Image src={card.image} alt={card.title}/>
            </div>

            <div key="back" onClick={(e) => {
                flipTheCards({...cardsShown, [card.key]: false})
              }}>
              <Text>
                <p dangerouslySetInnerHTML={{__html: card.description}} />
              </Text>
            </div>
          </ReactCardFlip>
        </FlipCardContainer>
      ))}
    </FlipCardsContent>
  )
}

export default FlipCards

const FlipCardsContent = styled(Content)`
  flex-wrap: nowrap;
  flex-direction: column;
`

const FlipCardContainer = styled.div`
  margin-bottom: 30px;
  cursor: pointer;
`

const Image = styled.img`
  height: 360px;
`

const Text = styled.div`
  height: 360px;
  width: 360px;

  padding: 20px;
  background: rgba(0, 0, 0, 0.8);
  color: #f0eccf;
`

