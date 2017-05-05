// var text = document.forms[0].elements[0];
// text.addEventListener("keyup", function(e){
// 	var r = /[0-9a-zA-Z\-\_]/
// 	var s = e.key;
// 	if(!r.test(s.toString())){
// 		e.preventDefault();
// 	}
// 	console.log(s)
// })


var div = document.querySelector(".div");
var zhir = document.querySelector(".zhir");
var kursiv = document.querySelector(".kursiv");
var podcherk = document.querySelector(".podcherk");
var fontSize = document.querySelector(".fontSize");
var fontFamily = document.querySelector(".fontFamily");
var shrift = document.querySelector(".shrift");

div.contentEditable = true;
zhir.addEventListener("click", function(e){
	document.execCommand("bold",false, null);
})
kursiv.addEventListener("click", function(){
	document.execCommand("italic",false,null);
})
podcherk.addEventListener("click", function(){
	document.execCommand("underline",false, null);
})
shrift.addEventListener("click", function(){
	if(fontSize.value){
		document.execCommand("fontSize", false, Number(fontSize.value));
	}
	if(fontFamily.value){
		document.execCommand("fontFamily", false, fontFamily.value);
	}
})





