<?php  

	include 'db.php';
	$pdo = Connect();
	if (isset($_GET["typeId"]) && isset($_GET["faculId"])){
		try {
		    $data = $pdo->query("exec prPreEntry ".$_GET['typeId'].", ".$_GET['faculId'].", '".$_GET['date']."'")->fetchAll(PDO::FETCH_ASSOC);
			$result = $data;
		} 
		catch (PDOException $e) {
		    print "Error!";
		    die();
		}
	}
	
	echo json_encode($result);		
?>