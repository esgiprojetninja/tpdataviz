import Highcharts from "highcharts";
import {get6} from "../API/data";

/***************************************
  QUESTION 6: JQPlot Group Bar Chart
   Répartition des amis par tranche d’âge (18-21, 22-25, 26-29)
   par sexe. (4 points).
   Pour chaque tranche d'age on veut la répartition par sexe
****************************************/
const question6 = () => {
    get6( data => {
        console.log("mother fucker i'm ill", data);
        Highcharts.chart("chart6", {
            title: "Répartition des amis par tranches d'âge & sexe",
            yAxis: {
                title: "Nombre d'amis"
            }
            // series: [{
            //     // name: "User 56",
            //     // data: data.map((d) => Number(d[1]))
            // }]
        });
    });
};
export default question6;
