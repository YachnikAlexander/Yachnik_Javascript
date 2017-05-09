var div = document.querySelector(".div");
var zhir = document.querySelector(".zhir");
var kursiv = document.querySelector(".kursiv");
var podcherk = document.querySelector(".podcherk");
var fontSize = document.querySelector(".fontSize");
var fontFamily = document.querySelector(".fontFamily");
var shrift = document.querySelector(".shrift");
var textBackroundColor = document.querySelector(".Background");
var btnBackground = document.querySelector(".colorBack");
var textColor = document.querySelector(".colorText");
var btnTextColor = document.querySelector(".colorTxt");
var leftAlignment = document.querySelector(".left")
var middleAlignment = document.querySelector(".middle");
var rightAlignment = document.querySelector(".right")
var indents = document.querySelector(".indent")
var outdents = document.querySelector(".outdent")
var list = document.querySelector(".list")
var link = document.querySelector(".verticalText")
var remove = document.querySelector(".remove")




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


btnBackground.addEventListener("click", function(){
	document.execCommand("backcolor",false,textBackroundColor.value)
});
btnTextColor.addEventListener("click", function(){
	document.execCommand("forecolor",false,textColor.value)
})


leftAlignment.addEventListener("click", function(){
	document.execCommand("justifyleft",false,null)
})
middleAlignment.addEventListener("click", function(){
	document.execCommand("justifycenter",false,null)
})
rightAlignment.addEventListener("click", function(){
	document.execCommand("justifyright",false,null)
})


indents.addEventListener("click", function(){
	document.execCommand("indent",false,null)
})
outdents.addEventListener("click", function(){
	document.execCommand("outdent",false,null)
})


list.addEventListener("click", function(){
	document.execCommand("insertorderedList",false,null)
})

link.addEventListener("click", function(){
	document.execCommand("createlink",false,prompt("enter the addres", ""))
})

remove.addEventListener("click", function(){
	document.execCommand("removeformat",false,null)
})

if(document.queryCommandState("bold")){
	zhir.classList.remove("zhir");
	zhir.classList.toggle("podsvech");
	alert("hello")

}




