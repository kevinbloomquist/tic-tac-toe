var test = function() {
console.log("new refresh!");
};

$(document).ready(function() {
    console.log( "ready!" );
});

var element = document.getElementById("box1");
console.log(element);

var counter = 0;
var advanceCounter = function(){
  counter += 1;
  console.log("clicked " + counter + " times.");
};

var changeBox1 = function(counter){
	  if(counter%2===0) {
		$("#box1").removeClass("box").addClass("clicked").html("<p>X</p>");
	} else if (counter%2===1) {
		$("#box1").removeClass("box").addClass("clicked").html("<p>O</p>");
	}
};

document.getElementById('box1').addEventListener('Click',changeBox1(counter));
	

