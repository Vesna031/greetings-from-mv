import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import {Global, css} from '@emotion/core'

import woodBg from './images/backgrounds/resources-background.gif'

import Header from './components/header'

import Home from './pages/home'

const App = () => {
  return (
    <Router>
      <Global styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');

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
        }
      `} />

      <Header />

      <Switch>
        <Route path="/itinerary">
          <div>Itinerary</div>
        </Route>
        <Route path="/privacy-policy">
          <div>Privacy Policy</div>
        </Route>
        <Route path="/our-favorites">
          <div>Our Favorites</div>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))