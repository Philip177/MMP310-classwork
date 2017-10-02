 var submit = document.getElementById("submit");
submit.onclick = function(event) {
    var count = 0;
    var Mario = document.getElementById("Question1");
    var answer = "Mario";
    if (Mario.value == answer) {
        count++;
    }

var Link = document.getElementById("Question2");
     var answer = "Link";
    if (Link.value == answer) {
        count++;
    }
var Pikachu = document.getElementById("Question3");
     var answer = "Pikachu";
    if (Pikachu.value == answer) {
        count++;
    }
var Samus = document.getElementById("Question4");
     var answer = "Samus";
    if (Samus.value == answer) {
        count++;
    }
    var message = document.createElement("p");
    message.innerText = "Congrats you know your nintendo star players. You got "+count+" out of 4.";
    
document.body.appendChild(message);
}
