<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
  <body>
    
  <?php
    
    include 'config.php';

    $res = file_get_contents('https://app.sms.by/api/v1/getBalance?token='.$token);
    list(, , , , , , , , , , , , , $sms_balance, , , , $viber_balance) = explode('"', $res);
    echo("
          SMS баланс: ${sms_balance} BYN<br/>
          Viber баланс: ${viber_balance} BYN
        ");
  ?>


  </body>
</html>