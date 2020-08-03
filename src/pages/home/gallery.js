import React, {useState} from 'react'
import styled from '@emotion/styled'
import {css} from '@emotion/core'
import Modal from 'react-modal'
import {Slide} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import disableScroll from 'disable-scroll'

import Content from '../../components/content'
import CloseButton from '../../components/close-button'

import viewGallerySprite from '../../images/buttons/view-gallery-sprite.png'

import photoBoat from '../../images/pro-gallery/photo-boat.png'
import photoLighthouse from '../../images/pro-gallery/photo-lighthouse.png'
import photoMenemshaHarbor from '../../images/pro-gallery/photo-menemsha-harbor.png'
import photoSunset from '../../images/pro-gallery/photo-sunset.png'

import arrow from '../../images/icons/scroll-to-top.png'

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
      padding: '0px',
      inset: '0px',
      top: '0px',
      bottom: '0px',
      left: '0px',
      right: '0px'
    }
  }

  return (
    <div id="gallery">
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
                transitionDuration={250}
                nextArrow={<NextButton />}
                prevArrow={<PrevButton />}>
                {photos.map((photo, index) => (
                  <SlideContainer key={index}>
                    <SlideImage src={photo} alt={`Gallery slide #${index + 1}`} />
                  </SlideContainer>
                ))}
              </Slide>

              <CloseButton clickHandler={closeModal} />
            </ModalContent>
          </Modal>
      </GalleryContent>
    </div>
  )
}

export default Gallery

const GalleryContent = styled(Content)`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  transform: rotate(-2deg);
  margin-bottom: -100px;
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

const nextPrevButtons = css`
  background: transparent;
  border: none;
  outline: none;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-size: contain;
  background-size: 100%;
  background-position: center;
  height: 30px;
  width: 30px;
  margin: 30px 0 0;
  cursor: pointer;

  opacity: 0.8;
  transition: opacity: 0.25s ease;

  &:hover {
    opacity: 1;
  }
`

const NextButton = styled.button`
  ${nextPrevButtons}
  margin-right: 30px;
  transform: rotate(90deg);
`

const PrevButton = styled.button`
  ${nextPrevButtons}
  margin-left: 30px;
  transform: rotate(-90deg);
`

const SlideContainer = styled.div`
  display: flex;
  width: 75vw;
  height: 80vh;
  align-items: center;
  justify-content: center;
  margin: 30px auto 0;
`

const SlideImage = styled.img`
  position: relative;
  max-width: 90%;
  max-height: 100%;
  margin: 0 auto;
  display: block;
`