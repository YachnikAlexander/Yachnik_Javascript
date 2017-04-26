var idP = 0;
var idFP = 0;
var products = new Array();

function Product(name, type, cost, release){
	this.identificator=++identificatorP;
	this.name = name;
	this.type = type;
	this.cost = cost;
	this.release = release
}


function FoodProduct(name, type, cost, release, valid){
	this.id=++idFP;
	this.name = name;
	this.type = type;
	this.cost = cost;
	this.release = release;
	this.valid = valid;
	products.push(this);
}

var h = new FoodProduct('sausage','food',5,new Date("1998-10-08 12:12:12:12"), new Date("1998-12-08 12:12:12:12"));
var k = new FoodProduct('sausage','food',5,new Date("1998-10-08 12:12:12:12"), new Date("1998-12-08 12:12:12:12"));
Object.defineProperty(h, "storage",
{
	value: h.valid.getMonth() - h.release.getMonth()+" months",
	writable: false
})




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
	console.log("name :"+this.name);
	console.log("addres :"+this.addres);
	console.log("markUP :"+this.markUp);
	console.log("Income :"+this.income);
	console.log("Products :"+this.products);
	console.log("sum :"+this.sum);
}

var m = new Shop('euro',"st.Uspenskaya 26","2%",200,products);
m.addProduct(h,4);
m.removeProduct(2);
m.saleProduct(2);
m.infoShop();
console.log(m)
	













