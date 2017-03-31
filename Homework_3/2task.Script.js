var names = new Array('Алла', 'Альбина', 'Анастасия', 'Ангелина' ,'Анисья', 'Анна', 'Антонида', 'Антонина', 'Анфиса', 'Аполлинария' ,'Ариадна', 'Беатриса', 'Берта' ,'Bорислава', 'Бронислава', 'Валентина', 'Валерия', 'Ванда', 'Варвара','Василиса' ,'Васса ','Вера', 'Вероника');
var Count_FLats = 5;
var Home={

 	inhabitants: [], 
 	flats: [],
 	addPerson: function(name, number){

 		if(isFinite(number) && (number <= this.flats.length) && number ){
	 		this.inhabitants.push({
	 			name: name, 
	 			flatNumber: number
	 		});
	 		this.flats[number-1].inhabitants.push(name);
	 	}
	 	else{
	 		console.log("flat is not defined");
	 	}
 	},
 	Clean: function(number){
 		if(isFinite(number) && (number <= this.flats.length) && number){
	 		 this.flats[number-1].inhabitants.length = 0;
	 		 for(var i = 0; i < this.inhabitants.length; i++){
	 		 	if(this.inhabitants[i].flatNumber == number){
	 		 		this.inhabitants.splice(i, 1);
	 		 		i--;
	 		 	}
	 		 }
 		}
 		else{
 			console.log("flat is not defined");
 		}
 	},

 	ViewInhabitants: function(number){
 		if(isFinite(number) && (number <= this.flats.length) && number){
 			if(this.flats[number-1].inhabitants.length){
 				console.log("At the flat #" + number + " inhabitants: " + this.flats[number-1].inhabitants);
 			}
 			else{
 				console.log("At the flat #" + number + " inhabitants are not");
 			}
	 	}	
	 	else{
	 		console.error("The flat is not defined");
	 	}
 	},

 	Calculate: function(sum){
 		if(isFinite(Number(sum)) && (sum > 0)){
	 		var ALLSquare=0;
	 		var ALLCost = [];

	 		this.flats.forEach(function(e){
	 			if(e.inhabitants.length){
	 				ALLSquare +=e.square;
	 			}
	 		});

	 		this.flats.forEach(function(e){
	 			if(e.inhabitants.length){
	 				var cost = sum / ALLSquare * e.square / e.inhabitants.length;
	 				e.inhabitants.forEach(function(a){
	 					ALLCost.push({name: a, cost: cost});
	 				})
	 				
	 			}
	 		})

	 		ALLCost.forEach(function(e){
	 			console.log(name + " : " + e.cost.toFixed(2));
	 		})
		}
		else{
			console.error("Is not sum");
		}
 	}
}


for(var i = 0; i < Count_FLats; i++){
	Home.flats[i] = {
		square: Math.random()*25+30,
		floor: Math.ceil(Math.random()*Count_FLats/2), // по 2 квартиры на этаж
		inhabitants: []
	}
}

for(var i=0; i<names.length; i++){
	Home.inhabitants[i] = {
		name: names[i],
		flatNumber: Math.ceil(Math.random()*Count_FLats)
	}
	Home.flats[Home.inhabitants[i].flatNumber-1].inhabitants.push(names[i]) ;
}

console.log(Home);
Home.ViewInhabitants(3); //в аргумент номер квартиры
Home.addPerson("Denis", 2);
Home.ViewInhabitants(2); 
Home.Clean(2); 		// ЧИСТИМ 1 КВАРТИРУ
Home.ViewInhabitants(1); 
Home.Calculate(3000);
console.log(Home);
