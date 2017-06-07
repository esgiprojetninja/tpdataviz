import Highcharts from "highcharts";
import {get3} from "../API/data";

/***************************************
  QUESTION 3
****************************************/
const question3 = () => {
    get3( data => {
        let toFriends = 0;
        let notToFriends = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i][2] != 0) {
                toFriends++;
            } else {
                notToFriends++;
            }
        }
        const result = (nbMessages, dataLength) => {
            if (nbMessages === 0) {
                return 0;
            }
            return (dataLength / nbMessages) * 100;
        }
        const series = [{
            name: "Messages",
            colorByPoint: true,
            data: [{
                name: "Amis",
                y: result(toFriends, data.length)
            }, {
                name: "Non amis",
                y: result(notToFriends, data.length)
            }]
        }]
        Highcharts.chart('chart3', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Répartition des messages'
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
export default question3;
