<?php  

	include 'db.php';
	$pdo = Connect();

	if (isset($_GET['mail'])) {
		$mail = $_GET['mail'];

		$to = "<".$mail.">"; 

		$subject = "ГГУ - запись"; 

		$message = ' <p>Текст письма</p> </br> <b>1-ая строчка </b> </br><i>2-ая строчка </i> </br>';

		$headers  = "Content-type: text/html; charset=windows-1251 \r\n"; 
		$headers .= "From: От кого письмо <from@example.com>\r\n"; 
		$headers .= "Reply-To: reply-to@example.com\r\n"; 

		if (mail($to, $subject, $message, $headers) ) {
			echo json_encode(array('success' => true));
		}
		else {
			echo json_encode(array('success' => false));
		}
	}
?>