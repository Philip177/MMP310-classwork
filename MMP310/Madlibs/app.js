var questions = 4;
var fullname = prompt("Who are you and how do i know your not part of the police?");
var response = prompt("Ok, your not a cop. but how do you know theres not danger lurking behind you?");
var answer = prompt("Alright. Do you know what to do in a group thats about to beat you up?");
var complete = prompt("Good that means your family. Last thing though, whats my favorite color? only someone in my family would know that.");
var message = document.createElement("p");
message.innerText = "Alright " + fullname +", if you see someone getting mugged " + response +", make sure that person is able to " + answer +" other wise its gonna be a gonna be a " + complete + " bloody fight";
document.body.appendChild(message);