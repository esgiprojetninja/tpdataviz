import Highcharts from "highcharts";
import {get3} from "../API/data";

/***************************************
  QUESTION 2 : PIE CHART : Visite par marque
****************************************/
const question3 = () => {
    get3( data => {
        // Highcharts.chart("chart2", {
        //     title: "Evolution de la notation",
        //     yAxis: {
        //         title: "Note"
        //     },
        //     series: [{
        //         name: "User 56",
        //         data: data.map((d) => Number(d[1]))
        //     }]
        // });
    });
};
export default question2;
