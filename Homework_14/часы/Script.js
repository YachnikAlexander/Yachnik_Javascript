var canvas  = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
ctx.strokeStyle = "rgba(49, 75, 78, 0.7)"
ctx.fillStyle = "rgba(49, 75, 78, 0.7)"
ctx.lineWidth = 3;

// ctx.beginPath();
// ctx.moveTo(100, 100)
// ctx.lineTo(250, 250)
// ctx.lineTo(175,50)
// ctx.lineTo(100,250)
// ctx.lineTo(250,100)
// ctx.lineTo(100,100)
// ctx.stroke();
// ctx.closePath();
	ctx.translate(250, 250);
var TimeOclock = function(){
	ctx.beginPath();
	ctx.clearRect(-250, -250, 500, 500)
	ctx.arc(0, 0, 150, 0, 2*Math.PI);
	ctx.moveTo(20, 0);
	ctx.arc(0, 0, 20, 0, 2*Math.PI);
	ctx.font="25px Arial";
	ctx.save();
	ctx.rotate(Math.PI*1/6)
	for(var i=1; i<13; i++){
		ctx.fillText(i.toString(), -10, -120);
		ctx.rotate(Math.PI/6)
	}
	ctx.restore();


	var time = new Date();
	console.log(time)
	var hour = time.getHours();
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();
	var Alltime = seconds+minutes*60+hour*3600;
	ctx.lineWidth = 10;
	var KoordinatelineForHour =Alltime/86400;
	ctx.save();
	ctx.rotate(4*Math.PI*KoordinatelineForHour)
	ctx.moveTo(0, 0)
	ctx.lineTo(0, -70)
	ctx.restore();
	
	ctx.lineWidth = 7;
	var KoordinatelineForMinutes = minutes/60;
	ctx.rotate(2*Math.PI*KoordinatelineForMinutes)
	ctx.moveTo(0, 0)
	ctx.lineTo(0, -100)
	ctx.rotate(-2*Math.PI*KoordinatelineForMinutes)

	ctx.lineWidth = 4;
	var KoordinatelineForSeconds = seconds/60;
	ctx.rotate(2*Math.PI*KoordinatelineForSeconds);
	ctx.moveTo(0,0)
	ctx.lineTo(0,-120);
	ctx.moveTo(0,0)

	ctx.rotate(-2*Math.PI*KoordinatelineForSeconds)
	ctx.stroke();
	
}
  	

	window.onload = function() {
    	setInterval(TimeOclock, 1000);
	}
// }, 1000)





var ImageData = ctx.getImageData(0, 0, 500, 500)
console.log(ImageData)









ctx.stroke();
ctx.closePath();





