var text = document.getElementsByClassName("text");
var shifr = document.getElementsByClassName("text2")
var vniz = document.getElementsByClassName("img1");
var vverh = document.getElementsByClassName("img2");
var Form = document.getElementsByTagName("form")



vniz[0].addEventListener("click", function(){

	var mas = new Array();
	var length = text[0].value.length;
	var a = text[0].value;
	for(var i =0; i<length; i++){
	mas.push(a.charCodeAt(i));
	};

	var newMas = new Array();
	newMas = mas.map(function(e){
		var delitel  = e/2;
		var ch2 = delitel.toString();
		return (ch2)
	});

	shifr[0].value = newMas;
})

vverh[0].addEventListener("click", function(){

	var mas2 = new Array();
	var stroka = shifr[0].value.toString();
	mas2 = stroka.split(",");
	var mas3 = new Array();

	var mas3 = mas2.map(function(e){
		return e*2;
	});

	var length2 = mas3.length;
	var str = '';
	for(var i=0; i<length2; i++){
		str+=String.fromCharCode(mas3[i]);
	}
		text[0].value= str ;

})
