var first = document.querySelector(".first");
var two = document.querySelector(".two");
var three = document.querySelector(".three");
var html = document.querySelector("html");

first.addEventListener("click",function(e){
	console.log(e)
	two.style.display ="block";
	e.stopImmediatePropagation();
	if(e.target == first &&  window.getComputedStyle(two).display =="block"){
		two.removeAttribute("style");
		three.removeAttribute("style");
	}

		html.addEventListener("click",function(e){
			console.log(e)
			if(e.target == this && window.getComputedStyle(three).display =="none"){
				two.removeAttribute("style");
			}
			else{
				three.style.display ="block";
			}

			if(e.target == two &&  window.getComputedStyle(three).display =="block"){
				three.removeAttribute("style");
			}


			html.addEventListener("click",function(e){
				if(e.target == this || e.currentTarget == two){
					e.stopImmediatePropagation();
					three.removeAttribute("style");
				}
			})
		})
})



