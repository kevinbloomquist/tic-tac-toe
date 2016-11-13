var test = function() {
console.log("new refresh!");
};

$( document ).ready(function() {
    console.log( "ready!" );
});

// listen for click and on click run the counter function advancing the counter
var clickField = document.getElementsByClassName("grid");
console.log(clickField);

var currentCount = 0;
var counter  = function(){
	currentCount++;
};
counter();
console.log(currentCount);
// ??????????????????????????????????????????????????????????????????????????????????????????
var clickField = document.getElementById("grid");
console.log(clickField);
$(clickField).on("click",counter(currentCount));
// clickField.addEventListener("click",counter);
// var currentCount = 0;
// var counter  = function(){
	// currentCount++;
// };


console.log(currentCount);
var divCheck =document.getElementById("box1");
console.log(divCheck);
// ChangeState defines how to change the css of a specific box(div) once clicked.
// Once tested and functional maybe figure out how to use .this to dry out the methodology.
var changeState = function(currentCount){
	if(currentCount%2===0) {
		$("#box1").removeClass("box").addClass("clicked").html("<p>X</p>");
	} else if (currentCount%2===1) {
		$("#box1").removeClass("box").addClass("clicked").html("<p>O</p>");
	}
	// checkForWin();
};
console.log(changeState(currentCount));
//Adds event listener to each div and runs the changeState function to create x or o
$("#box1").on("Click",function(currentCount){
	if(currentCount%2===0) {
		$("#box1").removeClass("box").addClass("clicked").html("<p>X</p>");
	} else if (currentCount%2===1) {
		$("#box1").removeClass("box").addClass("clicked").html("<p>O</p>");
	}
	// checkForWin();
});

$("#box2").on("Click",changeState('#box2'));
$("#box3").on("click",changeState);
$("#box4").on("click",changeState);
$("#box5").on("click",changeState);
$("#box6").on("click",changeState);
$("#box7").on("click",changeState);
$("#box8").on("click",changeState);
$("#box9").on("click",changeState);

// Add winState.
// var winState = function(){
	// console.log("win function running")
	// if()


// add reset button (attach page refreh to button)

// Add document.ready(), and clean up positioning, maybe go neon.

