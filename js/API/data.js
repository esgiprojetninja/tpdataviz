import $ from "jquery";
$.ajaxSetup({ cache: false });

const baseUrl = "";

const failed = err => {
    console.error("fuuuuuu", err);
}

/***************************************
  QUESTION 1 : PIE CHART : Visite par marque
****************************************/
export const get1 = callback => {
    return $.ajax({
        method: "GET",
        url: baseUrl+"liste_amis_user.php?user=5"
    }).done(data => {
        callback($.parseJSON(data.trim()));
    }).fail(failed);
};

export const get2 = callback => {
    return $.ajax({
        method: "GET",
        url: baseUrl+"average_note.php?user=22"
    }).done(data => {
        callback($.parseJSON(data.trim()));
    }).fail(failed)
};

export const get3 = callback => {
    // return $.ajax({
    //     method: "GET",
    //     url: baseUrl+"average_note.php?user=22"
    // }).done(data => {
    //     callback($.parseJSON(data.trim()));
    // }).fail(failed)
};

export const get6 = callback => {
    return $.ajax({
        method: "GET",
        url: "liste_amis_user.php?user=5"
    }).done(data => {
        callback($.parseJSON(data.trim()))
    }).fail(failed);
};

export const get7 = callback => {
    return $.ajax({
        method: "GET",
        url: ""
    }).done(data => {
        callback($.parseJSON(data.trim()))
    }).fail(failed);
};
