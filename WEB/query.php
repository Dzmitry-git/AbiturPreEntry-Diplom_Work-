<?php
	include 'db.php';
	$pdo = Connect();

	if ($pdo == false)
	{
		echo json_encode(array("success" => false));
		return;
	}

	if (isset($_GET["RadioTypeOfStady"]) && ($_GET["RadioTypeOfStady"]) == 1){
		$sth = $pdo->prepare("
			SELECT IdFacult Id, LEFT(FACNAMEL,1) + LOWER(substring(FACNAMEL,2,99)) Name 
			FROM Facults
			WHERE FacNameS not LIKE 'заоч%'
		");
	}
	
	if (isset($_GET["RadioTypeOfStady"]) && ($_GET["RadioTypeOfStady"]) == 2){
		$sth = $pdo->prepare("
			SELECT min(P.Id) Id, dbo.SpecGroupName(КонкурсНомерГруппы) Name 
			from ПланПриема P
			where P.ObuchForma = 2 and P.КонкурсНомерГруппы <> 0 and P.Id in(Select IdPlanPriema from Регистрация)
			group by КонкурсНомерГруппы
			union all
			select min(P.Id) Id, S.SPCNAMEL
			from ПланПриема P, SPECIALS S
			where P.IdSpecial = S.IdSpecial and P.ObuchForma = 2 and P.КонкурсНомерГруппы = 0 and P.Id in(Select IdPlanPriema from Регистрация)
			group by S.SPCNAMEL
			order by 2
		");
	}	
	$sth->execute();
	$result = $sth->fetchALL(PDO::FETCH_ASSOC);
	echo json_encode($result);	
?>
