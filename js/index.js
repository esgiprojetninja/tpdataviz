import $ from "jquery";
import displayInfo from "./app/displayInfo";
import question1 from "./questions/q1";
import question2 from "./questions/q2";
import question3 from "./questions/q3";
import question4 from "./questions/q4";
import question5 from "./questions/q5";
import question6 from "./questions/q6";
import question7 from "./questions/q7";
import questionBonus from "./questions/qbonus";


window.addEventListener("load", function load(event){
    window.removeEventListener("load", load, false);
    $("#choose-user").on("submit", (ev) => {
        ev.preventDefault();
        const val = $(ev.target).find("#userid").val();
        console.log(val);
        displayInfo(val);
        question1(val);
        question2(val);
        question3(val);
        question4(val);
        question5(val);
        question6(val);
        question7(val);
        questionBonus(val);
    });
}, false);
