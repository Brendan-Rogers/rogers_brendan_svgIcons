// Javascript File

// Self executing Anonymous function (SAF)
// avoid global variables
(function(){ 

// Check in
console.log("Beep boop. Connected to Mainframe.");

// VARIABLES
var iconSet = document.querySelectorAll("svg");
var icon1 = document.querySelector("#vector1");
var icon2 = document.querySelector("#vector2");
var icon3 = document.querySelector("#vector3");
var icon4 = document.querySelector("#vector4");
var icon5 = document.querySelector("#vector5");
var icon6 = document.querySelector("#vector6");
var icon7 = document.querySelector("#vector7");
var icon8 = document.querySelector("#vector8");
var icon9 = document.querySelector("#vector9");
var icon10 = document.querySelector("#vector10");

// FUNCTIONS
function logThisIcon() {
	console.log("clicked on this icon", this.id);
	this.style.WebkitTransform = "rotate(180deg)"; 
	this.style.transform = "rotate(180deg)"; 
}

function changeIcon1(){
	console.log("I understand that Icon1 has been clicked.");
	document.querySelector('.aaa').style.fill = "red";
}
function changeIcon2(){
	console.log("I understand that Icon2 has been clicked.");
	document.querySelector('.baa').style.fill = "orange";
}
function changeIcon3(){
	console.log("I understand that Icon3 has been clicked.");
	document.querySelector('.daa').style.fill = "yellow";
}
function changeIcon4(){
	console.log("I understand that Icon4 has been clicked.");
	document.querySelector('.eaa').style.fill = "green";
}
function changeIcon5(){
	console.log("I understand that Icon5 has been clicked.");
	document.querySelector('.faa').style.fill = "blue";
}
function changeIcon6(){
	console.log("I understand that Icon6 has been clicked.");
	document.querySelector('.gaa').style.fill = "indigo";
}
function changeIcon7(){
	console.log("I understand that Icon7 has been clicked.");
	document.querySelector('.haa').style.fill = "violet";
}
function changeIcon8(){
	console.log("I understand that Icon8 has been clicked.");
	document.querySelector('.iaa').style.fill = "black";
}
function changeIcon9(){
	console.log("I understand that Icon9 has been clicked.");
	document.querySelector('.jaa').style.fill = "white";
}
function changeIcon10(){
	console.log("I understand that Icon10 has been clicked.");
	document.querySelector('.kaa').style.fill = "gold";
}


// EVENT HANDLERS
iconSet.forEach(icon => icon.addEventListener('click', logThisIcon));

icon1.addEventListener('click', changeIcon1);
icon2.addEventListener('click', changeIcon2);
icon3.addEventListener('click', changeIcon3);
icon4.addEventListener('click', changeIcon4);
icon5.addEventListener('click', changeIcon5);
icon6.addEventListener('click', changeIcon6);
icon7.addEventListener('click', changeIcon7);
icon8.addEventListener('click', changeIcon8);
icon9.addEventListener('click', changeIcon9);
icon10.addEventListener('click', changeIcon10);

}) ();