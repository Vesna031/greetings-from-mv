import React, {useState} from 'react'
import styled from '@emotion/styled'
import Modal from 'react-modal'
import {Slide} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import disableScroll from 'disable-scroll'

import Content from '../../components/content'

import viewGallerySprite from '../../images/buttons/view-gallery-sprite.gif'

import photoBoat from '../../images/pro-gallery/photo-boat.gif'
import photoLighthouse from '../../images/pro-gallery/photo-lighthouse.gif'
import photoMenemshaHarbor from '../../images/pro-gallery/photo-menemsha-harbor.gif'
import photoSunset from '../../images/pro-gallery/photo-sunset.gif'

Modal.setAppElement('#root')

const Gallery = () => {
  const [galleryIsOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
    disableScroll.on()
  }

  const closeModal = () => {
    setIsOpen(false)
    disableScroll.off()
  }

  const importAll = (r) => {
    return r.keys().map(r)
  }

  const photos = importAll(require.context('../../images/pro-gallery/new', false, /\.(png|jpe?g|gif)$/))

  const modalStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    content: {
      maxWidth: '100%',
      maxHeight: '100%',
      background: 'transparent',
      border: 'none',
      height: '100vh',
      width: '100vw',
      overflow: 'hidden',
      inset: '0px',
      paddingTop: '50px'
    }
  }

  return (
    <GalleryContent>
      <PostcardImage src={photoBoat} />
      <PostcardImage src={photoLighthouse} />
      <PostcardImage src={photoMenemshaHarbor} />
      <PostcardImage src={photoSunset} />

      <ViewGalleryButton onClick={openModal} />

      <Modal
          isOpen={galleryIsOpen}
          onRequestClose={closeModal}
          contentLabel="Photo Gallery"
          style={modalStyles}
        >
          <ModalContent>
            <Slide
              autoplay={false}
              transitionDuration={250}>
              {photos.map((photo, index) => (
                <SlideContainer key={index}>
                  <SlideImage src={photo} alt={`Gallery slide #${index + 1}`} />
                </SlideContainer>
              ))}
            </Slide>

            <CloseButton onClick={closeModal} />
          </ModalContent>
        </Modal>
    </GalleryContent>
  )
}

export default Gallery

const GalleryContent = styled(Content)`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  transform: rotate(-2deg);
`

const ViewGalleryButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 33%;
  padding-bottom: 21.7%;
  position: absolute;

  @media screen and (max-width: 768px) {
    width: 50%;
    padding-bottom: 32.6%;
    left: 25%;
    right: 25%;
  }

  background: url(${viewGallerySprite});
  background-size: 200% 100%;
  background-repeat: no-repeat;
  background-position: left center;
  
  &:hover {
    background-position: right center;
  }

  left: 33%;
  right: 33%;
  top: 33%;
`

const PostcardImage = styled.img`
  width: 50%;
  display: block;
`

const ModalContent = styled.div`
  position: relative;
`

const CloseButton = styled.button`
  position: absolute;
  top: 0rem;
  right: 0rem;
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

const SlideContainer = styled.div`
  display: flex;
  width: 80vw;
  height: 80vh;
  align-items: center;
  justify-content: center;
  margin: 1rem auto 0;
`

const SlideImage = styled.img`
  position: relative;
  max-width: 100%;
  max-height: 100%;
  margin: 0 1rem;
  display: block;
`