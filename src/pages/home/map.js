import React, {useState, useEffect} from 'react'
import styled from '@emotion/styled'

import Content from '../../components/content'

import FlipCards from './flip-cards'

import map from '../../images/map_sizes/map-1200-wcta.png'

const Map = () => {
  const imageMapResize = require('image-map-resizer')
  const [displayPopup, setPopupDisplay] = useState(false)
  const [popupTitle, setPopupTitle] = useState(null)
  const [popupLink, setPopupLink] = useState(null)
  const [popupDesc, setPopupDesc] = useState(null)

  useEffect(() => {
    imageMapResize()
  }, [imageMapResize])

  const popups = {
    oakBluffs: {
      title: 'Oak Bluffs',
      link: 'https://www.oakbluffsma.gov/',
      description: 'A Victorian-styled yet exciting town on the tip of our island. There are so many ice cream shops in Oak Bluffs, there is no doubt your stomach will ache if you try to taste them all! Circuit Avenue and the harbour are filled with wonderful bars, shops, and restaurants, and are flanked by the iconic Campground on one side and Ocean Park on the other.'
    },
    vineyardHaven: {
      title: 'Vineyard Haven',
      link: 'https://en.wikipedia.org/wiki/Vineyard_Haven,_Massachusetts',
      description: 'Filled with shops and restaurants, Vineyard Haven is a harbour town home to many creatives. Learn some maritime history, grab a coffee to go and head towards main street, or stop by <a href="https://www.mvseafood.com/" target="_blank" rel="noopener noreferrer">Net Result</a> for some fantastic seafood!'
    },
    westTisbury: {
      title: 'West Tisbury',
      link: 'https://en.wikipedia.org/wiki/West_Tisbury,_Massachusetts',
      description: 'A small but beautiful town. Check out Alley’s General Store’s vintage brass P.O. boxes amongst the thousands of items for sale. “If they don’t have it, you probably don’t need it!” one fellow on our tour said. Home of the farmer’s market and some remarkable artwork.'
    },
    menemsha: {
      title: 'Menemsha',
      link: 'https://en.wikipedia.org/wiki/Menemsha,_Massachusetts',
      description: 'Every dreamed about watching a sunset and eating fresh seafood with a glass of wine? If you did, you dreamed of Menemsha. A small fishing harbour featuring seafood shops and a beach that looks off to the west. Martha’s Vineyard sunsets are already great, but if you want front-row seats, go to Menemsha.'
    },
    edgartown: {
      title: 'Edgartown',
      link: 'https://www.edgartown-ma.us/',
      description: 'Cruise the narrow streets with whaling captain’s houses on one side and the picturesque harbor on the other filled with beautiful classic sailboats and multi-million dollar yachts. Hear how whale oil money helped build this town and pause to photograph the majestic <a href="https://www.harborviewhotel.com/" target="_blank" rel="noopener noreferrer">Harborview Hotel</a> atop the hill. Make it to the steps of the Harborview and turn around to capture the great lighthouse with Chappaquiddick Island as your panoramic backdrop.'
    },
    aquinnah: {
      title: 'Aquinnah',
      link: 'https://en.wikipedia.org/wiki/Aquinnah,_Massachusetts',
      description: 'It might take a bit longer to get to the tip of the island, not that the drive is anything but enjoyable as you wind under bows of oak and past homes of artists and novelists, but standing on the clay cliffs and looking down on pristine beaches makes the drive even more worth it. If you’re lucky, you might even catch surfers off of Moshop Beach!'
    }
  }

  const showPopup = (town) => {
    setPopupTitle(popups[town].title)
    setPopupDesc(popups[town].description)
    setPopupLink(popups[town].link)
    setPopupDisplay(true)
  }

  const closePopup = () => {
    setPopupDisplay(false)
  }

  return (
    <div id="map">
      <Content>
        <MapContainer>
          <MapImage src={map} useMap="#mapiconslocations_1200" alt="Vintage map of Martha's Vineyard" onClick={closePopup} />

          <map id="mapiconslocations_1200" name="mapiconslocations_1200">  
            <area shape="circle" coords="857,158,75" alt="Oak Bluffs" onClick={() => showPopup('oakBluffs')} />
            <area shape="circle" coords="961,385,75" alt="Edgartown" onClick={() => showPopup('edgartown')} />
            <area shape="circle" coords="552,342,75" alt="West Tisbury" onClick={() => showPopup('westTisbury')} />
            <area shape="circle" coords="90,558,75" alt="Aquinnah" onClick={() => showPopup('aquinnah')} />
            <area shape="circle" coords="715,142,75" alt="Vineyard Haven" onClick={() => showPopup('vineyardHaven')} />
            <area shape="circle" coords="264,483,75" alt="Menemsha" onClick={() => showPopup('menemsha')} />
          </map>

          <PopUp display={displayPopup ? 'block' : 'none'}>
            <CloseButton onClick={closePopup}/>

            <h1>{popupTitle} <TownLink href={popupLink} rel="noopener noreferrer" target="_blank" /></h1>

            <Description dangerouslySetInnerHTML={{__html: popupDesc}} />
          </PopUp>
        </MapContainer>

        <StyledFlipCards popups={popups} />
      </Content>
    </div>
  )
}

export default Map

const MapImage = styled.img`
  display: block;
  max-width: 100%;
  position: relative;
`

const StyledFlipCards = styled(FlipCards)`
  @media screen and (min-width: 641px) {
    display: none;
  }
`

const MapContainer = styled.div`
  position: relative;
  transform: rotate(2deg);

  @media screen and (max-width: 640px) {
    display: none;
  }
`

const PopUp = styled.div`
  font-family: 'Ubuntu', sans-serf;
  display: ${props => props.display};
  position: absolute;
  top: 10%;
  bottom: 10%;
  left: 10%;
  right: 10%;
  padding: 5%;
  color: #f0eccf;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
`

const TownLink = styled.a`
  &:after {
    display: inline-block;
    content: 'i';
    height: 1.5rem;
    width: 1.5rem;
    font-weight: bold;
    text-align: center;
    vertical-align: middle;
    font-size: 1rem;
    font-family: 'Ubuntu', sans-serif;
    background: #f0eccf;
    border-radius: 100%;
    color: rgba(0, 0, 0, 0.8);
    margin-top: -0.33rem;
  }
`

const Description = styled.p`
  a {
    color: #77878d;
    text-decoration: none;

    &:hover {
      color: #77878d;
      text-decoration: underline;
    }
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 0rem;
  right: 1rem;
  display: block;

  background: transparent;
  outline: none;
  border: none;

  cursor: pointer;

  &:after {
    content: '\\00D7';
    display: block;
    color: rgba(255, 255, 255, 0.75);
    font-size: 3rem;
    font-weight: bold;
  }

  &:hover:after {
    color: rgba(255, 255, 255, 1);
  }
`