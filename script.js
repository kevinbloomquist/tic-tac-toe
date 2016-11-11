var test = function() {
console.log("JS Test");
};
console.log(test);
// listen for click and on click run the counter function advancing the counter
var boardClick = document.getElementsByClassName("grid");

console.log(boardClick);
boardClick.addEventListener("click",counter);
var currentCount = 0;
var counter  = function(){
	currentCount++;
};


console.log(currentCount);
// ChangeState defines how to change the css of a specific box(div) once clicked.
// Once tested and fnctional figure out how to use .this to dry out the methodology.
var changeState = function(){
	if(counter%2===0) {
		document.getElementById("#box1").setAttribute("class","clicked").innerHTML("<p>X</p>");
	} else if (counter%2===1) {
		document.getElementById("#box1").setAttribute("class","clicked").innerHTML("<p>O</p>");
	}
};
console.log(changeState());
//Adds event listener to each div and runs the changeState function to create x or o
document.getElementById("box1").addEventListener("click",changeState);
document.getElementById("box2").addEventListener("click",changeState);
document.getElementById("box3").addEventListener("click",changeState);
document.getElementById("box4").addEventListener("click",changeState);
document.getElementById("box5").addEventListener("click",changeState);
document.getElementById("box6").addEventListener("click",changeState);
document.getElementById("box7").addEventListener("click",changeState);
document.getElementById("box8").addEventListener("click",changeState);
document.getElementById("box9").addEventListener("click",changeState);

// Add winState.
// var winState = function(){
	// console.log("win function running")
	// if()


// add reset button (attach page refreh to button)

// Add document.ready(), and clean up positioning, maybe go neon.

