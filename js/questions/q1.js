import Highcharts from "highcharts";
import {get1} from "../API/data";

const Fuck = () => {
    get1(data => {
        console.log("received res:", data);
        const relations = data;
        const cleanedData = data.map((item, index) => [
            new Date(item[2]).getTime(),
            index + 1,
        ]);
        console.log("cleaned", cleanedData);
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
export default Fuck;
