// var el = document.getElementById("to_insert");
// var flag = 0;
// setInterval(function(){
// var now = new Date();
// if (flag == 0){
// el.innerHTML = now.getHours()+':'+now.getMinutes()+':'+now.getSeconds();
// flag++;}
// else {el.innerHTML = now.getHours()+' '+now.getMinutes()+' '+now.getSeconds(); 
// flag--;}
// },500);

var n = prompt("Введите размерность таблицы"); 
var el = document.getElementById("first"); 
var table = document.createElement("table"); 
el.appendChild(table); 
var tbody = document.createElement("tbody"); 
table.appendChild(tbody); 
for(var i = 0; i < n; i++){ 
	var tr = document.createElement("tr"); 
	tbody.appendChild(tr); 
	for(var j = 0; j < n; j++){ 
	var td = document.createElement("td"); 
	var a=Math.round(Math.random()*100); 
	if(a%7==0){
		td.setAttribute("bgcolor", "red");
	}
	td.innerHTML = a;
	tr.appendChild(td);
	} 
}

