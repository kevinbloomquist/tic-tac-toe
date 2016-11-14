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
	  if(counter!==0 && counter%2===0) {
		$("#box1").removeClass("box").addClass("clicked").html("<p>X</p>");
	} else if (counter!==0 && counter%2===1) {
		$("#box1").removeClass("box").addClass("clicked").html("<p>O</p>");
	}
	advanceCounter();
	console.log(counter);
};

var changeBox2 = function(counter){
	  if(counter!==0 && counter%2===0) {
		$("#box2").removeClass("box").addClass("clicked").html("<p>X</p>");
	} else if (counter!==0 && counter%2===1) {
		$("#box2").removeClass("box").addClass("clicked").html("<p>O</p>");
	}
	advanceCounter();
	console.log(counter);
};

var changeBox3 = function(counter){
	  if(counter!==0 && counter%2===0) {
		$("#box3").removeClass("box").addClass("clicked").html("<p>X</p>");
	} else if (counter!==0 && counter%2===1) {
		$("#box3").removeClass("box").addClass("clicked").html("<p>O</p>");
	}
	advanceCounter();
	console.log(counter);
};

var changeBox4 = function(counter){
	  if(counter!==0 && counter%2===0) {
		$("#box4").removeClass("box").addClass("clicked").html("<p>X</p>");
	} else if (counter!==0 && counter%2===1) {
		$("#box4").removeClass("box").addClass("clicked").html("<p>O</p>");
	}
	advanceCounter();
	console.log(counter);
};

document.getElementById('box1').addEventListener('click',function (){changeBox1(counter);});
document.getElementById('box2').addEventListener('click',function (){changeBox2(counter);});

	

