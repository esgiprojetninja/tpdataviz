import $ from "jquery";
$.ajaxSetup({ cache: false });

const baseUrl = "";

/***************************************
  QUESTION 1 : PIE CHART : Visite par marque
****************************************/
export const get1 = callback => {
    return $.ajax({
        method: "GET",
        url: baseUrl+"liste_amis_user.php?user=5"
    }).done(data => {
        callback($.parseJSON(data.trim()));
    });
};
