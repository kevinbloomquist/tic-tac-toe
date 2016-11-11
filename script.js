var test = function() {
console.log("JS Test");
};
console.log(test);
// listen for click and on click run the counter function advancing the counter
var boardClick = document.getElementByClass("grid").AddEventListener("click",counter);
var counter = function(){

};
console.log(counter);
// ChangeState defines how to change the css of a specific box(div) once clicked.
// Once tested and fnctional figure out how to use .this to dry out the methodology
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

// Add Win state.
// if(box 123||or box 456||or159...)

