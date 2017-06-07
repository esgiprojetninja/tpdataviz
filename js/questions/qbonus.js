import {getBonus, createDistantFile} from "../API/data";
import converter from "json-2-csv";
import * as d3 from "d3";
import $ from "jquery";

/***************************************
  QUESTION Bonus : Tableau
      Classement des amis par activité
      (somme du nombre de statuts, messages et notations effectuées)
****************************************/
const questionBonus = () => {
    getBonus( data => {
        const sortedData = data.sort( (a,b) => b.popularite-a.popularite )
        converter.json2csv(sortedData, (err, _csv) => {
            if ( err ) {
                console.error(err);
                return;
            }
            createDistantFile(_csv, response => {

                const rows = []

                d3.csv(response.file_path, (error, csv) => {
                    if ( error ) {
                        console.warn("d3 csv fuckup: ", error);
                    }
                    csv.forEach( row => {
                        row.mu = parseFloat(row.mu).toFixed(1);
                        row.sigma = parseFloat(row.sigma).toFixed(1);

                        var res = parseFloat(row.result);
                        if (res < .5) {
                          row.result = "loss";
                        } else if (res > .5) {
                          row.result = "win";
                        } else {
                          row.result = "draw";
                        }

                        rows.push(row);
                    });
                    const table_title = document.createElement("h2");
                    table_title.innerHTML = "Classement des amis par activité";
                    table_title.className = "text text-success text-center";
                    $("#chartBonus")[0].appendChild(table_title);
                    const table = d3.select("#chartBonus").append("table");
                    table._groups[0][0].className = "table table-striped table-responsive table-hover";
                    const thead = table.append("thead");
                    const tbody = table.append("tbody");

                    thead.append("th").text("Pseudo");
                    thead.append("th").text("Âge");
                    thead.append("th").text("Photo");
                    thead.append("th").text("Popularité");

                    function createImage(path){
                        const img = document.createElement('img');
                        img.src = path;
                        img.style.height = "40px";
                        img.style.width = "auto";
                        return img;
                    }

                    const tr = tbody.selectAll("tr")
                        .data(rows)
                        .enter().append("tr");

                    const td = tr.selectAll("td")
                          .data(function(d) { return [d.pseudo, d.age, d.photo, d.popularite]; })
                        .enter().append("td")
                          .text(function(d) { return d; });

                    $("#chartBonus tbody tr td:nth-child(3)").each( function(){
                        const path = $(this).text();
                        const img = createImage(path);
                        $(this).empty();
                        $(this)[0].appendChild(img);
                    });

                });
            })
        });
    });
};
export default questionBonus;
