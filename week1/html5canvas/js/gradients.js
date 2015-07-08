window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if(theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

		//create a linear gradient
		//createLineatGradient(x0,y0,x1,y1)
		var linGrd = ctx.createLinearGradient(20,20,220,200);

		//Adding Color stops
		linGrd.addColorStop(0,"#f00");
		linGrd.addColorStop(.5,"#00f");
		linGrd.addColorStop(1, "#0f0");

		//create a rectangle
		ctx.fillStyle = linGrd;
		ctx.fillRect(20,20,200,200);

		//create a radial gradient
		//createRadialGradient(x0,y0,r0,x1,y1,r1)
		var radGrad = ctx.createRadialGradient(525,150,20,525,150,100);

		//add color stops
		radGrad.addColorStop(0, "#f00");
		radGrad.addColorStop(.5, "#00f");
		radGrad.addColorStop(1, "#0f0");

		ctx.fillStyle = radGrad;

		ctx.beginPath();
		ctx.arc(55, 150, 100, 0, 2*Math.PI);
		ctx.fill();

		}
	}
}