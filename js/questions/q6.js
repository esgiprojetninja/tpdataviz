import Highcharts from "highcharts";
import {get6} from "../API/data";

const config = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Amis par tranche d\'âge et sexe'
    },
    // liste des noms des tranches d'âge
    xAxis: {
        categories: []
    },
    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'Nombre d\'amis'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels: {
              enabled: true,
              color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
          }
        }
    },
    series: []
};

/***************************************
  QUESTION 6: JQPlot Group Bar Chart
   Répartition des amis par tranche d’âge (18-21, 22-25, 26-29)
   par sexe. (4 points).
   Pour chaque tranche d'age on veut la répartition par sexe
****************************************/
const question6 = (id) => {
    get6(id, data => {
        config.xAxis.categories = Array.from(data).map( obj => obj.nom );
        config.series = [
            {
                name: "Femmes",
                data: Array.from(data).map( obj => obj.femmes.length )
            },
            {
                name: "Hommes",
                data: Array.from(data).map( obj => obj.hommes.length )
            }
        ];

        Highcharts.chart("chart6", config);
    });
};
export default question6;
