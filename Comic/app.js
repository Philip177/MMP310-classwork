var slides = [
    {
	   image: "Whale.jpg",
	   caption: "Hello."
    },
     {
	   image: "Whale2.jpg",
	   caption: "You guys find any krill?"
    },
        {
	   image: "Whale3.jpg",
	   caption: "Nothing in this trench im afraid. Try the trench on the south of here."
    },
    {
	   image: "Whale4.jpg",
	   caption: "Ok, thanks for the heads up. Good Bye!"
    }
];

for(var i = 0; i < slides.length; i++){
    var s = slides[i];
    var slide = document.createElement("div");
    slide.className = "slide";
    var image = new Image();
    var caption = document.createElement("p");
    image.src = s.image;
    caption.textContent = s.caption;
    slide.appendChild(image);
    slide.appendChild(caption);
    document.body.appendChild(slide);
}
