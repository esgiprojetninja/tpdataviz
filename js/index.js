import $ from "jquery";
import Highcharts from "highcharts";

$(function(){
  	// Pas de cache sur les requête IMPORTANT !
  	$.ajaxSetup({ cache: false });

  	/***
  		On définit ici les fonctions de base qui vont nous servir à la récupération des données
  		Je ne définis que le GET ici, mais il est possible d'utiliser POST pour récupérer ses données (on le verra dans un prochain TP)
  	****/
  	function getRequest(url, callback) {
		$.get(url, function(data) {
			data = $.parseJSON(data.trim());
			callback(data);
		});
  	}

  	/***************************************
  		QUESTION 1 : PIE CHART : Visite par marque
  	****************************************/
  	getRequest("average_note.php?user=22", function(data) {
        Highcharts.chart("chart2", {
            title: "Evolution de la notation",
            yAxis: {
                title: "Note"
            },
            series: [{
                name: "User 56",
                data: data.map((d) => Number(d[1]))
            }]
        });
  	});

    /***************************************
  		QUESTION 3
  	****************************************/
 //  	getRequest("average_note.php?user=22", function(data) {
    //     Highcharts.chart("chart3", {
    //         title: "Evolution de la notation",
    //         yAxis: {
    //             title: "Note"
    //         },
    //         series: [{
    //             name: "User 56",
    //             data: data.map((d) => Number(d[1]))
    //         }]
    //     });
 //  	});
});
