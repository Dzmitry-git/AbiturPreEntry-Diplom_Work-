<?php

 	include 'db.php';
	$pdo = Connect();
	
	if (isset($_GET["Id"])) {
		try {
		    $data = $pdo->query('UPDATE Регистрация Set Телефон = null, НомерПаспорта = null  where Код = '.$_GET['Id']);
		    echo json_encode(array('success' => True));
		} 
		catch (PDOException $e) {
		    echo json_encode(array('success' => False));
		    die();
		}
	}	

?>