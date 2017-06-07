import Highcharts from "highcharts";
import {get4} from "../API/data";

/***************************************
  QUESTION 4
****************************************/
const question4 = (id) => {
    get4(id, data => {
        let girls = 0;
        let boys = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i][0] === 0) {
                girls++;
            } else {
                boys++;
            }
        }
        const result = (nbPpl, dataLength) => {
            if (nbPpl === 0) {
                return 0;
            }
            return (dataLength / nbPpl) * 100;
        }
        const series = [{
            name: "Répartition Filles/Garçons",
            colorByPoint: true,
            data: [{
                name: "Filles",
                y: result(girls, data.length)
            }, {
                name: "Garçons",
                y: result(boys, data.length)
            }]
        }]
        Highcharts.chart('chart4', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Répartition du sexe des amis'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                }
            },
            series: series
        });
    });
};
export default question4;
