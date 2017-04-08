var mas =  [
	{
		name:"Belarus",
		population:"10 млн. человек",
		code:"375",
		square:"207.6 тыс. кв. км",
		flag: "Belarus.jpg",
	},
	{
		name:"Great Britain",
		population:"64 млн. человек",
		code:"44",
		square:"242 тыс. кв. км",
		flag: "Great-Britain.jpg",
	},
	{
		name:"Russia",
		population:"10 млн. человек",
		code:"7",
		square:"17 075 тыс. кв. км",
		flag: "Russia.jpg",
	},
	{
		name:"Ukraine",
		population:"42 млн. человек",
		code:"380",
		square:"603 тыс. кв. км",
		flag: "Ukrain.jpg",
	},
	{
		name:"Польша",
		population:"38 млн. человек",
		code:"48",
		square:"312 тыс. кв. км",
		flag: "Poland.jpg",
	},
	{
		name:"Turkey",
		population:"77 млн. человек",
		code:"90",
		square:"783 тыс. кв. км",
		flag: "Tuerkei.jpg",
	},
	{
		name:"Franch",
		population:"64 млн. человек",
		code:"33",
		square:"643 тыс. кв. км",
		flag: "French.jpg",
	},
	{
		name:"Switzerland",
		population:"8 млн. человек",
		code:"41",
		square:"41 тыс. кв. км",
		flag: "Switzerland.jpg",
	},
	{
		name:"Egipt",
		population:"82 млн. человек",
		code:"20",
		square:"1 010 тыс. кв. км",
		flag: "Egipt.jpg",
	},
	{
		name:"Japan",
		population:"126 млн. человек",
		code:"81",
		square:"377 тыс. кв. км",
		flag: "Japan.jpg",
	},
	{
		name:"Czech",
		population:"10 млн. человек",
		code:"420",
		square:"78 тыс. кв. км",
		flag: "czech.jpg",
	},
	{
		name:"Finland",
		population:"5 млн. человек",
		code:"358",
		square:"338 тыс. кв. км",
		flag: "Finland.jpg",
	}
];

var el = document.getElementById("first"); 
var table = document.createElement("table"); 
el.appendChild(table); 
var tbody = document.createElement("tbody"); 
table.appendChild(tbody); 
var Dl = mas.length;
for(var i = 0; i < Dl; i++){ 

	var tr = document.createElement("tr"); 
	tbody.appendChild(tr);
	var td = document.createElement("td"); 
	td.innerHTML = mas[i].name;
	tr.appendChild(td);

	var td = document.createElement("td"); 
	td.innerHTML = mas[i].population;
	tr.appendChild(td);

	var td = document.createElement("td"); 
	td.innerHTML = mas[i].code;
	tr.appendChild(td);

	var td = document.createElement("td"); 
	td.innerHTML = mas[i].square;
	tr.appendChild(td);

	var td = document.createElement("td"); 
	tr.appendChild(td);
	var img = document.createElement("img");
	td.appendChild(img);
	img.setAttribute("src",mas[i].flag);
	img.setAttribute("width","50px");

}


