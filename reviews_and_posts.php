<?php
  require __DIR__ . '/vendor/autoload.php';
  date_default_timezone_set('EST');

  // YELP
  $yelp_reviews = array();
  $provider = new \Stevenmaguire\OAuth2\Client\Provider\Yelp([
    'clientId'     => 'gBCKyJl4lEQZJc6WWEFvNw',
    'clientSecret' => 'cMSyHdzd37sU4ORIHjlC5kJC2oTcfEhAmLg9zJWh1XtALgArQwzD5TJYXNwQsntC'
  ]);
  $accessToken = (string) $provider->getAccessToken('client_credentials');

  $client = new \Stevenmaguire\Yelp\v3\Client(array(
    'accessToken' => $accessToken
  ));

  $parameters = [
    'locale' => 'en_US',
  ];

  $reviews = $client->getBusinessReviews('greetings-from-marthas-vineyard-tours-oak-bluffs', $parameters);

  foreach($reviews->reviews as $review) {
    array_push($yelp_reviews, array(
      'url' => $review->url,
      'rating' => $review->rating,
      'text' => $review->text,
      'name' => $review->user->name
    ));
  }

  // FACEBOOK
  $facebook_reviews = array();
  $facebook_review_url = 'https://www.facebook.com/pg/marthasvineyardtours/reviews/';

  $fb = new \Facebook\Facebook([
    'app_id'                => '318059708651553',
    'app_secret'            => '645272c21a8d0871339d40b518593de6',
    'default_graph_version' => 'v2.9',
    'default_access_token'  => 'EAAEhRgvzmCEBAAfrfupwO0zLKP40ZB6ieHbtMrfISp4dZCW2kbEG4ublGZChJB8llRBpz7ejkNQO4gn6psqAn5mj6xREnIDyw2bZAZCZBI28ZBVkZCyUZAh9SZCDXAP81qw0Q161Xy8b7Y4SJ8jKdHwnRjr0BuZBfqb1gTgWkAv4ZC0GqgZDZD',
  ]);

  // try {
  //   $longlivetoken = $fb->get('/oath/access_token?grant_type=fb_exchange_token&client_id=318059708651553&client_secret=645272c21a8d0871339d40b518593de6&fb_exchange_token=318059708651553|Kin75eTt-cTUEota2CdTzPwVbJU');
  // } catch(\Facebook\Exceptions\FacebookResponseException $e) {
  //   echo 'Graph returned an error: ' . $e->getMessage();
  //   exit;
  // } catch(\Facebook\Exceptions\FacebookSDKException $e) {
  //   echo 'Facebook SDK returned an error: ' . $e->getMessage();
  //   exit;
  // }

  try {
    $response = $fb->get('/marthasvineyardtours/ratings');
  } catch(\Facebook\Exceptions\FacebookResponseException $e) {
    echo 'Graph returned an error: ' . $e->getMessage();
    exit;
  } catch(\Facebook\Exceptions\FacebookSDKException $e) {
    echo 'Facebook SDK returned an error: ' . $e->getMessage();
    exit;
  }

  // echo 'FACEBOOK REVIEWS:<br>';
  $graphEdge = $response->getGraphEdge();
  foreach($graphEdge as $graphNode) {
    if($graphNode->getField('review_text') != null) {
      array_push($facebook_reviews, array(
        'url' => $facebook_review_url,
        'rating' => $graphNode->getField('rating'),
        'text' => $graphNode->getField('review_text'),
        'name' => $graphNode->getField('reviewer')->getField('name'),
      ));
    }
  }

  // FACEBOOK POSTS
  $facebook_posts = array();
  $facebook_pagelink = 'https://www.facebook.com/marthasvineyardtours/';

  try {
    $response = $fb->get('/marthasvineyardtours/photos/uploaded?fields=images,link');
  } catch(\Facebook\Exceptions\FacebookResponseException $e) {
    echo 'Graph returned an error: ' . $e->getMessage();
    exit;
  } catch(\Facebook\Exceptions\FacebookSDKException $e) {
    echo 'Facebook SDK returned an error: ' . $e->getMessage();
    exit;
  }

  $graphEdge = $response->getGraphEdge();
  do {
    if($graphEdge[0] == null) {
      break;
    } else {
      $image = $graphEdge[0]->getField('images');
      $image_array_item = array(
        'image' => $image[0]->getField('source'),
        'link'  => $facebook_pagelink
      );

      if(count($facebook_posts) < 10) {
        array_push($facebook_posts, $image_array_item);
      }

      $graphEdge = $fb->next($graphEdge);
    }
  } while(count($facebook_posts) < 10);

  // RETURN VALUE
  $output = array(
    'yelp_reviews' => $yelp_reviews,
    'facebook_reviews' => $facebook_reviews,
    'facebook_posts' => $facebook_posts
  );
  echo json_encode($output);
?>