var test = function() {
console.log("new refresh!");
};

$( document ).ready(function() {
    console.log( "ready!" );
});

var clickField = document.getElementsByClassName("grid");
console.log(clickField);

var counter = 0;
function countUP () {
		counter++;
		console.log(counter);
	}
	countUP ();