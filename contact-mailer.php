<?php
  require __DIR__ . '/vendor/autoload.php';
  date_default_timezone_set('EST');

  // echo json_encode($_POST);

  // Subject
  $subject = $_POST['firstname'] . ' would like to book a tour!';

  // Message
  $tourlength = $_POST['tourlength'] == 'twohour' ? '2-hour' : '4-hour';
  $guests = (int)$_POST['guests'] > 1 ? ['We\'d', 'There are ' . $_POST['guests'] . ' of us and we\'re', 'us'] : ['I\'d', 'It\'s just me and I\'m', 'me'];
  $pickup = $_POST['address'] . ' in ' . $_POST['town'];

  $message = 'Hi Craig!

' . $guests[0] . ' like to book a ' . $tourlength . ' tour of Martha\'s Vineyard with you! You can reach me by phone at ' . $_POST['phone'] . '.

' . $guests[1] . ' on the Vineyard ' . $_POST['staylength'] . '.  ' . $guests[0] . ' love it if you could pick ' . $guests[2] . ' up from ' . $pickup .'.

See you soon!

~' . $_POST['firstname'];

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
  $mail->setFrom($_POST['email'], $_POST['firstname'] . ' ' . $_POST['lastname']);
  $mail->addAddress('hello@toursmv.com', 'Craig MacCormack');
  // $mail->addAddress('david@artlyticalmedia.com', 'David Rhoderick');
  $mail->addReplyTo($_POST['email'], $_POST['firstname'] . ' ' . $_POST['lastname']);
  $mail->isHTML(false);
  $mail->Subject = $subject;
  $mail->Body = $message;

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
?>