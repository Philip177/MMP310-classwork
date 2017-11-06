var design = ["building","video games","tvs"];
var inspired = ["nature", "solar system", "machinery"];
var that = ["unique", "fun", "adventurous"];
var through = ["spots", "sparkles", "diamonds"];
var using = ["color", "shape", "song"];

var first = document.getElementById("first");
first.value = design[Math.floor(Math.random() * design.length)];

var second = document.getElementById("second");
second.value = inspired[Math.floor(Math.random() * inspired.length)];

var third = document.getElementById("third");
third.value = that[Math.floor(Math.random() * that.length)];

var fourth = document.getElementById("fourth");
fourth.value = through[Math.floor(Math.random() * through.length)];

var fifth = document.getElementById("fifth");
fifth.value = using[Math.floor(Math.random() * using.length)];
