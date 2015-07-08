window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if(theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

		var theString = "Drawing Text on a canvas";

		//simple text using defaults
		ctx.fillText(theString, 20,20);

		//style the font
		ctx.font = "25pt Georgia";
		ctx.fillStyle = "blue";
		ctx.fillText(theString, 20,60);

		//stroke and fill text
		ctx.font="32pt Verdana";
		ctx.fillStyle = "yellow";
		ctx.textBaseline = "middle";
		ctx.strokeStyle = "rgba(0,255,0,.2)";
		ctx.fillText(theString,20,160);
		ctx.strokeText(theString,20,160);


		}
	}
}