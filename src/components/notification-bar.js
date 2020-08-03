import React, {useState} from 'react'
import styled from '@emotion/styled'
import Modal from 'react-modal'
import disableScroll from 'disable-scroll'

import CloseButton from './close-button'

Modal.setAppElement('#root')

const NotificationBar = () => {
  const [displayBar, setBarDisplay] = useState(true)
  const [displayModal, setModalDisplay] = useState(false)

  const modalStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    content: {
      maxWidth: '560px',
      maxHeight: '100%',
      border: 'none',
      zIndex: '100000',
      background: 'transparent',
      bottom: 'initial',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }

  const hideNotificationBar = () => {
    setBarDisplay(false)
  }

  const openModal = () => {
    setModalDisplay(true)
    disableScroll.on()
  }

  const closeModal = () => {
    setModalDisplay(false)
    disableScroll.off()
  }

  return (
    <>
      <StyledNotificationBar display={displayBar ? 'block' : 'none'}>
        <OpenPopup onClick={openModal}>Message about Covid 19</OpenPopup> <NotificationCloseButton clickHandler={hideNotificationBar} />
      </StyledNotificationBar>

      <Modal
        isOpen={displayModal}
        onRequestClose={closeModal}
        contentLabel="Notification Pop-up"
        style={modalStyles}
      >
        <ModalContent>
          <ModalCloseButton clickHandler={closeModal} />

          <p>Hi Folks,</p>
          
          <p>I’m taking all the precautions to keep us safe and healthy to make your tour as comfy and happy as possible! So please bring your masks, I’ll bring the sanitizer!</p>

          <p>Oh! Also my kids have asked “If you are coming from a hotspot state please quarantine before taking a tour with our dad!</p>

          <p>He is high risk and we don’t want to lose him for a couple a hundred bucks!“-Craig’s kids</p>

          <p>OK Thanks kids! Now that we are all on the same page let’s go enjoy this beautiful island and have some fun!</p>

          <p>Happy Trails,<br />
          Craig</p>
        </ModalContent>
      </Modal>
    </>
  )
}

export default NotificationBar

const StyledNotificationBar = styled.div`
  width: 100%;
  background: rgb(252, 248, 227);
  padding: 1rem;
  text-align: center;
  z-index: 1000;

  &:hover {
    text-decoration: underline;
  }

  display: ${props => props.display};
`

const NotificationCloseButton = styled(CloseButton)`
  &:hover:after {
    color: #394a59 !important;
    opacity: 1;
  }

  &:after {
    top: 0;
    margin-top: -1.15rem;
    color: #394a59;
    opacity: 0.8;
  }
`

const ModalCloseButton = styled(CloseButton)`
  &:hover:after {
    color: #394a59 !important;
    opacity: 1;
  }

  &:after {
    color: #394a59;
    opacity: 0.8;
    margin-right: 1rem;
  }
`

const OpenPopup = styled.button`
  background: transparent;
  border: none;
  outline: none;
  color: #394a59;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
  cursor: pointer;
`

const ModalContent = styled.div`
  background: rgb(252, 248, 227);
  padding: 30px;
  border-radius: 10px;
  font-family: 'Ubuntu', sans-serif;

  p:not(:last-of-type) {
    margin-bottom: 1rem;
    text-indent: 0.5rem;
  }

  p:first-of-type,
  p:last-of-type {
    text-indent: 0rem;
  }
`