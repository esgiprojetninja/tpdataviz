<?php
	// Le tableau de résultat
	$result_request = [
			[
					"nom" => "18-21ans",
					"hommes" => [],
					"femmes" => [],
					"total" => 0
			],
			[
					"nom" => "22-25ans",
					"hommes" => [],
					"femmes" => [],
					"total" => 0
			],
			[
					"nom" => "26-29ans",
					"hommes" => [],
					"femmes" => [],
					"total" => 0
			]
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

		$query = "SELECT DISTINCT r.user2 as id_user, pseudo, sexe, age
    	FROM relations r
      INNER JOIN utilisateurs u
      ON r.user2 = u.id
    ";
		if($user_input != 0) {
			$query = $query." WHERE user1 = ".$user_input.";";
		}

		$result = mysqli_query($conn, $query);

		while ($row = mysqli_fetch_array($result)) {
				$age = (int) $row["age"];
				$sexe = (int) $row["sexe"];
				$num_tranche = 2;
				$genre_a_incrementer = "femmes";
				if ( $age <= 21 )
						$num_tranche = 0;
				else if ( $age <= 25 )
						$num_tranche = 1;
				if ( $sexe === 1 )
						$genre_a_incrementer = "hommes";
				$result_request[$num_tranche]["total"] += 1;
				$result_request[$num_tranche][$genre_a_incrementer][] = [
						"age" => $age,
						"pseudo" => $row["pseudo"]
				];
		}

		mysqli_free_result($result);

		// Déconnexion de la BDD
		include("./deconnexion_bdd.php");


	}

	// Renvoyer le résultat au javascript
	echo json_encode($result_request);

?>
