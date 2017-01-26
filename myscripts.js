var index = 0;

function slideshow() {
	var i;
	var x = document.getElementsByClassName("slidesForShow");
	for(i = 0; i < x.length; i++){
		x[i].style.display = "none";
	}
	index++;
	if(index > x.length){index = 1}
	x[index-1].style.display = "img-rounded";
	setTimeout(slideshow, 3000);
}