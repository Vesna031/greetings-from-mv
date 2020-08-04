import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import {Global, css} from '@emotion/core'

import woodBg from './images/backgrounds/resources-background.png'

import NotificationBar from './components/notification-bar'
import Footer from './components/footer'

import Home from './pages/home'
import PrivacyPolicy from './pages/privacy-policy'
import Itinerary from './pages/itinerary'
import OurFavorites from './pages/our-favorites'

const App = () => {
  return (
    <Router>
      <Global styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        img {
          max-width: 100%;
          display: block;
        }

        body {
          background-image: url(${woodBg});
          line-height: 1.42857143;
        }
      `} />

      <NotificationBar />

      <div style={{position: 'relative'}}>
        <Switch>
          <Route path="/marthas-vineyard-tour-itinerary">
            <Itinerary />
          </Route>
          <Route path="/privacy-policy">
            <PrivacyPolicy />
          </Route>
          <Route path="/favorites">
            <OurFavorites />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))