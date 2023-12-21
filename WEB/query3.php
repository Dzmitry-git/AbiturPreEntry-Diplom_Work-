<?php
  include 'config.php';

  // КОГДА ПОЯВИТСЯ ALPHA_NAME
  // $send_sms = 'https://app.sms.by/api/v1/sendQuickSMS?token='.$token.'&message=%D0%92%D0%B0%D1%88%20%D0%BA%D0%BE%D0%B4%3A%20'.$kod.'&phone='.$phone.'&alphaname_id=1';

  $phone = $_GET['phone'];
  $kod = mt_rand(100000, 999999);

  $send_sms = 'https://app.sms.by/api/v1/sendQuickSMS?token='.$token.'&message=%D0%92%D0%B0%D1%88%20%D0%BA%D0%BE%D0%B4%3A%20'.$kod.'&phone='.$phone;
  
  // $result = json_decode(@file_get_contents($send_sms), true);

  // if (isset($result['error']) || $result == Null)
  //   echo json_encode(array('success' => False));
  // else {  
  //   echo json_encode(array('success' => True, 'code' =>$kod));
  // }

  echo json_encode(array('success' => True, 'code' =>$kod));