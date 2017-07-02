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
  // echo 'YELP REVIEWS:<br>';

  foreach($reviews->reviews as $review) {
    array_push($yelp_reviews, array(
      'url' => $review->url,
      'rating' => $review->rating,
      'text' => $review->text,
      'name' => $review->user->name
    ));
    // echo '<a target="_blank" href="' . $review->url . '">';
    // echo $review->rating . '<br>';
    // echo $review->text . '<br>';
    // echo $review->user->name . '</a><br><br>';
  }

  // FACEBOOK
  $facebook_reviews = array();
  $facebook_review_url = 'https://www.facebook.com/pg/marthasvineyardtours/reviews/';

  $fb = new \Facebook\Facebook([
    'app_id'                => '318059708651553',
    'app_secret'            => '645272c21a8d0871339d40b518593de6',
    'default_graph_version' => 'v2.9',
    'default_access_token'  => 'EAAEhRgvzmCEBANKEKw3nfY0Wezm71v2kSgnLz42AddNItb45ArxltArKwX7YBrZCpsuRHNXbV2fpzMxwuC4zkDPJsT4UTMrmAJ7PdqwE9Vj7sc7sEWuTzZBFeNdoJOIWPiUqCzJPsrExzv0CFFGZB5ZB0pYVDnlWkhV1oS6ylZAAT4BZCLecS7k4PGq0iJrRDRMpw93t3tZCwZDZD',
  ]);

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
      // echo '<a target="_blank" href="https://www.facebook.com/pg/marthasvineyardtours/reviews/">';
      // echo $graphNode->getField('rating') . '<br>';
      // echo $graphNode->getField('review_text') . '<br>';
      // echo $graphNode->getField('reviewer')->getField('name') . '</a><br><br>';
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
  // var_dump($graphEdge);

  do {
    if($graphEdge[0] == null) {
      break;
    } else {
      $image = $graphEdge[0]->getField('images');
      // var_dump($image);
      $image_array_item = array(
        'image' => $image[0]->getField('source'),
        'link'  => $facebook_pagelink
      );

      // var_dump($image_array_item);

      if(count($facebook_posts) < 10) {
        array_push($facebook_posts, $image_array_item);
      }

      $graphEdge = $fb->next($graphEdge);
    }
  } while(count($facebook_posts) < 10);

  // foreach($graphEdge as $graphNode) {
  //   $images = $graphNode->getField('images');

  //   // foreach($images as $image) {
  //     // var_dump($image);
  //     $image_array_item = array(
  //       'image' => $image->getField('source'),
  //       'link'  => $facebook_pagelink
  //     );

  //     if(count($facebook_posts) < 10) {
  //       array_push($facebook_posts, $image_array_item);
  //     }
  //   // }
  // }

  // RETURN VALUE
  $output = array(
    'yelp_reviews' => $yelp_reviews,
    'facebook_reviews' => $facebook_reviews,
    'facebook_posts' => $facebook_posts
  );
  echo json_encode($output);
?>