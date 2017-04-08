var n = prompt("Введите ширину"); 
var m = prompt("Введите длину"); 
var el = document.getElementById("first"); 
var table = document.createElement("table"); 
el.appendChild(table); 
var tbody = document.createElement("tbody"); 
table.appendChild(tbody); 
for(var i = 1; i <=n; i++){ 
	var tr = document.createElement("tr"); 
	tbody.appendChild(tr); 
	for(var j = 1; j <=m; j++){ 
	var td = document.createElement("td"); 
	if(i==j){
		td.setAttribute("bgcolor", "red");
	}
	td.innerHTML = i*j;
	tr.appendChild(td);
	} 
}

