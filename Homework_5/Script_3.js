var names = new Array('Алла', 'Альбина', 'Анастасия', 'Ангелина' ,'Анисья', 'Анна', 'Антонида', 'Антонина', 'Анфиса', 'Аполлинария' ,'Ариадна', 'Беатриса', 'Берта' ,'Bорислава', 'Бронислава', 'Валентина', 'Валерия', 'Ванда', 'Варвара','Василиса' ,'Васса ','Вера', 'Вероника');
var cities = new Array('Ухта', 'Учалы','Уяр','Фатеж','Фокино','Фокино','Фролово','Фрязино','Фурманов','Невель','Невельск','Невинномысск','Невьянск','Нелидово','Неман');
var product = [
	{
		img:"Krem.jpg",
		name:"Krem",
	},

	{
		img:"ball.jpg",
		name:"Ball",
	},

	{
		img:"klushka.jpg",
		name:"klushka",
	},

	{
		img:"Shaiba.jpg",
		name:"Shaiba",
	},

	{
		img:"Konki.jpg",
		name:"Konki",
	}
];

function time(){
	return Math.round(Math.random()*1800+2700);
}

var Korobka = document.getElementsByTagName("div");
var x = 0;
setInterval(function(){
		
		var perem = Math.round(Math.random()*(product.length-1));
		var count = Math.ceil(Math.random()*10);
		var okno = document.createElement("div");
		Korobka[0].appendChild(okno);

			x = x+50;
			var img = document.createElement("img");
			okno.appendChild(img);
			img.setAttribute("src",product[perem].img);
			img.setAttribute("width","50px");

			var spanNameMan = document.createElement("span");
			spanNameMan.setAttribute("class", "str1");
			spanNameMan.innerHTML = names[perem];
			okno.appendChild(spanNameMan);

			var spanCities = document.createElement("span");
			spanCities.innerHTML = "из "+"\""+cities[perem]+"\"";
			okno.appendChild(spanCities);
			spanCities.setAttribute("class", "str1");

			var spanNameProduct = document.createElement("span");
			spanNameProduct.setAttribute("class", "str");
			spanNameProduct.innerHTML ="Купил(а) "+"\""+product[perem].name+"\"";	
			okno.appendChild(spanNameProduct);	

			var spanCount = document.createElement("span");
			spanCount.setAttribute("class", "str2");
			spanCount.innerHTML = "   ("+(count)+")";
			okno.appendChild(spanCount);
			setInterval(function(){
				okno.remove();	
			}, 7000)

},time())





