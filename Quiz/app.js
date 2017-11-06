var Bowser = { 
    question: "What is the name of Nintendo's Italian plumber?",
    answer: "Mario", 
    image: "Mario.jpg"
};

var Zelda = {
    question: "Who is the young man who recues Princess Zelda?",
    answer: "Link",
    image: "Link.jpg"
};

var Pokemon = {
    question: "What is the name of everybodys favorite electric mouse from Pokemon?",
    answer: "Pikachu",
    image: "Pikachu.jpg"
};

var Metroid = {
    question: "Who wears a body of armor to hunt down metroids?",
    answer: "Samus",
    image: "Samus.jpg"
};

var submit = document.getElementById("submit");
submit.onclick = function(event) {
    var count = 0;
    function correctAnswer(q) {
        count++;
        var img = new Image();
        img.src = q.image;
        document.body.appendChild(img);
    }
    
    var Mario = document.getElementById("Question1");
    if (Mario.value == Bowser.answer) {
        correctAnswer(Bowser);
    }

    var Link = document.getElementById("Question2");
    if (Link.value == Zelda.answer) {
         correctAnswer(Zelda);
    }
    var Pikachu = document.getElementById("Question3");
    if (Pikachu.value == Pokemon.answer) {
         correctAnswer(Pokemon);
    }
    var Samus = document.getElementById("Question4");
    if (Samus.value == Metroid.answer) {
         correctAnswer(Metroid);
    }
    var message = document.createElement("p");
    message.innerText = "Congrats you know your nintendo star players. You got "+count+" out of 4.";
    
    document.body.appendChild(message);
}
