<?php
  // YELP
  $curl = curl_init();
  $authtoken_url = "https://api.yelp.com/oauth2/token";
  $authtoken_fields = array(
    'grant_type' => "client_credentials",
    'client_id' => "gBCKyJl4lEQZJc6WWEFvNw",
    'client_secret' => "cMSyHdzd37sU4ORIHjlC5kJC2oTcfEhAmLg9zJWh1XtALgArQwzD5TJYXNwQsntC"
  );
  $authtoken_fields_string = '';

  foreach($authtoken_fields as $key=>$value) {
    $authtoken_fields_string .= $key.'='.$value.'&';
  }
  rtrim($authtoken_fields_string, '&');

  curl_setopt_array($curl, array(
    CURLOPT_URL => $authtoken_url,
    CURLOPT_POST => count($authtoken_fields),
    CURLOPT_POSTFIELDS => $authtoken_fields_string,
    CURLOPT_RETURNTRANSFER => true
  ));

  $result = curl_exec($curl);

  $result = json_decode($result);

  $gfmv_yelp = 'greetings-from-marthas-vineyard-tours-oak-bluffs';

  // curl_setopt_array($curl, array(
  //   CURLOPT_URL => "https://api.yelp.com/v3/businesses/search?location=vineyard%20haven&term=greetings%20from%20marthas%20vineyard",
  //   CURLOPT_RETURNTRANSFER => true,
  //   CURLOPT_TIMEOUT => 30,
  //   CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  //   CURLOPT_CUSTOMREQUEST => "GET",
  //   CURLOPT_HTTPHEADER => array(
  //     "cache-control: no-cache",
  //     "authorization: Bearer ".$result->access_token,
  //   )));

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.yelp.com/v3/businesses/".$gfmv_yelp."/reviews",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "cache-control: no-cache",
      "authorization: Bearer ".$result->access_token,
    )));

  $response = curl_exec($curl);
  $err = curl_error($curl);

  // FACEBOOK
  $gfmv_facebook = "marthasvineyardtours"

  curl_close($curl);

  $response = json_decode($response, true); //because of true, it's in an array
  var_dump($response);
?>