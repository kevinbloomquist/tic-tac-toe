var test = function() {
console.log("JS Test");
};
console.log(test);

var counter = 
// hold this for after resolution of click count: (will most likely have to do for each box)
// css x state = even; css o state = odd? ie if onClick or clickCount = odd add attribute oState
// document.getElementbyId('#box1').addEventListener("click",onClick())
document.getElementById("box1").addEventListener("click",changeState);
document.getElementById("box2").addEventListener("click",changeState);
document.getElementById("box3").addEventListener("click",changeState);
document.getElementById("box4").addEventListener("click",changeState);
document.getElementById("box5").addEventListener("click",changeState);
document.getElementById("box6").addEventListener("click",changeState);
document.getElementById("box7").addEventListener("click",changeState);
document.getElementById("box8").addEventListener("click",changeState);
document.getElementById("box9").addEventListener("click",changeState);
var changeState = function(){
	if(counter%2===0) {
		document.getElementById("#box1").setAttribute("class","clicked").innerHTML("<p>X</p>");
	} else if (counter%2===1) {
		document.getElementById("#box1").setAttribute("class","clicked").innerHTML("<p>O</p>");
	}
};
