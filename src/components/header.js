import React, {useState} from 'react'
import {css} from '@emotion/core'
import styled from '@emotion/styled'

import {slide as Menu} from 'react-burger-menu'
import {EnvelopeFill, TelephoneFill} from 'react-bootstrap-icons'

import Content from './content'

import logo from '../images/navigation/nav-logo.png'
import ornament from '../images/navigation/nav-ornament.png'

const Navigation = () => {
  const [dropdownShown, toggleDropdown] = useState(false)

  return (
    <StyledNav>
      <a href="#reviews">Reviews</a>
      <a href="#map">Map</a>
      <a href="#gallery">Gallery</a>
      <a href="#about">About</a>
      <a href="#favorites">Our Favorites</a>
      <StyledDropdownContainer
        onClick={(e) => {toggleDropdown(!dropdownShown)}}
        showDropdown={dropdownShown}
      >
        Contact

        <Dropdown show={dropdownShown}>
          <a href="mailto:hello@toursmv.com" target="_blank" rel="noreferrer noopener"><EnvelopeFill />&nbsp;Email</a>
          <a href="tel:+16173599298"><TelephoneFill />&nbsp;Phone</a>
        </Dropdown>
      </StyledDropdownContainer>
    </StyledNav>
  )
}

const Header = () => {
  const menuStyles = {
    bmBurgerButton: {
      position: 'absolute',
      width: '2.15rem',
      height: '1.85rem',
      right: '2.5rem',
      top: '2.5rem'
    },
    bmBurgerBars: {
      background: '#394a59',
      height: '15%'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#394a59'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#fcf8e3',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmItemList: {
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

  return (
    <StyledHeader>
      <HeaderContent>
        <a href="#hero">{ logo ? <img src={logo} alt="Greeting's from Martha's Vineyard Tours"/> : <h1>Greeting's from Martha's Vineyard Tours</h1> }</a>

        <DesktopNavigation>
          <Navigation />
        </DesktopNavigation>

        <MobileNavigation>
          <Menu isOpen={false} right styles={menuStyles}>
            <Navigation />
          </Menu>
        </MobileNavigation>
      </HeaderContent>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`

const HeaderContent = styled(Content)`
  padding: .5rem;
  align-items: center;
  justify-content: space-around;

  img {
    max-height: 5rem;

    @media screen and (max-width: 992px) {
      max-height: 4rem;
      margin-top: 1rem;
      margin-left: 1rem;
    }
  }

  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }

  > * {
    font-family: 'Ubuntu', sans-serif;
    text-decoration: none;
    color: #394a59;
    text-transform: uppercase;
    position: relative;
    background: transparent;
    border: none;
    font-size: 20px;
    padding: 15px 10px;

    &:hover, &:focus {
      color: #333;
    }

    &:not(:last-child):after {
      position: absolute; 
      display: inline-block;
      right: -1px;
      top: 7px;
      content: "";
      height:38px;
      width: 6px;
      background-image: url(${ornament});
      background-repeat: no-repeat;
      background-size: 100%;
      background-size: contain;

      @media screen and (max-width: 767px) {
        transform: rotate(90deg);
        left: 50%;
        top: 2rem;
      }
    }
  }
`

const MobileNavigation = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 36px;
    height: 36px;
  }
`

const DesktopNavigation = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const dropdownCaret = css`
  content: "";
  display: inline-block;

  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  vertical-align: middle;
  border-top-width: 5px;
  border-top-style: solid;
  
  cursor: pointer;
`

const StyledDropdownContainer = styled.button`
  display: inline-block;

  position: relative;
  cursor: pointer;

  &:after {
    position: relative;

    border-top-color: ${props => props.showDropdown ? '#333' : '#394a59'};
    ${dropdownCaret}
  }

  @media screen and (max-width: 768px) {
    &:after {
      display: none;
    }

    &:before {
      ${dropdownCaret}
      position: absolute;
      border-top-color: ${props => props.showDropdown ? '#333' : '#394a59'};
      right: 0;
      top: 1.5rem;
    }
  }
`

const Dropdown = styled.div`
  position: absolute;
  padding: 0.5rem 1rem;
  display: ${props => props.show ? 'flex' : 'none'};
  flex-direction: column;
  background: #3b5663;

  @media screen and (max-width: 768px) {
    display: flex;
    padding: 0;
    overflow: hidden;
    position: relative;
    max-height: ${props => props.show ? '120px' : '0'};
    align-items: center;

    background: transparent;
    margin-top: 0.5rem;
  }

  a {
    text-align: center;
    display: flex;
    margin: 0.5rem 0;
    text-decoration: none;
    color: #fcf8e3;

    @media screen and (max-width: 768px) {
      color: #3b5663;
    }
  }
`