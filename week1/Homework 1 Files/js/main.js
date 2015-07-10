/*
     Name: Ashley Kodya
     Date: 7/9/15
     Class & Section:  WDD333 - 01
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

window.onload = function() {


/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
// Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
// Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a height of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here

var theCanvas = document.getElementById('Canvas1');
	if(theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

		ctx.strokeStyle = "black";
		ctx.fillStyle = "rgba(98,225,240,0.3)";
		ctx.lineWidth = 2;

		ctx.strokeRect(0,0,50,100);
		ctx.fillRect(0,0,50,100)

	}

} //close canvas1


/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here

var theCanvas = document.getElementById('Canvas2');
	if(theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

		ctx.strokeStyle= "black";
		ctx.fillStyle = "rgba(223,0,49,0.5)";
		ctx.lineWidth = 5;

		var degrees = 360;
		var radians = (degrees/180)*Math.PI;
						
		ctx.beginPath();
		ctx.arc(50, 50, 20, 0, radians);
		ctx.fill();
		ctx.stroke();

	}

} //close canvas2


/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here

var theCanvas = document.getElementById('Canvas3');
	if(theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

		ctx.strokeStyle = "rgba(69,27,112,0.9)";
		ctx.fillStyle= "yellow";
		ctx.lineWidth = 1;
						
		//Draw an open path
		ctx.beginPath();
		ctx.moveTo(100,100);  // (horizontal, vertical)
		ctx.lineTo(120,130);
		ctx.lineTo(160,130);
		ctx.lineTo(120,160);
		ctx.lineTo(140,190);
		ctx.lineTo(100,175);
		ctx.lineTo(60,190);
		ctx.lineTo(80,160);
		ctx.lineTo(40,130);
		ctx.lineTo(80,130);

		//ctx.lineTo(25,175);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
	}

} //close canvas3


/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here

var theCanvas = document.getElementById('Canvas4');
	if(theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

		ctx.strokeStyle = "rgba(140,112,69,0.4)";
		ctx.lineWidth = 2;

	//TOP BEZIER
		//stroke a simple bezier curve
		ctx.beginPath();
		ctx.moveTo(150,130);

		//bezierCurveTo(cx1,cy1,cx2,cy2,x,y)                 //horizontal, vertical)
		ctx.bezierCurveTo(170,20,390,20,400,130);
		ctx.stroke();

	//1st BOTTOM BEZIER
		//stroke a simple bezier curve
		ctx.beginPath();
		ctx.moveTo(150,130);

		//bezierCurveTo(cx1,cy1,cx2,cy2,x,y)                 //horizontal, vertical)
		ctx.bezierCurveTo(150,150,200,150,200,130);
		ctx.stroke();

	//2nd BOTTOM BEZIER
		//stroke a simple bezier curve
		ctx.beginPath();
		ctx.moveTo(200,130);

		//bezierCurveTo(cx1,cy1,cx2,cy2,x,y)                 //horizontal, vertical)
		ctx.bezierCurveTo(210,150,230,150,250,130);
		ctx.stroke();

	//3rd BOTTOM BEZIER
		//stroke a simple bezier curve
		ctx.beginPath();
		ctx.moveTo(250,130);

		//bezierCurveTo(cx1,cy1,cx2,cy2,x,y)                 //horizontal, vertical)
		ctx.bezierCurveTo(260,150,280,150,300,130);
		ctx.stroke();

	//4th BOTTOM BEZIER
		//stroke a simple bezier curve
		ctx.beginPath();
		ctx.moveTo(300,130);

		//bezierCurveTo(cx1,cy1,cx2,cy2,x,y)                 //horizontal, vertical)
		ctx.bezierCurveTo(310,150,330,150,350,130);
		ctx.stroke();

	//5th BOTTOM BEZIER
		//stroke a simple bezier curve
		ctx.beginPath();
		ctx.moveTo(350,130);

		//bezierCurveTo(cx1,cy1,cx2,cy2,x,y)                 //horizontal, vertical)
		ctx.bezierCurveTo(360,150,380,150,400,130);
		ctx.stroke();

	}

} //close canvas4

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here

var theCanvas = document.getElementById('Canvas5');
	if(theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

		var textDraw = "Pitbulls Rule!";


		ctx.font = "90pt Book Antiqua";
		ctx.fillStyle = "rgba(37,105,112,0.6)";
		ctx.textBaseline = "middle";
		ctx.strokeStyle = "rgba(0,255,0,.2)";
		ctx.fillText(textDraw,20,160);
		ctx.strokeText(textDraw,20,160);

	}

} //close canvas5

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here

var theCanvas = document.getElementById('Canvas6');
	if(theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

		  	var logoImg = document.getElementById("logo");

		//1
  			ctx.drawImage(logoImg, 0,0, 200, 100); 

  		//2
  			ctx.drawImage(logoImg, 250,50, 100, 50); 


  			//create a path shape clipping mask
  			ctx.beginPath();
  			ctx.moveTo(460,150);
  			ctx.lineTo(250,200);
  			ctx.lineTo(460,250);
  			ctx.lineTo(455,285);
  			ctx.closePath();

  			ctx.clip();

  			ctx.drawImage(logoImg, 400,50,300,200);

 

	}

} //close canvas6



/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here
var theCanvas = document.getElementById('Canvas7');
	if(theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

		//SAND 1
		var degrees = 360;
		var radians = (degrees/180)*Math.PI;

		ctx.strokeStyle = "rgb(355,194,150)";
		ctx.fillStyle = "rgb(355,194,150)";
		ctx.lineWidth = 15;
						
		ctx.beginPath();
		ctx.arc(50, 390, 200, 0, radians);
		ctx.fill();
		ctx.stroke();

		//SAND 2
		ctx.beginPath();
		ctx.arc(700, 370, 200, 0, radians);
		ctx.fill();
		ctx.stroke();

		//SAND 3
		ctx.beginPath();
		ctx.arc(450, 440, 260, 0, radians);
		ctx.fill();
		ctx.stroke();

		//SUN
		ctx.strokeStyle= "orange";
		ctx.fillStyle = "orange";
		ctx.lineWidth = 5;

		var degrees = 360;
		var radians = (degrees/180)*Math.PI;
						
		ctx.beginPath();
		ctx.arc(50, 50, 50, 0, radians);
		ctx.fill();
		ctx.stroke();

		//**BIRDS**
		ctx.strokeStyle = "white";
		ctx.lineWidth = 6;

		//bird 1
		//stroke a simple bezier curve
		ctx.beginPath();
		ctx.moveTo(650,50);

		//bezierCurveTo(cx1,cy1,cx2,cy2,x,y)                 //horizontal, vertical)
		ctx.bezierCurveTo(630,60,615,70,600,100);
		ctx.stroke();

		//stroke a simple bezier curve
		ctx.beginPath();
		ctx.moveTo(600,100);

		//bezierCurveTo(cx1,cy1,cx2,cy2,x,y)                 //horizontal, vertical)
		ctx.bezierCurveTo(580,60,615,70,550,50);
		ctx.stroke();

		//bird 2
		//stroke a simple bezier curve
		ctx.beginPath();
		ctx.moveTo(750,75);

		//bezierCurveTo(cx1,cy1,cx2,cy2,x,y)                 //horizontal, vertical)
		ctx.bezierCurveTo(730,60,715,70,700,100);
		ctx.stroke();

		//stroke a simple bezier curve
		ctx.beginPath();
		ctx.moveTo(700,100);

		//bezierCurveTo(cx1,cy1,cx2,cy2,x,y)                 //horizontal, vertical)
		ctx.bezierCurveTo(680,60,715,70,680,50);
		ctx.stroke();

		var camelImg = document.getElementById("camel");

		//1
  			ctx.drawImage(camelImg, 320,80, 175, 175); 


	}

} //close canvas7


} //close window.onload