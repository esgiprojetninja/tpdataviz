<!DOCTYPE html>
<html>
	<head>
		<title>Data Vizualisation - TP1</title>
		<!-- Inclusion CSS (librairie + perso) -->
		<link rel="stylesheet" type="text/css" href="dataviz.css">

		<script type="text/javascript" src="dist/js/index.js"></script>
	</head>
	<body>
		<?php include ('header.php'); ?>
    <div class="panel panel-default">
      <div class="panel-body">
        <div class="row">
          <div class="col-sm-6">
            <form id="choose-user">
              <div class="form-group">
                <label for="userid">Choose an id:</label>
                <input type="number" name="userid" id="userid" class="form-control">
              </div>
              <button class="btn btn-success" type="submit">ok</button>
            </form>
          </div>
          <div class="col-sm-6">
            <h3 id="username">Choose a user</h3>
            <img id="userimg" src="img/default-avatar.png" alt="profile pic" class="img-responsive">
          </div>
        </div>
      </div>
    </div>
		<div id="content">
      <div id="chart1"></div>
      <div id="chart2"></div>
      <div id="chart3" style="min-width: 310px; height: 400px; max-width: 600px; margin: 0 auto"></div>
      <div id="chart4"></div>
      <div id="chart5"></div>
      <div id="chart6"></div>
      <div id="chart7"></div>
		</div>
		<?php include ('footer.php'); ?>
	</body>
</html>
