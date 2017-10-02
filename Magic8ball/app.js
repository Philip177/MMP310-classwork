var messages = ["Yes", "No", "Mabye", "Who knows", "Think about it", "Why not"];
var submit = document.getElementById("submit");
submit.onclick = function() {
	var question = document.getElementById("question");
	var message = document.getElementById("message");
	
message.innerText = messages [Math.floor(Math.random() * messages.length)]; 
		
};