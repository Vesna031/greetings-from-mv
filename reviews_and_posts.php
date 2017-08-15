<?php
  require __DIR__ . '/vendor/autoload.php';
  date_default_timezone_set('EST');

  // $m = new Memcached();
  // $m->addServer('localhost', 11211);

  $expiration_time = 604800; // one week

  // FACEBOOK
  $app_id = '318059708651553';
  $app_secret = '645272c21a8d0871339d40b518593de6';
  $access_token = 'EAAEhRgvzmCEBAKPxXFCyqKYZAHkrl7ZAB4fV22qM5iJMLWSqv8g0dT5OGWZANLZBOPnXIAZBnTvyUKjkqq4kdpDmhuG6aAK6ZCPMbZAsbGT6rH91VydrFvIztBi7d81THZCurQK7JXUsRbAl2gPTbgGCjxMylNkHZCQHqhQYPxeZAWZCAZDZD';
  $redirect_uri = 'http://toursmv.com/';

  // $m->delete('yelp_reviews');
  // $m->delete('facebook_reviews');
  // $m->delete('facebook_posts');

  // $yelp_reviews = $m->get('yelp_reviews');
  // $facebook_reviews = $m->get('facebook_reviews');
  // $facebook_posts = $m->get('facebook_posts');

  // if(!$yelp_reviews) {
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
      if($review->rating == 5) {
        array_push($yelp_reviews, array(
          'url' => $review->url,
          'rating' => $review->rating,
          'text' => $review->text,
          'name' => $review->user->name
        ));
      }
    }

    // $m->set('yelp_reviews', $yelp_reviews);
  // }

  // if(!$facebook_reviews || !$facebook_posts) {
    $fb = new \Facebook\Facebook([
      'app_id'                => $app_id,
      'app_secret'            => $app_secret,
      'default_graph_version' => 'v2.9',
      'default_access_token'  => $access_token,
    ]);

    try {
      $debug = $fb->get('/debug_token?input_token='.$access_token.'&access_token='.$access_token);
    } catch(\Facebook\Exceptions\FacebookResponseException $e) {
      echo 'Graph returned an error: ' . $e->getMessage();
      exit;
    } catch(\Facebook\Exceptions\FacebookSDKException $e) {
      echo 'Facebook SDK returned an error: ' . $e->getMessage();
      exit;
    }

    $expires_in = json_decode($debug->getBody())->data->expires_at - time();

    if($expires_in < $expiration_time * 2) {
      // echo 'getting new access code<br>';
      try {
        $code = $fb->get('/oauth/client_code?access_token='.$access_token.'&client_secret='.$app_secret.'&redirect_uri='.$redirect_uri.'&client_id='.$app_id);
      } catch(\Facebook\Exceptions\FacebookResponseException $e) {
        echo 'Graph returned an error: ' . $e->getMessage();
        exit;
      } catch(\Facebook\Exceptions\FacebookSDKException $e) {
        echo 'Facebook SDK returned an error: ' . $e->getMessage();
        exit;
      }

      $code = json_decode($code->getBody())->code;

      // echo 'code: '.$code;

      try {
        $longlivetoken = $fb->get('/oauth/access_token?code='.$code.'&client_id='.$app_id.'&redirect_uri='.$redirect_uri);
      } catch(\Facebook\Exceptions\FacebookResponseException $e) {
        echo 'Graph returned an error: ' . $e->getMessage();
        exit;
      } catch(\Facebook\Exceptions\FacebookSDKException $e) {
        echo 'Facebook SDK returned an error: ' . $e->getMessage();
        exit;
      }

      $machine_id = json_decode($longlivetoken->getBody())->machine_id;
      $expires_in = json_decode($longlivetoken->getBody())->expires_in;
      $access_token = json_decode($longlivetoken->getBody())->access_token;

      $fb = new \Facebook\Facebook([
        'app_id'                => $app_id,
        'app_secret'            => $app_secret,
        'default_graph_version' => 'v2.9',
        'default_access_token'  => $access_token,
      ]);
    }

    // if(!$facebook_reviews) {
      $facebook_reviews = array();
      $facebook_review_url = 'https://www.facebook.com/pg/marthasvineyardtours/reviews/';

      try {
        $response = $fb->get('/marthasvineyardtours/ratings');
      } catch(\Facebook\Exceptions\FacebookResponseException $e) {
        echo 'Graph returned an error: ' . $e->getMessage();
        exit;
      } catch(\Facebook\Exceptions\FacebookSDKException $e) {
        echo 'Facebook SDK returned an error: ' . $e->getMessage();
        exit;
      }

      $graphEdge = $response->getGraphEdge();

      foreach($graphEdge as $graphNode) {
        if($graphNode->getField('review_text') != null && $graphNode->getField('rating') == 5) {
          array_push($facebook_reviews, array(
            'url' => $facebook_review_url,
            'rating' => $graphNode->getField('rating'),
            'text' => $graphNode->getField('review_text'),
            'name' => $graphNode->getField('reviewer')->getField('name'),
          ));
        }
      }

      // $m->set('facebook_reviews', $facebook_reviews);
    // }

    // if(!$facebook_posts) {
      // FACEBOOK POSTS
      $facebook_posts = array();

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
          $link = $graphEdge[0]->getField('link');
          $image_array_item = array(
            'image' => $image[3]->getField('source'),
            'link'  => $link
          );

          if(count($facebook_posts) < 10) {
            array_push($facebook_posts, $image_array_item);
          }

          $graphEdge = $fb->next($graphEdge);
        }
      } while(count($facebook_posts) < 10);

      // $m->set('facebook_posts', $facebook_posts);
    // }
  // }

  // RETURN VALUE
  $output = array(
    'yelp_reviews' => $yelp_reviews,
    'facebook_reviews' => $facebook_reviews,
    'facebook_posts' => $facebook_posts
  );
  echo json_encode($output);
?>