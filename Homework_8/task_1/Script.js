var list = document.querySelector(".list");
var html = document.querySelector("html");

html.addEventListener("contextmenu", function(e){

	if(window.getComputedStyle(list).display=="none"){
		list.style.top = e.clientY+"px";
		list.style.left = e.clientX+"px";
		list.style.display = "block";


	}
	else if(e.target == this){
		list.style.display = "none";
		
	}	
		list.addEventListener("click", function(e){
			if(window.getComputedStyle(list).width=="300px"){
				list.classList.remove("list");
				list.classList.toggle("bol")
			}
			if(window.getComputedStyle(list).width=="600px"){
			list.classList.remove("bol");
			list.classList.toggle("list")
			}
		})
	e.preventDefault();	
})
html.addEventListener("click", function(e){

	if(window.getComputedStyle(list).display=="block" && e.target == this){
		list.style.display = "none";
	}
})
