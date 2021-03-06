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

		$query = "SELECT photo, AVG(note)
				FROM notations";
		if($user != 0) {
			$query = $query." WHERE photo IN (".$user.")";
		}
    $query = $query . " GROUP BY photo, date ORDER BY date ASC";

		$result = mysqli_query($conn, $query);

		while ($row = mysqli_fetch_array($result)) {
			$result_request[] = array(intval($row[0]), $row[1]);
		}

		mysqli_free_result($result);

		// Déconnexion de la BDD
		include("./deconnexion_bdd.php");
	}

	// Renvoyer le résultat au javascript
	echo json_encode($result_request);

?>
