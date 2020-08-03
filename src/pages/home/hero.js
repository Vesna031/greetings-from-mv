import React, {useState, useEffect} from 'react'
import styled from '@emotion/styled'
import window from 'global'

import Content from '../../components/content'

import Hero1200 from '../../images/hero_sizes/hero_1200.png'
import Hero992 from '../../images/hero_sizes/hero_992.png'
import Hero768 from '../../images/hero_sizes/hero_768.png'

const Hero = () => {
  const [heroImage, setHeroImage] = useState(null)

  const debounce = (fn, ms) => {
    let timer
    return _ => {
      clearTimeout(timer)
      timer = setTimeout(_ => {
        timer = null
        fn.apply(this)
      }, ms)
    }
  }

  const [resizeOnLoad, setResizeOnLoad] = useState(true)

  useEffect(() => {
    const debouncedHandleResize = debounce(
      function handleResize() {
        if(window.innerWidth <= 640) {
          setHeroImage(Hero768)
        } else if(window.innerWidth > 640 && window.innerWidth <= 992) {
          setHeroImage(Hero992)
        } else {
          setHeroImage(Hero1200)
        }
      }, 250)

    if(resizeOnLoad) {
      debouncedHandleResize()
      setResizeOnLoad(false)
    }

    window.addEventListener('resize', debouncedHandleResize)

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  }, [resizeOnLoad, setResizeOnLoad])

  return (
    <div id="hero">
      <HeroContent>
        <HeroImage src={heroImage} alt="Greetings From Martha's Vineyard" />
      </HeroContent>
    </div>
  )
}

export default Hero

const HeroContent = styled(Content)`
  padding-top: 0;
`

const HeroImage = styled.img`
  width: 100%;
  height: auto;
`