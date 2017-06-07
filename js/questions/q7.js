import Highcharts from "highcharts";
import {get7} from "../API/data";

const config = {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: 'Popularité auprès des amis par tranches d\'âge et par sexe'
    },
    xAxis: {
        min: 0,
        max: 100,
        title: {
            enabled: true,
            text: 'Âge (années)'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
    },
    yAxis: {
        max: 5,
        min: 0,
        title: {
            text: 'Note (sur 5)'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 100,
        y: 70,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
        borderWidth: 1
    },
    plotOptions: {
        scatter: {
            marker: {
                radius: 5,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x} ans, {point.y}/5'
            }
        }
    },
    series: []
}

/***************************************
  QUESTION 7 : nuage de points
   Montre la répartition de votre popularité (notation de la photo) auprès de vos amis par tranche d’âge
      3 points, +2 point bonus si vous ajoutez un filtre pour le sexe sur votre graphique
      OU  +1 point bonus si vous mettez un code couleur pour le sexe
****************************************/
const question7 = (id) => {
    document.getElementById('chart7').innerHTML = "";
    config.series = [];
    get7(id, data => {
        config.series.push({
            name: "Femmes",
            color: "rgba(223, 83, 83, .5)",
            data: data.femmes.map(obj => { return [parseInt(obj.age), parseInt(obj.note)] })
        });
        config.series.push({
            name: "Hommes",
            color: "rgba(119, 152, 191, .5)",
            data: data.hommes.map(obj => { return [parseInt(obj.age), parseInt(obj.note)] })
        });
        Highcharts.chart("chart7", config);
    });
};
export default question7;
