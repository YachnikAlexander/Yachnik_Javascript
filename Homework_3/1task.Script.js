var names = new Array('Алла', 'Альбина', 'Анастасия', 'Ангелина' ,'Анисья', 'Анна', 'Антонида', 'Антонина', 'Анфиса', 'Аполлинария' ,'Ариадна', 'Беатриса', 'Берта' ,'Bорислава', 'Бронислава', 'Валентина', 'Валерия', 'Ванда', 'Варвара','Василиса' ,'Васса ','Вера', 'Вероника');
var cities = new Array('Ухта', 'Учалы','Уяр','Фатеж','Фокино','Фокино','Фролово','Фрязино','Фурманов','Невель','Невельск','Невинномысск','Невьянск','Нелидово','Неман');
n = names.length;
var peoples = new Array(n);
for(var i = 0; i<n; i++){
	peoples[i] ={
		name : names[i],
		city : cities[Math.floor(Math.random() * cities.length)],
		age : Math.floor(Math.random()*100),
	}
	if(i>0)
	peoples.sort(function(a,b){
		if(a.age<b.age) return 1;
		else return -1;
	})
	var b = peoples[i+1];
	var a = peoples[i];
	
}
for(var i = 0; i<n; i++){
	document.write(peoples[i].name + "-" + peoples[i].city + "-" + peoples[i].age+"    ");
}






