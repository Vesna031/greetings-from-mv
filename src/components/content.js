import React from 'react'
import styled from '@emotion/styled'

const Content = ({children, className}) => (
  <ContentContainer className={className}>
    {children}
  </ContentContainer>
)

export default Content

const ContentContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 3rem 1rem;

  display: flex;
  flex-wrap: wrap;
`