// tests for initial functionality
var test = function() {
console.log("new refresh!");
};

$(document).ready(function() {
    console.log( "ready!" );
});

// test JS getElementById for individual box
var element = document.getElementById("box1");
console.log(element);

// counter function
var counter = 0;
var advanceCounter = function(){
  counter += 1;
  console.log("clicked " + counter + " times.");
};
// changes function from .box CSS to played .clicked CSS, logs, and advances counter.
var changeBox1 = function(counter){
	  if(counter%2===0) {
		$("#box1").removeClass("box").addClass("clicked").html("<p>X</p>");
	} else if (counter%2===1) {
		$("#box1").removeClass("box").addClass("clicked").html("<p>O</p>");
	}
	advanceCounter();
	console.log(counter);
};

var changeBox2 = function(counter){
	  if(counter%2===0) {
		$("#box2").removeClass("box").addClass("clicked").html("<p>X</p>");
	} else if (counter%2===1) {
		$("#box2").removeClass("box").addClass("clicked").html("<p>O</p>");
	}
	advanceCounter();
	console.log(counter);
};

var changeBox3 = function(counter){
	  if(counter%2===0) {
		$("#box3").removeClass("box").addClass("clicked").html("<p>X</p>");
	} else if (counter%2===1) {
		$("#box3").removeClass("box").addClass("clicked").html("<p>O</p>");
	}
	advanceCounter();
	console.log(counter);
};

var changeBox4 = function(counter){
	  if(counter%2===0) {
		$("#box4").removeClass("box").addClass("clicked").html("<p>X</p>");
	} else if (counter%2===1) {
		$("#box4").removeClass("box").addClass("clicked").html("<p>O</p>");
	}
	advanceCounter();
	console.log(counter);
};

var changeBox5 = function(counter){
	  if(counter%2===0) {
		$("#box5").removeClass("box").addClass("clicked").html("<p>X</p>");
	} else if (counter%2===1) {
		$("#box5").removeClass("box").addClass("clicked").html("<p>O</p>");
	}
	advanceCounter();
	console.log(counter);
};

var changeBox6 = function(counter){
	  if(counter%2===0) {
		$("#box6").removeClass("box").addClass("clicked").html("<p>X</p>");
	} else if (counter%2===1) {
		$("#box6").removeClass("box").addClass("clicked").html("<p>O</p>");
	}
	advanceCounter();
	console.log(counter);
};

var changeBox7 = function(counter){
	  if(counter%2===0) {
		$("#box7").removeClass("box").addClass("clicked").html("<p>X</p>");
	} else if (counter%2===1) {
		$("#box7").removeClass("box").addClass("clicked").html("<p>O</p>");
	}
	advanceCounter();
	console.log(counter);
};

var changeBox8 = function(counter){
	  if(counter%2===0) {
		$("#box8").removeClass("box").addClass("clicked").html("<p>X</p>");
	} else if (counter%2===1) {
		$("#box8").removeClass("box").addClass("clicked").html("<p>O</p>");
	}
	advanceCounter();
	console.log(counter);
};

var changeBox9 = function(counter){
	  if(counter%2===0) {
		$("#box9").removeClass("box").addClass("clicked").html("<p>X</p>");
	} else if (counter%2===1) {
		$("#box9").removeClass("box").addClass("clicked").html("<p>O</p>");
	}
	advanceCounter();
	console.log(counter);
};

// adds event listener to each box div and calls change function upon click.

document.getElementById('box1').addEventListener('click',function (){changeBox1(counter);});
document.getElementById('box2').addEventListener('click',function (){changeBox2(counter);});
document.getElementById('box3').addEventListener('click',function (){changeBox3(counter);});
document.getElementById('box4').addEventListener('click',function (){changeBox4(counter);});
document.getElementById('box5').addEventListener('click',function (){changeBox5(counter);});
document.getElementById('box6').addEventListener('click',function (){changeBox6(counter);});
document.getElementById('box7').addEventListener('click',function (){changeBox7(counter);});
document.getElementById('box8').addEventListener('click',function (){changeBox8(counter);});
document.getElementById('box9').addEventListener('click',function (){changeBox9(counter);});


	

