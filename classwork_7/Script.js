var button = document.querySelector(".button");
var im = new Event("click");
var wrap = document.getElementById("wrap");
var inner = document.getElementById("inner");
// Button.addEventListener("mousemove", function (e) {
// 	console.log(e);
// 	Button.value = "x:"+e.layerX+"y:"+e.layerY;
// })


// var sill = document.querySelector(".sill");
// sill.addEventListener("click",function(e){
// 	e.preventDefault();
// })

button.addEventListener("click",function(e){
	document.getElementById("wrap").style.display="block";
})
wrap.addEventListener("click",function(e){
	if(e.target == this)
	document.getElementById("wrap").style.display="none";
})
button.dispatchEvent(im);



