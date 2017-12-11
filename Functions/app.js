window.addEventListener("load", function() {
    var userName = "Philip";
    var c = document.getElementById("container");
            	var submit = document.getElementById("submit-message");
	var input = document.getElementById("new-message");
	submit.addEventListener("click", addMessage);
	input.addEventListener("keydown", function(event) {
		if (event.key == "Enter") {
			addMessage();
		}
	});
	
	function addMessage() {
		var msg = document.createElement("div");
		var text = document.createElement("p");
		var user = document.createElement("p");
		msg.className = "message";
		text.innerText = input.value;
		text.className = "text";
		user.innerText = userName;
		user.className = "user";
		msg.appendChild(text);
		msg.appendChild(user);
		
		var del = document.createElement("button");
		del.className = "delete";
		del.innerText = "Delete";
		del.addEventListener("click", function() {
			this.parentNode.style.backgroundColor = "Gold";
		});
		
		
		
		msg.appendChild(del);
		
		
		
		c.appendChild(msg);
	}

});