var xhr = new XMLHttpRequest();
var Drink = document.querySelector(".Drink")
var Food = document.querySelector(".Food")
var Machine = document.querySelector(".Machine")
var c1 = document.querySelector(".c1")
var c2 = document.querySelector(".c2")
var c3 = document.querySelector(".c3")
var p20 = document.querySelector(".p20")
var p40 = document.querySelector(".p40")
var p60 = document.querySelector(".p60")

var categories = new Array();
categories.push(Drink, Food, Machine, c1, c2, c3, p20, p40, p60)
var thing = document.querySelector(".products")

var valueCat = new Array("Drink", "Food", "Machine", 1, 2, 3, 20, 40, 60)
var callbackfunc = function(text){
	var products = new Array();
	products = JSON.parse(text);
	for (var j = 0; j<categories.length; j++){
		categories[j].addEventListener("click",function(e){
			for(var k=0; k<categories.length; k++)
				if(e.target == categories[k]){
					for(var i=0; i<products.length; i++){
						if(products[i].type == valueCat[k]){
							var Html_code = "<div><h2><span class=\"name\"></span></h2></div><div><span><span class=\"type\"></span></span></div><div><span><span class=\"count\"></span></span></div><div><span><span class=\"price\"></span></span></div>";
							var div = document.createElement("div");
							div.innerHTML = Html_code;
							div.setAttribute("class", "things")
							thing.appendChild(div);

								var spName = document.querySelector(".name");
								spName.outerText = products[i].name;

								var spType = document.querySelector(".type");
								spType.outerText = "Type : "+products[i].type;

								var spCount = document.querySelector(".count");
								spCount.outerText = "Count : "+products[i].count;

								var spPrice = document.querySelector(".price");
								spPrice.outerText = "Price : "+products[i].price;
						}
						if(products[i].count == valueCat[k]){
							var Html_code = "<div><h2><span class=\"name\"></span></h2></div><div><span><span class=\"type\"></span></span></div><div><span><span class=\"count\"></span></span></div><div><span><span class=\"price\"></span></span></div>";
							var div = document.createElement("div");
							div.innerHTML = Html_code;
							div.setAttribute("class", "things")
							thing.appendChild(div);

								var spName = document.querySelector(".name");
								spName.outerText = products[i].name;

								var spType = document.querySelector(".type");
								spType.outerText = "Type : "+products[i].type;

								var spCount = document.querySelector(".count");
								spCount.outerText = "Count : "+products[i].count;

								var spPrice = document.querySelector(".price");
								spPrice.outerText = "Price : "+products[i].price;
						}
						if(products[i].price == valueCat[k]){
							var Html_code = "<div><h2><span class=\"name\"></span></h2></div><div><span><span class=\"type\"></span></span></div><div><span><span class=\"count\"></span></span></div><div><span><span class=\"price\"></span></span></div>";
							var div = document.createElement("div");
							div.innerHTML = Html_code;
							div.setAttribute("class", "things")
							thing.appendChild(div);

								var spName = document.querySelector(".name");
								spName.outerText = products[i].name;

								var spType = document.querySelector(".type");
								spType.outerText = "Type : "+products[i].type;

								var spCount = document.querySelector(".count");
								spCount.outerText = "Count : "+products[i].count;

								var spPrice = document.querySelector(".price");
								spPrice.outerText = "Price : "+products[i].price;
						}
								
					}
				}
		})
	}
}
xhr.open("Get", "products.json", true);
xhr.onload = function(){
	callbackfunc(xhr.responseText);
	console.log(xhr.responseText)
};

xhr.send(null);