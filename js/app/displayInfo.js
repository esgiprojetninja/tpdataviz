import $ from "jquery";
import {getInfo} from "../API/data";

const displayInfo = (id) => {
    console.log(id);
    getInfo(id, (data) => {
        console.log(data);
        console.log($("#username"));
        $("#username")[0].innerHTML = data[0][1];
        $("#userimg").attr("src", "img/avatar"+data[0][4]+".png");
    });
};

export default displayInfo;
