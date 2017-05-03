var idP = 0;
var idFP = 0;
var products = new Array();
var allShop = new Array();

var infoAllShops = document.querySelector(".infoShops");
var Euro = document.querySelector(".Euro");
var Prostore = document.querySelector(".Prostore");
var information = document.querySelector(".info")

function Product(name, type, cost, release){
	this.identificator=++idP;
	this.name = name;
	this.type = type;
	this.cost = cost;
	this.release = release;
}

Product.prototype.infoProduct=function(){
	var div = document.createElement("div");
		information.appendChild(div);
		div.setAttribute("class", "shop")
	var headerText = document.createElement("h2");
		headerText.innerText =this.name;
		div.appendChild(headerText);
	var count = document.createElement("div");
		count.innerText = "count : "+this.identificator;
		div.appendChild(count);
	var type = document.createElement("div");
		type.innerText = "type : "+this.type;
		div.appendChild(type);
	var cost = document.createElement("div");
		cost.innerText = "cost : "+this.cost;
		div.appendChild(cost);
	var release = document.createElement("release");
		release.innerText = "Mark-up : "+this.release;
		div.appendChild(release);
}

function FoodProduct(name, type, cost, release, valid){
	this.id=++idFP;
	this.name = name;
	this.type = type;
	this.cost = cost;
	this.release = release;
	this.valid = valid;
	Object.defineProperty(this, "storage",
	{
		value: this.valid.getMonth() - this.release.getMonth()+" months"+" "+(this.valid.getDay() - this.release.getDay()+" days"),
		writable: false
	})
}

FoodProduct.prototype.infoProduct=function(){
	var div = document.createElement("div");
		information.appendChild(div);
		div.setAttribute("class", "shop")
	var headerText = document.createElement("h2");
		headerText.innerText =this.name;
		div.appendChild(headerText);
	var count = document.createElement("div");
		count.innerText = "count : "+this.identificator;
		div.appendChild(count);
	var type = document.createElement("div");
		type.innerText = "type : "+this.type;
		div.appendChild(type);
	var cost = document.createElement("div");
		cost.innerText = "cost : "+this.cost;
		div.appendChild(cost);
	var release = document.createElement("release");
		release.innerText = "Mark-up : "+this.release;
		div.appendChild(release);
}

var l = new Product('car','mashin',5,new Date("1998-10-08 12:12:12:12"), new Date("1998-12-08 12:12:12:12"));


var h = new FoodProduct('sausage','food',5,new Date("1998-10-08 12:12:12:12"), new Date("1998-12-08 12:12:12:12"));
var k = new FoodProduct('sausage','food',5,new Date("1998-10-08 12:12:12:12"), new Date("1998-12-08 12:12:12:12"));





function SUM(products){
	var count=0;
	for (var i = 0; i < this.products.length; i++) {
		count+=this.products[i].cost;
	}
	return count;
}

function Shop(name,addres, markUp, income, products){
	this.name = name;
	this.addres = addres;
	this.markUp	= markUp;
	this.income = income;
	this.products = products;
	this.sum = SUM();
	allShop.push(this);
}
Shop.prototype.addProduct=function(t, n){
	for(var i = 0; i<n; i++)
	this.products.push(t);
}
Shop.prototype.removeProduct=function(n){
	for(var i = 0; i<n; i++)
	this.products.pop();
}
Shop.prototype.saleProduct=function(n){
	for(var i = 0; i<n; i++){
		this.sum+=products[n-i-1].cost;
		this.products.pop();
	}
}
Shop.prototype.infoShop=function(){
	var div = document.createElement("div");
		information.appendChild(div);
		div.setAttribute("class", "shop")
	var headerText = document.createElement("h2");
		headerText.innerText =this.name;
		div.appendChild(headerText);
	var addres = document.createElement("div");
		addres.innerText = "Addres : "+this.addres;
		div.appendChild(addres);
	var Income = document.createElement("div");
		Income.innerText = "income : "+this.income;
		div.appendChild(Income);
	var Sum = document.createElement("div");
		Sum.innerText = "Addres : "+this.sum;
		div.appendChild(Sum);
	var markUp = document.createElement("div");
		markUp.innerText = "Mark-up : "+this.markUp;
		div.appendChild(markUp);
	var products = document.createElement("div");
		div.appendChild(products)
		var mas = document.createElement("button");
			products.appendChild(mas);
			mas.innerText = "Products";
			mas.setAttribute("class", "products");


	console.log("name :"+this.name);
	console.log("addres :"+this.addres);
	console.log("markUP :"+this.markUp);
	console.log("Income :"+this.income);
	console.log("Products :"+this.products);
	console.log("sum :"+this.sum);
}

var Market = {

	infoshop : function(){
		for(var i=0; i<allShop.length; i++){
			allShop[i].infoShop();
		}
	}
}


var m = new Shop('Euroshop',"st.Uspenskaya 26","2%",200,products);
var n = new Shop('Prostore',"st.Gorkovo 44","1.5%",300,products);

m.addProduct(h, 1);
m.addProduct(k, 1);
n.addProduct(l, 2);
n.addProduct(h, 1);




infoAllShops.addEventListener("click", function(){
	Market.infoshop();
})

Euro.addEventListener("click", function(){
	m.infoShop();
	var Products = document.querySelector(".products");
	Products.addEventListener("click", function(){
		for(var i = 0; i<products.length; i++){
			if(products[i].type == "mashin")
			products[i].infoProduct();
		};
	})
})
Prostore.addEventListener("click", function(){
	n.infoShop();
})

	













