import question1 from "./questions/q1";
import question2 from "./questions/q2";
import question6 from "./questions/q6";
import question7 from "./questions/q7";
import questionBonus from "./questions/qbonus";


window.addEventListener("load", function load(event){
    window.removeEventListener("load", load, false);
  	question1();
  	question2();
  	question6();
  	question7();
  	questionBonus();
}, false);
