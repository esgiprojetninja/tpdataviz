import $ from "jquery";
$.ajaxSetup({ cache: false });

const baseUrl = "";

const failed = err => {
    console.error("fuuuuuu", err);
}

export const get1 = (id, callback) => {
    return $.ajax({
        method: "GET",
        url: baseUrl+"liste_amis_user.php?user="+id
    }).done(data => {
        callback($.parseJSON(data.trim()));
    }).fail(failed);
};

export const get2 = (id, callback) => {
    return $.ajax({
        method: "GET",
        url: baseUrl+"average_note.php?user="+id
    }).done(data => {
        callback($.parseJSON(data.trim()));
    }).fail(failed)
};

export const get3 = (id, callback) => {
    return $.ajax({
        method: "GET",
        url: baseUrl+"percentage_messages_friends.php?user="+id
    }).done(data => {
        callback($.parseJSON(data.trim()));
    }).fail(failed)
};

export const get4 = (id, callback) => {
    return $.ajax({
        method: "GET",
        url: baseUrl+"pourcentage_sexe.php?user="+id
    }).done(data => {
        callback($.parseJSON(data.trim()));
    }).fail(failed)
};

export const get5 = (id, callback) => {
    return $.ajax({
        method: "GET",
        url: baseUrl+"popularite_par_sexe.php?user="+id
    }).done(data => {
        callback($.parseJSON(data.trim()));
    }).fail(failed)
};

export const get6 = (id, callback) => {
    return $.ajax({
        method: "GET",
        url: baseUrl+"liste_amis_par_tranche_age.php?user="+id
    }).done(data => {
        callback($.parseJSON(data.trim()))
    }).fail(failed);
};

export const get7 = (id, callback) => {
    return $.ajax({
        method: "GET",
        url: baseUrl+"popularite_par_tranche_age_sexe.php?user="+id
    }).done(data => {
        callback($.parseJSON(data.trim()))
    }).fail(failed);
};

export const getBonus = (id, callback) => {
    return $.ajax({
        method: "GET",
        url: baseUrl+"amis_plus_actifs.php?user="+id
    }).done(data => {
        callback($.parseJSON(data.trim()))
    }).fail(failed);
};

export const createDistantFile = (id, csvData, callback) => {
    return $.ajax({
        method: "POST",
        data: {csvData},
        url: baseUrl+"amis_plus_actifs.php?user="+id
    }).done(data => {callback($.parseJSON(data.trim()))})
    .fail(failed);
}

export const getInfo = (id, callback) => {
    console.log(id);
    return $.ajax({
        method: "GET",
        url: baseUrl+"infos_user.php?user="+id
    }).done(data => {
        callback($.parseJSON(data.trim()))
    }).fail(failed);
};
