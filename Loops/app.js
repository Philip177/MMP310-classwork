var submit = document.getElementById("submit");
submit.onclick = function() {
var message = document.getElementById("message");
    var keyword =       document.getElementById("keyword").value;
    var characters = document.getElementById("characters").value;
    var password ="";
    var choices = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < characters; i++) {
        password += choices [Math.floor(Math.random() * choices.length)];
    }
    message.innerText=password;
}