// Javascript File

// Self executing Anonymous function (SAF)
// avoid global variables
(function(){ 

// Check in
console.log("Beep boop. Connected to Mainframe.");

// VARIABLES
var iconSet = document.querySelectorAll('svg');

// FUNCTIONS
function logThisIcon() {
	console.log('clicked on this icon', this.id);
	this.style.WebkitTransform = "rotate(180deg)"; 
	this.style.transform = "rotate(180deg)"; 
}


iconSet.forEach(icon => icon.addEventListener('click', logThisIcon));


}) ();