<?php 

	function Connect()
	{
		include 'config.php';

		try {
	    	$pdo = new PDO("sqlsrv:Server=DESKTOP-8235SEQ;Database=AbiturPreEntry", $db_login, $db_password);
			$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	        return $pdo;
		} 
		catch (PDOException $e) {
			return false;
		}
	}
?>