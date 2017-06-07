<?php
	// Le tableau de résultat
	$result_request = array();

	/*
		On teste si le paramètre GET existe
		0 -> tous les utilisateurs
		id_unique -> un seul utilisateur
		plusieurs id séparés par des virgules -> plusieurs utilisateurs
	*/
	if(isset($_GET['user'])) {
		// Connexion à la BDD
		include("./connexion_bdd.php");

		$user = $_GET['user'];

    $query = "select * from messages as m left join relations as r on (r.user1=3 and m.destinataire=r.user2) where emetteur=3;";


		$result = mysqli_query($conn, $query);

		while ($row = mysqli_fetch_array($result)) {
			$result_request[] = array(intval($row[0]), intval($row[1]), intval($row[2]));
		}

		mysqli_free_result($result);

		// Déconnexion de la BDD
		include("./deconnexion_bdd.php");
	}

	// Renvoyer le résultat au javascript
	echo json_encode($result_request);

?>
