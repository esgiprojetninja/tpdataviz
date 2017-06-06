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
        // var plot1 = $.jqplot("chart1", [cleanedData], {
        //     title: "Nombre d'amis au fil du mois",
        //     axes: {
        //         xaxis: {
        //             renderer: $.jqplot.DateAxisRenderer,
        //
        //         },
        //         yaxis: {
        //             tickOptions: {
        //                 formatString: '%.0f'
        //             },
        //             min: 0
        //         }
        //     },
        //     series:[{lineWidth:4, markerOptions:{style:'square'}}]
        // });
        var line1=[['2008-06-30 8:00AM',4], ['2008-7-14 8:00AM',6.5], ['2008-7-28 8:00AM',5.7], ['2008-8-11 8:00AM',9], ['2008-8-25 8:00AM',8.2]];
  var plot2 = $.jqplot('chart1', [line1], {
      title:'Customized Date Axis',
      axes:{
        xaxis:{
          renderer:$.jqplot.DateAxisRenderer,
          tickOptions:{formatString:'%b %#d, %#I %p'},
          min:'June 16, 2008 8:00AM',
          // tickInterval:'2 weeks'
        },
        yaxis: {
            min: 0
        }
      },
      series:[{lineWidth:4, markerOptions:{style:'square'}}]
  });
		console.log(data);
        console.log(cleanedData);
	});
}, false);
