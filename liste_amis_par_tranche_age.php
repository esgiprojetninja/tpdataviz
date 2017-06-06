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

		$user_input = (int) $_GET['user'];

		$query = "SELECT DISTINCT r.user2 as id_u2, sexe, age
    	FROM relations r
      INNER JOIN utilisateurs u
      ON r.user2 = u.id
    ";
		if($user_input != 0) {
			$query = $query." WHERE user1 = ".$user_input.";";
		}

		$result = mysqli_query($conn, $query);

		while ($row = mysqli_fetch_array($result)) {
			$result_request[] = array(intval($row[0]), intval($row[1]), $row[2]);
		}

		mysqli_free_result($result);

		// Déconnexion de la BDD
		include("./deconnexion_bdd.php");
	}

	// Renvoyer le résultat au javascript
	echo json_encode($result_request);
/*
SELECT DISTINCT r.user2 as id_u2, sexe, age
	FROM relations r
  INNER JOIN utilisateurs u
  ON r.user2 = u.id
  WHERE user1 = 5;


  0 = F
  1 = M
*/
?>
