import React from 'react'
import styled from '@emotion/styled'

const Footer = () => (
  <StyledFooter>
    © 2020 Greetings From Martha's Vineyard · <a href="mailto:hello@toursmv.com" target="_blank" rel="noreferrer noopener">hello@toursmv.com</a> · <a href="/privacy-policy/">Privacy Policy</a> · Site by <a href="mvesna.com" target="_blank" rel="noreferrer noopener">MVesna</a> & <a href="https://artlyticalmedia.com" target="_blank" rel="noreferrer noopener">Artlytical Media</a>
  </StyledFooter>
)

export default Footer

const StyledFooter = styled.footer`
  box-sizing: border-box;
  margin-top: 60px;
  padding: 1.5rem 1rem;
  font-family: 'Ubuntu', sans-serif;
  background: #77878d;
  color: #f0eccf;
  text-align: center;

  a {
    color: #f6e37d;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`