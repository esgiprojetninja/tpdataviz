var relations;
import $ from "jquery";

window.addEventListener("load", function load(event){
    window.removeEventListener("load", load, false);
	// Pas de cache sur les requête IMPORTANT !
	$.ajaxSetup({ cache: false });

	/***
		On définit ici les fonctions de base qui vont nous servir à la récupération des données
		Je ne définis que le GET ici, mais il est possible d'utiliser POST pour récupérer ses données (on le verra dans un prochain TP)
	****/
	function getRequest(url, callback) {
		$.get(url, function(data) {
			data = $.parseJSON(data);
			callback(data);
		});
	}

	/***************************************
		QUESTION 1 : PIE CHART : Visite par marque
	****************************************/
	getRequest("liste_amis_user.php?user=5", function(data) {
        relations = data;
        cleanedData = data.map((item, index) => [
            item[2],
            index + 1
        ]);
        var plot1 = $.jqplot("chart1", [cleanedData], {
            title: "Nombre d'amis au fil du mois",
            axes: {
                xaxis: {
                    renderer: $.jqplot.DateAxisRenderer
                }
            },
            series:[{lineWidth:4, markerOptions:{style:'square'}}]
        })
		console.log(data);
        console.log(cleanedData);
	});
}, false);
