import $ from "jquery";
import {getInfo} from "../API/data";

const displayInfo = (id) => {
    getInfo(id, (data) => {
        $("#username")[0].innerHTML = data[0][1];
        //$("#userimg").attr("src", "img/avatar"+data[0][4]+".png");
        $("#userimg").attr("src", data[0][4]);
    });
};

export default displayInfo;
