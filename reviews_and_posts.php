<?php
require __DIR__ . '/vendor/autoload.php';
date_default_timezone_set('EST');

// YELP REVIEWS
$yelp_reviews = array();

$options = array(
  'apiKey' => 'NUQtQL7xrb6AWHu7ie1rO3HR29cRYazMRsGpL-vY9GiHr48QjMeTRHt1pV8VxeqrsHxpqrJCfUv7mj_VhJsbHPwJjYtHuIUylv0b5VK8ENw7d_LZWq9YxZh3mC1YWXYx'
);

$client = \Stevenmaguire\Yelp\ClientFactory::makeWith(
  $options,
  \Stevenmaguire\Yelp\Version::THREE
);

$parameters = [
  'locale' => 'en_US',
];

$reviews = $client->getBusinessReviews('greetings-from-marthas-vineyard-tours-oak-bluffs', $parameters);

// $responseBody = $e->getResponseBody(); // string from Http request
// $responseBodyObject = json_decode($responseBody);

// var_dump($responseBodyObject);

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

// RETURN VALUE
$output = array(
  'yelp_reviews' => $yelp_reviews
);
echo json_encode($output);

// Error notifier
function sendErrorNotification ($subject, $error) {
  // Subject
  // $subject = ;

  // Message

  $message = 'toursmv.com is experiencing an error:\n\r' . $subject . '\n\r' . $error;

  // PHPMailer setup
  $mail = new PHPMailer(true);
  $mail->SMTPDebug = 3;
  $mail->isSMTP();
  $mail->Host = 'toursmv.com';
  $mail->SMTPAuth = true;
  $mail->CharSet ='UTF-8';
  $mail->Username = 'contact@toursmv.com';
  $mail->Password = 'GFMV5thebest!';
  $mail->SMTPSecure = 'tls';
  $mail->Port = 25;
  $mail->setFrom('contact@toursmv.com', 'Error Reporter');
  $mail->addAddress('david@artlyticalmedia.com', 'David Rhoderick');
  $mail->addReplyTo('contact@toursmv.com', 'Error Reporter');
  $mail->isHTML(false);
  $mail->Subject = $subject;
  $mail->Body = $message;

  // DEBUG
  // echo json_encode(array(
  //     'host' => $mail->Host,
  //     'username' => $mail->Username,
  //     'password' => $mail->Password,
  //     'port' => $mail->Port,
  //     'subject' => $mail->Subject,
  //     'message' => $mail->Body,
  //     'email' => $_POST['email'],
  //     'name' => $_POST['firstname'] . ' ' . $_POST['lastname'],
  //     'pickup' => $pickup,
  //     'guests' => $guests
  //   ));

  if(!$mail->send()) {
    // echo 'Message could not be sent.';
    echo json_encode(array(
      'status' => 303,
      'message' => 'Mailer Error: ' . $mail->ErrorInfo));
  } else {
    echo json_encode(array(
      'status' => 200,
      'message' => 'Message has been sent'));
  }
}
?>