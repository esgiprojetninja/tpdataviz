<!DOCTYPE html>
<html>
	<head>
		<title>Data Vizualisation - TP1</title>
		<!-- Inclusion CSS (librairie + perso) -->
		<link rel="stylesheet" type="text/css" href="node_modules/jqplot/jquery.jqplot.min.css">
		<link rel="stylesheet" type="text/css" href="dataviz.css">

	</head>
	<body>
		<?php include ('header.php'); ?>
		<div id="content">
      <div id="chart1"></div>
		</div>
		<?php include ('footer.php'); ?>
    <!-- Inclusion JS (librairie + scripts de création de graph) -->
    <script type="text/javascript" src="jquery.js"></script>
    <script type="text/javascript" src="node_modules/jqplot/jquery.jqplot.min.js"></script>

    <script type="text/javascript" src="dataviz.js"></script>
	</body>
</html>
