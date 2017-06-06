import question1 from "./questions/q1";

window.addEventListener("load", function load(event){
    window.removeEventListener("load", load, false);
  	question1();
}, false);
