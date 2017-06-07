<?php
	// Le tableau de résultat
	$result_request = [];
	$response = [];

	function getNbMessages($conn, $id_user){
			$msg_query = "SELECT COUNT(emetteur) as nb_msg FROM messages WHERE emetteur = ".$id_user;
			$res = mysqli_query($conn, $msg_query);
			return ( $row = mysqli_fetch_array($res) ) ? (int) $row["nb_msg"] : 0;
	}

	function getNbNotations($conn, $id_user){
			$msg_query = "SELECT COUNT(noteur) as nb_noteur FROM notations WHERE noteur = ".$id_user;
			$res = mysqli_query($conn, $msg_query);
			return ( $row = mysqli_fetch_array($res) ) ? (int) $row["nb_noteur"] : 0;
	}

	function getNbStatus($conn, $id_user){
			$msg_query = "SELECT COUNT(user) as nb_status FROM statuts WHERE user = ".$id_user;
			$res = mysqli_query($conn, $msg_query);
			return ( $row = mysqli_fetch_array($res) ) ? (int) $row["nb_status"] : 0;
	}


	if(isset($_GET['user'])) {
		// Connexion à la BDD
		include("./connexion_bdd.php");

		$user_input = (int) $_GET['user'];

		if ( isset($_POST['csvData']) ) {
				$file_name = 'data.'.$user_input.'.csv';
				$fp = fopen($file_name, 'w');
				fwrite($fp, $_POST['csvData']);
				fclose($fp);
				$response["file_path"] = $file_name;
		} else {



				$query = "SELECT user2 as id, pseudo, sexe, age, photo
		    	FROM relations r
		      INNER JOIN utilisateurs u
		      ON r.user2 = u.id
		    ";
				if($user_input != 0) {
					$query = $query." WHERE user1 = ".$user_input." GROUP BY user2;";
				}

				$result = mysqli_query($conn, $query);

				while ($row = mysqli_fetch_array($result)) {
						$result_request[] = $row;
				}

				mysqli_free_result($result);

				foreach ($result_request as $row) {
						$response[] = [
								"pseudo" => $row["pseudo"],
								"sexe" => $row["sexe"],
								"age" => (int) $row["age"],
							  // @TODO: find photo existence
								"photo" => $row["photo"],
								"popularite" => getNbMessages($conn, (int) $row["id"]) + getNbNotations($conn, (int) $row["id"]) + getNbStatus($conn, (int) $row["id"])
						];
				}
		}
		// Déconnexion de la BDD
		include("./deconnexion_bdd.php");


	}

	// Renvoyer le résultat au javascript
	echo json_encode($response);

?>
