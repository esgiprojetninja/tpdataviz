import question1 from "./questions/q1";
import question2 from "./questions/q2";
import question3 from "./questions/q3";

window.addEventListener("load", function load(event){
    window.removeEventListener("load", load, false);
  	question1();
  	question2();
    question3();
}, false);
