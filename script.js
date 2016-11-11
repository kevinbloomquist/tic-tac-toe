var test = function() {
console.log("new refresh!");
};

$( document ).ready(function() {
    console.log( "ready!" );
});

console.log(test);
// listen for click and on click run the counter function advancing the counter
var boardClick = document.getElementsByClassName("grid");
console.log(boardClick);

var currentCount = 0;
var counter  = function(){
	currentCount++;
};
counter();
console.log(currentCount);
// ??????????????????????????????????????????????????????????????????????????????????????????
var boardClick = document.getElementById("grid");
console.log(boardClick);
$(boardClick).on("click",counter);
// boardClick.addEventListener("click",counter);
// var currentCount = 0;
// var counter  = function(){
	// currentCount++;
// };


console.log(currentCount);
// ChangeState defines how to change the css of a specific box(div) once clicked.
// Once tested and functional maybe figure out how to use .this to dry out the methodology.
var changeState = function(){
	if(currentCount%2===0) {
		$("#box1").removeClass("box");
		this.addClass("clicked");
		this.html("<p>X</p>");
	} else if (currentCount%2===1) {
		$("#box1").removeClass("box");
		this.addClass("clicked");
		this.html("<p>O</p>");
	}
	console.log(currentCount);
	// checkForWin();
};
console.log(changeState);
//Adds event listener to each div and runs the changeState function to create x or o
$("#box1").on("click", function(){
    alert("The paragraph was clicked.");
});
$("#box2").on("click",changeState);
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

