import Highcharts from "highcharts";
import {get1} from "../API/data";

const question1 = (id) => {
    document.getElementById('chart1').innerHTML = "";
    get1(id, data => {
        const relations = data;
        const cleanedData = data.map((item, index) => [
            new Date(item[2]).getTime(),
            index + 1,
        ]).sort( (a,b) => a[0]-b[0] );
        const myChart = Highcharts.chart('chart1', {
            chart: {
                type: 'line'
            },
            title: {
                text: 'Nombre d\'amis au fil du mois'
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            series: [{
                type: 'line',
                data: cleanedData
            }]
        });
    })
};
export default question1;
