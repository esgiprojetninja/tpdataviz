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
    return $.ajax({
        method: "GET",
        url: baseUrl+"percentage_messages_friends.php?user=3"
    }).done(data => {
        callback($.parseJSON(data.trim()));
    }).fail(failed)
};

export const get6 = callback => {
    return $.ajax({
        method: "GET",
        url: baseUrl+"liste_amis_par_tranche_age.php?user=5"
    }).done(data => {
        callback($.parseJSON(data.trim()))
    }).fail(failed);
};

export const get7 = callback => {
    return $.ajax({
        method: "GET",
        url: baseUrl+"popularite_par_tranche_age_sexe.php?user=57"
    }).done(data => {
        callback($.parseJSON(data.trim()))
    }).fail(failed);
};

export const getBonus = callback => {
    return $.ajax({
        method: "GET",
        url: baseUrl+"amis_plus_actifs.php?user=5"
    }).done(data => {
        callback($.parseJSON(data.trim()))
    }).fail(failed);
};
