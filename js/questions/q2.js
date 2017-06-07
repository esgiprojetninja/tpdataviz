import Highcharts from "highcharts";
import {get2} from "../API/data";

/***************************************
  QUESTION 2 : PIE CHART : Visite par marque
****************************************/
const question2 = (id) => {
    document.getElementById('chart2').innerHTML = "";
    get2(id, data => {
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
};
export default question2;
