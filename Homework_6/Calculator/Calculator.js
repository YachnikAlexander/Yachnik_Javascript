var mPlus = document.getElementsByClassName("mPlus")[0];
var mMinus = document.getElementsByClassName("mMinus")[0];
var mMr = document.getElementsByClassName("Mr")[0];
var power= document.getElementsByClassName("power")[0];
var seven = document.getElementsByClassName("seven")[0];
var eight = document.getElementsByClassName("eight")[0];
var nine = document.getElementsByClassName("nine")[0];
var four = document.getElementsByClassName("four")[0];
var five = document.getElementsByClassName("five")[0];
var six = document.getElementsByClassName("six")[0];
var one = document.getElementsByClassName("one")[0];
var two = document.getElementsByClassName("two")[0];
var three = document.getElementsByClassName("three")[0];
var zero = document.getElementsByClassName("zero")[0];
var point = document.getElementsByClassName("point")[0];
var divis = document.getElementsByClassName("divis")[0];
var multy = document.getElementsByClassName("multy")[0];
var minus = document.getElementsByClassName("minus")[0];
var plus = document.getElementsByClassName("plus")[0];
var textarea = document.getElementsByClassName("textarea")[0];
var equal = document.getElementsByClassName("equal")[0];
var otvet = document.getElementsByClassName("otvet")[0];


//NUMBERS
zero.addEventListener("click", function(){
	var numbTarea = textarea.value.toString();
	textarea.value = numbTarea + "0";
});
one.addEventListener("click", function(){
	var numbTarea = textarea.value.toString();
	textarea.value = numbTarea + "1";
});	
two.addEventListener("click", function(){
	var numbTarea = textarea.value.toString();
	textarea.value = numbTarea + "2";
});
three.addEventListener("click", function(){
	var numbTarea = textarea.value.toString();
	textarea.value = numbTarea + "3";
});
four.addEventListener("click", function(){
	var numbTarea = textarea.value.toString();
	textarea.value = numbTarea + "4";
});
five.addEventListener("click", function(){
	var numbTarea = textarea.value.toString();
	textarea.value = numbTarea + "5";
});
six.addEventListener("click", function(){
	var numbTarea = textarea.value.toString();
	textarea.value = numbTarea + "6";
});
seven.addEventListener("click", function(){
	var numbTarea = textarea.value.toString();
	textarea.value = numbTarea + "7";
});
eight.addEventListener("click", function(){
	var numbTarea = textarea.value.toString();
	textarea.value = numbTarea + "8";
});
nine.addEventListener("click", function(){
	var numbTarea = textarea.value.toString();
	textarea.value = numbTarea + "9";
});
point.addEventListener("click", function(){
	var numbTarea = textarea.value.toString();
	textarea.value = numbTarea + ".";
});


//OPERATION
plus.addEventListener("click", function(){
	var numbTarea = textarea.value.toString();
	textarea.value = numbTarea + "+";
});
minus.addEventListener("click", function(){
	var numbTarea = textarea.value.toString();
	textarea.value = numbTarea + "-";
});
multy.addEventListener("click", function(){
	var numbTarea = textarea.value.toString();
	textarea.value= numbTarea + "*";
});
divis.addEventListener("click", function(){
	var numbTarea = textarea.value.toString();
	textarea.value = numbTarea + "/";
});

var reg_plus = /\+/;
var reg_minus = /\-/;
var reg_mult = /\*/;
var reg_divis = /\//;

//CHECKING 
	
equal.addEventListener("click", function(){
	if(textarea.value.toString() != '')
	{
		var numbTarea = textarea.value.toString();
		var mas = new Array();
		if(reg_plus.exec(numbTarea)){
			mas = numbTarea.split("+");
			var sum = 0;
			mas.forEach(function(e){
				sum += +e;
		});
			otvet.value = sum;
			textarea.value = "";
	}
	if(reg_minus.exec(numbTarea)){
		mas = numbTarea.split("-");
		var diff = mas[0];
		for(var i=1; i<mas.length; i++){
			diff -=+mas[i];
		}
			textarea.value = "";
			otvet.value = diff;			
		}
		if(reg_mult.exec(numbTarea)){
			mas = numbTarea.split("*");
			var prod = 1;
			mas.forEach(function(e){
				prod *= +e;
		});
		textarea.value = "";
		otvet.value = prod;
	}
	if(reg_divis.exec(numbTarea)){
		mas = numbTarea.split("/");
		var quot = mas[0];
		for(var i=1; i<mas.length; i++){
			quot /=+mas[i];
		}
		textarea.value = "";
		otvet.value = quot;					
	}
	}
});
var valueMemory = 0;

power.addEventListener("click", function(){
	otvet.value = '';
	textarea.value = '';
	valueMemory = 0;
})

mPlus.addEventListener("click", function(){
	valueMemory+=Number(otvet.value);
});

mMinus.addEventListener("click", function(){
	valueMemory-=Number(otvet.value);
});

mMr.addEventListener("click", function(){
	otvet.value = valueMemory;
});

