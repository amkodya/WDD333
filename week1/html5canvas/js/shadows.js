window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if(theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

		ctx.save();

		var origShadowColor = ctx.shadowColor;
		//setup a shadow
		ctx.shadowColor = "#000000";
		ctx.shadowOffsetsX = 10;
		ctx.shadowOffsetY = 10;
		ctx.shadowBlur = 10;

		//draw a simple rectangle
		ctx.fillStyle = "blue";
		ctx.fillRect(20,20,200,100);

		//draw text with a shadow
		ctx.fillStyle = "green";
		ctx.shadowCOlor = "rgba(0,100,100,.5)";
		ctx.shadowOffsetX = 5;
		ctx.shadowOffsetY = 5;
		ctx.shadowBlur = 5;

		ctx.font="25pt Helvetica";
		ctx.fillText("Drawing Text on a Canvas", 250, 75);

		//draw a red line with a purple shadow
		ctx.lineCap = "round";
		ctx.lineWidth = 25;
		ctx.shadowColor = "rgba(150,0,150,0.4)";
		ctx.shadowOffsetX = -15;
		ctx.shadowOffsetY = -15;
		ctx.shadowBlur = 15;

		ctx.strokeStyle = "red";
		ctx.beginPath();
		ctx.moveTo(50, 200);
		ctx.lineTo(450,200);
		ctx.stroke();

		//rectangle with no shadow
		//ctx.shadowColor = origShadowColor;

		ctx.restore();

		ctx.fillStyle = "blue";
		ctx.fillRect(29,225,200,50);



		}
	}
}