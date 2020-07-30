import React from 'react'
import styled from '@emotion/styled'

import Content from '../../components/content'

import bookNowSprite from '../../images/buttons/book-now-sprite.gif'

const BookNow = () => {
  return(
    <BookNowContent>
      <BookNowButton href="https://fareharbor.com/embeds/book/greetingsfrommarthasvineyard/?full-items=yes" />
    </BookNowContent>
  )
}

export default BookNow

const BookNowContent = styled(Content)`
  display: flex;
  justify-content: center;
  padding: 0 1rem;
`

const BookNowButton = styled.a`
  border: none;
  outline: none;
  cursor: pointer;
  width: 33%;
  padding-bottom: 33%;

  @media screen and (max-width: 768px) {
    width: 50%;
    padding-bottom: 50%;
  }

  background: url(${bookNowSprite});
  background-size: 200% 100%;
  background-repeat: no-repeat;
  background-position: left center;
  
  &:hover {
    background-position: right center;
  }
`