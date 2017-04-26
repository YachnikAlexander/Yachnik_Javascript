var list = document.querySelector(".list");
var html = document.querySelector("html");

html.addEventListener("contextmenu", function(e){

	if(window.getComputedStyle(list).display=="none"){
		list.style.top = e.clientY+"px";
		list.style.left = e.clientX+"px";
		list.style.display = "block";
	}	
	else 
		if(e.target == this)
		list.style.display = "none";		
	
})

html.addEventListener("contextmenu", function(e){
	e.preventDefault();
})