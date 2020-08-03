import React from 'react'
import styled from '@emotion/styled'

const CloseButton = ({clickHandler, className}) => (
  <StyledCloseButton onClick={clickHandler} className={className} />
)

export default CloseButton

const StyledCloseButton = styled.button`
  position: absolute;
  top: 1rem;
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