<?php
	// Le tableau de résultat
	$result_request = [
      'femmes' => [],
      'hommes' => []
  ];

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

		$query = "SELECT pseudo, sexe, age, note
    	FROM relations r
      INNER JOIN utilisateurs u
      ON r.user2 = u.id
      INNER JOIN notations n
      ON n.noteur = r.user2
    ";
		if($user_input != 0)
			$query .= " AND n.photo = ".$user_input." WHERE user1 = ".$user_input." GROUP BY user2 ORDER BY age ASC;";
		$result = mysqli_query($conn, $query);

		while ($row = mysqli_fetch_array($result)) {
        if ( (int) $row["sexe"] === 1 )
            $result_request["hommes"][] = $row;
        else
            $result_request["femmes"][] = $row;
		}

		mysqli_free_result($result);

		// Déconnexion de la BDD
		include("./deconnexion_bdd.php");

    // $result_request["request"] = $query;
	}

	echo json_encode($result_request);

?>
