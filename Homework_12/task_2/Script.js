var xhr = new XMLHttpRequest();
var html = document.querySelector("html");
var body = document.querySelector("body");

var callbackfunc = function(text){
	var div = document.createElement("div");
	div.innerHTML = text;
	body.appendChild(div)
}

xhr.open("GET","load.html",true);
window.addEventListener("scroll", function(e){
	console.log(body.scrollHeight)
	if(html.getBoundingClientRect().bottom<body.scrollHeight-1000){
		console.log("TUUUT")
		xhr.onload = function(){
			callbackfunc(xhr.responseText);
		}
	}
})

xhr.send(null)