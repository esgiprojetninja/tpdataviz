import Highcharts from "highcharts";
import {get5} from "../API/data";

/***************************************
  QUESTION 5
****************************************/
const question5 = () => {
    get5( data => {
        console.log(data);
        // const series = [{
        //     name: "Po",
        //     colorByPoint: true,
        //     data: [{
        //         name: "Filles",
        //         y: result(girls, data.length)
        //     }, {
        //         name: "Garçons",
        //         y: result(boys, data.length)
        //     }]
        // }]
        const series = [{
            name: "Girls",
            data: [0, 0, 0, 0, 0]
        }, {
            name: "Boys",
            data: [0, 0, 0, 0, 0]
        }];
        data.forEach(item => {
            series[0].data[item.note - 1] = item.nbGirlVote;
            series[1].data[item.note - 1] = item.nbBoyVote;
        });
        console.log(series);
        Highcharts.chart("chart5", {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Monthly Average Rainfall'
            },
            subtitle: {
                text: 'Source: WorldClimate.com'
            },
            xAxis: {
                categories: [
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Rainfall (mm)'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: series
        });
    });
};
export default question5;
