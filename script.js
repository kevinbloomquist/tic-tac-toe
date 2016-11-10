var test = function() {
console.log("JS Test");
};
console.log(test);

// hold this for after resolution of click count: (will most likely have to do for each box)
// css x state = even; css o state = odd? ie if onClick or clickCount = odd add attribute oState
// document.getElementbyId('#box1').addEventListener("click",onClick())

var onClick = function() {
	var clicks = 0; 
return function(){
	clicks++;
};
};
document.addEventListener("click",onClick);