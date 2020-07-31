import React from 'react'
import styled from '@emotion/styled'

import Content from '../components/content'

const Itinerary = () => (
  <ItineraryContent>
    <h1>Tour Itinerary</h1>

    <p>Take our 4-hour of the beautiful island of Martha’s Vineyard.  This is the minimum time you will want to spend to see our 100 sq. mile island. We will experience six diverse towns and explore unique places. By the end of our journey, we will have traveled 60 miles and it goes by fast.</p>

    <p>Touring this special place is made even better with convenient pick-up service from wherever you stay in our comfortable and air-conditioned vans.</p>

    <p>In <strong>Oak Bluffs</strong>, we’ll walk among the story-book gingerbread cottages and see the oldest carousel in America, where if you grab the brass ring, you get a free ride! We’ll stroll along the lively little harbor or meander through Ocean Park.</p>

    <p><strong>Vineyard Haven</strong> is a quaint New England shopping village where you can go for a sunset sail on a large schooner.  Wander up and down Main Street, which is filled with cute shops and restaurants.</p>

    <p><strong>West Tisbury</strong> is home to the oldest store on-island; Alley’s General Store, which first opened in 1858. We’ll pick up some fresh fruit in the farm stand out back to snack on as we peruse the art at the Field Gallery across the road.</p>

    <p><strong>Edgartown</strong> is surreal, with a harbor and waterfront edged by stately white Greek Revival houses built by whaling captains.  The Old Whaling Church stands tall thanks to six massive columns, and along with the Edgartown Harbor Lighthouse and the historic Harborview Hotel, Edgartown really belongs in a museum!</p>

    <p>Onwards to <strong>Menemsha</strong>, we drive past rolling hills that run to the sea, dotted with sheep and horses and framed by the miles of British-style stone walls. A stop at Chilmark Chocolates is a must, but don’t spoil your appetite until we have our seafood picnic on the docks. We’ll provide you with a complimentary bottle of wine that works well with a hot lobster roll, fresh fish, or the best oysters ever! We also offer a sunset tour, where we wine and dine while watching the sunset into the ocean, followed by boat horns and the applause of the appreciative on-lookers.</p>

    <p>In <strong>Aquinnah</strong>, the end of the island, witness our magnificent colorful clay cliffs. Look down on the spectacular beaches and scour the horizon for the Elizabeth Islands off in the distance. Visit the unique shops owned by the Wampanoag tribe to purchase a piece of wampum jewelry. If you’re feeling energetic climb to the top of the Gayhead lighthouse, which we moved a couple of years ago so it wouldn’t fall into the sea!</p>

    <p>Touring this special place is made even better with convenient pick-up service from wherever you stay and new and air-conditioned vans.</p>

    <p>Don’t hesitate to call us anytime at <a href="tel:+16173599298">(617) 359-9298</a> for answers to questions and to book your tour. Join us on a tour that will make your visit to our island memorable, and see much more than we can put into words here!</p>

    <p>Our tours last 4+ hours. We pick you up from you Island location whether a ferry, hotel or a rental home and that’s when we begin your tour. We have a morning, afternoon, and a sunset tour. Pricing is as follows:</p>

    <ul>
      <li>$80 per hour for up to 4 people.</li>
      <li>Only $10 more for each additional person per hour.</li>
    </ul>

    <p>For all of our tours, you can email us at <a href="mailto:hello@toursmv.com" target="_blank" rel="noopener noreferrer">hello@toursmv.com</a>.</p>

    <p>“We pick up customers and drop off friends.”</p>

    <div style={{textAlign: 'center'}}>
      <BackButton href="/">Back to site</BackButton>
    </div>
  </ItineraryContent>
)

export default Itinerary

const ItineraryContent = styled(Content)`
  background: #f0eccf;
  font-family: 'Ubuntu', sans-serif;
  display: block;
  margin: 30px auto;
  border-radius: 2rem;
  padding: 30px;

  a {
    color: #77878d;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    margin-bottom: 1rem;
  }

  h1, h2, h3, h4, h5 {
    margin-bottom: 1rem;
    margin-top: 2rem;
  }

  h1 {
    text-align: center;
    margin-top: 0;
  }

  ul, ol {
    margin-left: 2rem;
  }

  address {
    margin-left: 1rem;
    font-style: normal;
    margin-bottom: 1rem;
  }
`

const BackButton = styled.a`
  color: #fff !important;
  background-color: #337ab7;

  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid #2e6da4;

  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 4px;
  user-select: none;
  text-decoration: none !important;

  &:hover {
    background-color: #286090;
    border-color: #204d74;
  }
`