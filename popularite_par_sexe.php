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

    $query = "SELECT n.note, SUM(CASE WHEN u.sexe = 0 THEN 1 ELSE 0 END), SUM(CASE WHEN u.sexe = 1 THEN 1 ELSE 0 END)
              FROM notations AS n
              JOIN utilisateurs AS u
              ON (u.id=n.noteur)
              WHERE n.photo=".$user."
              GROUP BY n.note;";


		$result = mysqli_query($conn, $query);

		while ($row = mysqli_fetch_array($result)) {
			$result_request[] = [
        "note" => intval($row[0]),
        "nbGirlVote" => intval($row[1]),
        "nbBoyVote" => intval($row[2])
      ];
		}

		mysqli_free_result($result);

		// Déconnexion de la BDD
		include("./deconnexion_bdd.php");
	}

	// Renvoyer le résultat au javascript
	echo json_encode($result_request);

?>
