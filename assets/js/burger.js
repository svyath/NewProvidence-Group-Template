document.querySelector(".headerBurger").onclick = function() {
	open()
 };
 
 function open() {
	document.querySelector(".menu").classList.toggle("show");
 }