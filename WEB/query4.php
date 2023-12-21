<?php  

	include 'db.php';
	$pdo = Connect();
	
	if (isset($_GET["id_record"]) && isset($_GET["phone"]) && isset($_GET["pasport_number"])){
		try {
			$phone =  preg_replace('/[^0-9]/', '', $_GET["phone"]);

		    $data = $pdo->query("SET NOCOUNT ON; exec [prSetPreEntry] ".$_GET['id_record'].", '".$phone."', '".$_GET['pasport_number']."'")->fetchAll(PDO::FETCH_ASSOC);
		    echo json_encode(array('success' => True, 'data' => $data), JSON_UNESCAPED_UNICODE);
		} 
		catch (PDOException $e) {
		    echo json_encode(array('success' => False));
		    die();
		}
	}	
?>