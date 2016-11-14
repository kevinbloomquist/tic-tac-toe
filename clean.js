var test = function() {
console.log("new refresh!");
};

$(document).ready(function() {
    console.log( "ready!" );
});

var element = document.getElementsByClassName("grid");
console.log(element);

var counter = 1;
var advanceCounter = function(){
  counter += 1;
  console.log("clicked " + counter + " times.");
};

var changeBox1 = function(a){
	if(a%2===0) {
		$("#box1").removeClass("box").addClass("clicked").html("<p>X</p>");
	} else if (a%2===1) {
		$("#box1").removeClass("box").addClass("clicked").html("<p>O</p>");
	}
};

// $("#box1").on("Click",changeBox1());
	

