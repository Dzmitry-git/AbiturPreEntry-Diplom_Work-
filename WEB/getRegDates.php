<?php  

	include 'db.php';
	$pdo = Connect();

	try {
		$data = $pdo->query(
		"
			SELECT min(Дата) DateBeg, max(Дата) DateEnd
			FROM Регистрация
			where Дата > GETDATE()
			Having min(Дата) IS NOT NULL
		")->fetchAll(PDO::FETCH_ASSOC);

		echo json_encode(array('success' => true, 'data' => $data));

	} 
	catch (PDOException $e) {
		echo json_encode(array('success' => false));
		die();
	}
		
	
?>