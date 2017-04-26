var Block1 = document.querySelector(".Block1");
var Block2 = document.querySelector(".Block2");
var Block3 = document.querySelector(".Block3");
var Block4 = document.querySelector(".Block4");
var Block5 = document.querySelector(".Block5");
var Block6 = document.querySelector(".Block6");
var Block7 = document.querySelector(".Block7");
var Block8 = document.querySelector(".Block8");
var Block9 = document.querySelector(".Block9");

var winner1 = document.querySelector(".winner1");
var winner2 = document.querySelector(".winner2");
var no = document.querySelector(".No");
var proverka;

var count_krest = 0;
var count_nol = 0;

var Block1_krug = 0;
var Block2_krug = 0;
var Block3_krug = 0;
var Block4_krug = 0;
var Block5_krug = 0;
var Block6_krug = 0;
var Block7_krug = 0;
var Block8_krug = 0;
var Block9_krug = 0;

var blockKrug = [[0,0,0],[0,0,0],[0,0,0]];


var Block1_krest = 0;
var Block2_krest = 0;
var Block3_krest = 0;
var Block4_krest = 0;
var Block5_krest = 0;
var Block6_krest = 0;
var Block7_krest = 0;
var Block8_krest = 0;
var Block9_krest = 0;

var masBlock = new Array();
masBlock.push(Block1);
masBlock.push(Block2);
masBlock.push(Block3);
masBlock.push(Block4);
masBlock.push(Block5);
masBlock.push(Block6);
masBlock.push(Block7);
masBlock.push(Block8);
masBlock.push(Block9);



Block1.addEventListener("click", function(){
	if(count_krest == count_nol && window.getComputedStyle(Block1).backgroundImage == "none"){
		Block1.style.backgroundImage = "url(\"krest.jpg\")";
		count_krest++;
		Block1_krest = 7;
	}

	//Проверка

	if(Block1_krest+Block4_krest+Block7_krest == 18){
		winner1.style.display = "block";
		proverka = 1;
	}
	

	if(Block1_krest+Block2_krest+Block3_krest == 18){
		winner1.style.display = "block";
		proverka = 1;
	}
	

	if(Block1_krest+Block5_krest+Block9_krest == 18){
		winner1.style.display = "block";
		proverka = 1;
	}

	if(count_krest == 5 && proverka !=1){
		no.style.display = "block"
	}

	if(count_krest != count_nol && count_krest <= 4){
		var comp = Math.round(Math.random()*8);
		while(window.getComputedStyle(masBlock[comp]).backgroundImage !="none"){
			comp = Math.round(Math.random()*8);	
		}

		if(comp == 0){
			Block1_krug = 7;
		}

		if(comp == 1){
			Block2_krug = 2;
		}

		if(comp == 2){
			Block3_krug = 9;
		}

		if(comp == 3){
			Block4_krug = 8;
		}

		if(comp == 4){
			Block5_krug = 6;
		}

		if(comp == 5){
			Block6_krug = 4;
		}

		if(comp == 6){
			Block7_krug = 3;
		}

		if(comp == 7){
			Block8_krug = 10;
		}

		if(comp == 8){
			Block9_krug = 5;
		}


		masBlock[comp].style.backgroundImage = "url(\"krug.jpg\")";
		count_nol++; 

		//Проверка

		if (Block1_krug+Block4_krug+Block7_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block3_krug+Block2_krug+Block1_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block1_krug+Block5_krug+Block9_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block2_krug+Block5_krug+Block8_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block3_krug+Block5_krug+Block7_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block3_krug+Block6_krug+Block9_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block4_krug+Block5_krug+Block6_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block3_krug+Block6_krug+Block9_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
	}
})

Block2.addEventListener("click", function(){
	if(count_krest == count_nol && window.getComputedStyle(Block2).backgroundImage == "none"){
		Block2.style.backgroundImage = "url(\"krest.jpg\")";
		count_krest++;
		Block2_krest =2;
	}


	//Проверка

	if(Block1_krest+Block2_krest+Block3_krest == 18){
		winner1.style.display = "block";
		proverka = 1;
	}
	

	if(Block2_krest+Block5_krest+Block8_krest == 18){
		winner1.style.display = "block";
		proverka = 1;
	}

	if(count_krest == 5 && proverka !=1){
		no.style.display = "block"
	}

	if(count_krest != count_nol && count_krest <= 4){
		var comp = Math.round(Math.random()*8);
		while(window.getComputedStyle(masBlock[comp]).backgroundImage !="none"){
			comp = Math.round(Math.random()*8);
			console.log(comp) 	
		}

		if(comp == 0){
			Block1_krug = 7;
		}

		if(comp == 1){
			Block2_krug = 2;
		}

		if(comp == 2){
			Block3_krug = 9;
		}

		if(comp == 3){
			Block4_krug = 8;
		}

		if(comp == 4){
			Block5_krug = 6;
		}

		if(comp == 5){
			Block6_krug = 4;
		}

		if(comp == 6){
			Block7_krug = 3;
		}

		if(comp == 7){
			Block8_krug = 10;
		}

		if(comp == 8){
			Block9_krug = 5;
		}


		masBlock[comp].style.backgroundImage = "url(\"krug.jpg\")";
		count_nol++; 

		//Проверка

		if (Block1_krug+Block4_krug+Block7_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block3_krug+Block2_krug+Block1_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block1_krug+Block5_krug+Block9_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block2_krug+Block5_krug+Block8_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block3_krug+Block5_krug+Block7_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block3_krug+Block6_krug+Block9_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block4_krug+Block5_krug+Block6_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block3_krug+Block6_krug+Block9_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
	}

})

Block3.addEventListener("click", function(){
	if(count_krest == count_nol && window.getComputedStyle(Block3).backgroundImage == "none"){
		Block3.style.backgroundImage = "url(\"krest.jpg\")";
		count_krest++;
		Block3_krest = 9;
	}


	//Проверка

	if(Block1_krest+Block2_krest+Block3_krest == 18){
		winner1.style.display = "block";
		proverka = 1;
	}
	

	if(Block3_krest+Block5_krest+Block7_krest == 18){
		winner1.style.display = "block";
		proverka = 1;
	}
	

	if(Block3_krest+Block6_krest+Block9_krest == 18){
		winner1.style.display = "block";
		proverka = 1;
	}

	if(count_krest == 5 && proverka !=1){
		no.style.display = "block"
	}
	
	if(count_krest != count_nol && count_krest <= 4){
		var comp = Math.round(Math.random()*8);
		while(window.getComputedStyle(masBlock[comp]).backgroundImage !="none"){
			comp = Math.round(Math.random()*8);
			console.log(comp) 	
		}

		if(comp == 0){
			Block1_krug = 7;
		}

		if(comp == 1){
			Block2_krug = 2;
		}

		if(comp == 2){
			Block3_krug = 9;
		}

		if(comp == 3){
			Block4_krug = 8;
		}

		if(comp == 4){
			Block5_krug = 6;
		}

		if(comp == 5){
			Block6_krug = 4;
		}

		if(comp == 6){
			Block7_krug = 3;
		}

		if(comp == 7){
			Block8_krug = 10;
		}

		if(comp == 8){
			Block9_krug = 5;
		}

		masBlock[comp].style.backgroundImage = "url(\"krug.jpg\")";
		count_nol++; 

		//Проверка

		if (Block1_krug+Block4_krug+Block7_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block3_krug+Block2_krug+Block1_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block1_krug+Block5_krug+Block9_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block2_krug+Block5_krug+Block8_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block3_krug+Block5_krug+Block7_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block3_krug+Block6_krug+Block9_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block4_krug+Block5_krug+Block6_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block3_krug+Block6_krug+Block9_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
	}
	
})

Block4.addEventListener("click", function(){
	if(count_krest == count_nol && window.getComputedStyle(Block4).backgroundImage == "none"){
		Block4.style.backgroundImage = "url(\"krest.jpg\")";
		count_krest++;
		Block4_krest = 8;
	}


	//Проверка

	if(Block1_krest+Block4_krest+Block7_krest == 18){
		winner1.style.display = "block";
		proverka = 1;
	}
	

	if(Block4_krest+Block5_krest+Block6_krest == 18){
		winner1.style.display = "block";
		proverka = 1;
	}

	if(count_krest == 5 && proverka !=1){
		no.style.display = "block"
	}

	if(count_krest != count_nol && count_krest <= 4){
		var comp = Math.round(Math.random()*8);
		while(window.getComputedStyle(masBlock[comp]).backgroundImage !="none"){
			comp = Math.round(Math.random()*8);
			console.log(comp) 	
		}

		if(comp == 0){
			Block1_krug = 7;
		}

		if(comp == 1){
			Block2_krug = 2;
		}

		if(comp == 2){
			Block3_krug = 9;
		}

		if(comp == 3){
			Block4_krug = 8;
		}

		if(comp == 4){
			Block5_krug = 6;
		}

		if(comp == 5){
			Block6_krug = 4;
		}

		if(comp == 6){
			Block7_krug = 3;
		}

		if(comp == 7){
			Block8_krug = 10;
		}

		if(comp == 8){
			Block9_krug = 5;
		}


		masBlock[comp].style.backgroundImage = "url(\"krug.jpg\")";
		count_nol++; 

		//Проверка

		if (Block1_krug+Block4_krug+Block7_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block3_krug+Block2_krug+Block1_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block1_krug+Block5_krug+Block9_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block2_krug+Block5_krug+Block8_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block3_krug+Block5_krug+Block7_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block3_krug+Block6_krug+Block9_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block4_krug+Block5_krug+Block6_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block3_krug+Block6_krug+Block9_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
	}
	

})

Block5.addEventListener("click", function(){
	if(count_krest == count_nol && window.getComputedStyle(Block5).backgroundImage == "none"){
		Block5.style.backgroundImage = "url(\"krest.jpg\")";
		count_krest++;
		Block5_krest = 6;
	}


	//Проверка

	if(Block1_krest+Block5_krest+Block9_krest == 18){
		winner1.style.display = "block";
		proverka = 1;
	}


	if(Block3_krest+Block5_krest+Block7_krest == 18){
		winner1.style.display = "block";
		proverka = 1;
	}
	

	if(Block4_krest+Block5_krest+Block6_krest == 18){
		winner1.style.display = "block";
		proverka = 1;
	}


	if(Block2_krest+Block5_krest+Block8_krest == 18){
		winner1.style.display = "block";
		proverka = 1;
	}

	if(count_krest == 5 && proverka !=1){
		no.style.display = "block"
	}

	if(count_krest != count_nol && count_krest <= 4){
		var comp = Math.round(Math.random()*8);
		while(window.getComputedStyle(masBlock[comp]).backgroundImage !="none"){
			comp = Math.round(Math.random()*8);
			console.log(comp) 	
		}

		if(comp == 0){
			Block1_krug = 7;
		}

		if(comp == 1){
			Block2_krug = 2;
		}

		if(comp == 2){
			Block3_krug = 9;
		}

		if(comp == 3){
			Block4_krug = 8;
		}

		if(comp == 4){
			Block5_krug = 6;
		}

		if(comp == 5){
			Block6_krug = 4;
		}

		if(comp == 6){
			Block7_krug = 3;
		}

		if(comp == 7){
			Block8_krug = 10;
		}

		if(comp == 8){
			Block9_krug = 5;
		}


		masBlock[comp].style.backgroundImage = "url(\"krug.jpg\")";
		count_nol++; 

		//Проверка

		if (Block1_krug+Block4_krug+Block7_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block3_krug+Block2_krug+Block1_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block1_krug+Block5_krug+Block9_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block2_krug+Block5_krug+Block8_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block3_krug+Block5_krug+Block7_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block3_krug+Block6_krug+Block9_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block4_krug+Block5_krug+Block6_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block3_krug+Block6_krug+Block9_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
	}
	
})

Block6.addEventListener("click", function(){
	if(count_krest == count_nol && window.getComputedStyle(Block6).backgroundImage == "none"){
		Block6.style.backgroundImage = "url(\"krest.jpg\")";
		count_krest++;
		Block6_krest = 4;
	}


	//Проверка

	if(Block3_krest+Block6_krest+Block9_krest == 18){
		winner1.style.display = "block";
		proverka = 1;
	}
	
	if(Block4_krest+Block5_krest+Block6_krest == 18){
		winner1.style.display = "block";
		proverka = 1;
	}

	if(count_krest == 5 && proverka !=1){
		no.style.display = "block"
	}

	if(count_krest != count_nol && count_krest <= 4){
		var comp = Math.round(Math.random()*8);
		while(window.getComputedStyle(masBlock[comp]).backgroundImage !="none"){
			comp = Math.round(Math.random()*8);
			console.log(comp) 	
		}

		if(comp == 0){
			Block1_krug = 7;
		}

		if(comp == 1){
			Block2_krug = 2;
		}

		if(comp == 2){
			Block3_krug = 9;
		}

		if(comp == 3){
			Block4_krug = 8;
		}

		if(comp == 4){
			Block5_krug = 6;
		}

		if(comp == 5){
			Block6_krug = 4;
		}

		if(comp == 6){
			Block7_krug = 3;
		}

		if(comp == 7){
			Block8_krug = 10;
		}

		if(comp == 8){
			Block9_krug = 5;
		}


		masBlock[comp].style.backgroundImage = "url(\"krug.jpg\")";
		count_nol++; 

		//Проверка

		if (Block1_krug+Block4_krug+Block7_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block3_krug+Block2_krug+Block1_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block1_krug+Block5_krug+Block9_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block2_krug+Block5_krug+Block8_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block3_krug+Block5_krug+Block7_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block3_krug+Block6_krug+Block9_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block4_krug+Block5_krug+Block6_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block3_krug+Block6_krug+Block9_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
	}

})

Block7.addEventListener("click", function(){
	if(count_krest == count_nol && window.getComputedStyle(Block7).backgroundImage == "none"){
		Block7.style.backgroundImage = "url(\"krest.jpg\")";
		count_krest++;
		Block7_krest = 3;
	}


	//Проверка

	if(Block1_krest+Block4_krest+Block7_krest == 18){
		winner1.style.display = "block";
		proverka = 1;
	}
	
	if(Block3_krest+Block5_krest+Block7_krest == 18){
		winner1.style.display = "block";
		proverka = 1;
	}
	

	if(Block8_krest+Block9_krest+Block7_krest == 18){
		winner1.style.display = "block";
		proverka = 1;
	}
	
	if(count_krest == 5 && proverka !=1){
		no.style.display = "block"
	}

	if(count_krest != count_nol && count_krest <= 4){
		var comp = Math.round(Math.random()*8);
		while(window.getComputedStyle(masBlock[comp]).backgroundImage !="none"){
			comp = Math.round(Math.random()*8);
			console.log(comp) 	
		}

		if(comp == 0){
			Block1_krug = 7;
		}

		if(comp == 1){
			Block2_krug = 2;
		}

		if(comp == 2){
			Block3_krug = 9;
		}

		if(comp == 3){
			Block4_krug = 8;
		}

		if(comp == 4){
			Block5_krug = 6;
		}

		if(comp == 5){
			Block6_krug = 4;
		}

		if(comp == 6){
			Block7_krug = 3;
		}

		if(comp == 7){
			Block8_krug = 10;
		}

		if(comp == 8){
			Block9_krug = 5;
		}


		masBlock[comp].style.backgroundImage = "url(\"krug.jpg\")";
		count_nol++; 

		//Проверка

		if (Block1_krug+Block4_krug+Block7_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block3_krug+Block2_krug+Block1_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block1_krug+Block5_krug+Block9_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block2_krug+Block5_krug+Block8_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block3_krug+Block5_krug+Block7_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block3_krug+Block6_krug+Block9_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block4_krug+Block5_krug+Block6_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block3_krug+Block6_krug+Block9_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
	}
})

Block8.addEventListener("click", function(){
	if(count_krest == count_nol && window.getComputedStyle(Block8).backgroundImage == "none"){
		Block8.style.backgroundImage = "url(\"krest.jpg\")";
		count_krest++;
		Block8_krest = 10;
	}
	
	//Проверка

	if(Block2_krest+Block5_krest+Block8_krest == 18){
		winner1.style.display = "block";
		proverka = 1;
	}
	

	if(Block7_krest+Block8_krest+Block9_krest == 18){
		winner1.style.display = "block";
		proverka = 1;
	}

	if(count_krest == 5 && proverka !=1){
		no.style.display = "block"
	}

	if(count_krest != count_nol && count_krest <= 4){
		var comp = Math.round(Math.random()*8);
		while(window.getComputedStyle(masBlock[comp]).backgroundImage !="none"){
			comp = Math.round(Math.random()*8);
			console.log(comp) 	
		}

		if(comp == 0){
			Block1_krug = 7;
		}

		if(comp == 1){
			Block2_krug = 2;
		}

		if(comp == 2){
			Block3_krug = 9;
		}

		if(comp == 3){
			Block4_krug = 8;
		}

		if(comp == 4){
			Block5_krug = 6;
		}

		if(comp == 5){
			Block6_krug = 4;
		}

		if(comp == 6){
			Block7_krug = 3;
		}

		if(comp == 7){
			Block8_krug = 10;
		}

		if(comp == 8){
			Block9_krug = 5;
		}

		masBlock[comp].style.backgroundImage = "url(\"krug.jpg\")";
		count_nol++; 

		//Проверка

		if (Block1_krug+Block4_krug+Block7_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block3_krug+Block2_krug+Block1_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block1_krug+Block5_krug+Block9_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block2_krug+Block5_krug+Block8_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block3_krug+Block5_krug+Block7_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block3_krug+Block6_krug+Block9_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block4_krug+Block5_krug+Block6_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block3_krug+Block6_krug+Block9_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
	}

})

Block9.addEventListener("click", function(){
	if(count_krest == count_nol && window.getComputedStyle(Block9).backgroundImage == "none"){
		Block9.style.backgroundImage = "url(\"krest.jpg\")";
		count_krest++;
		Block9_krest = 5;
	}


	//Проверка

	if(Block3_krest+Block6_krest+Block9_krest == 18){
		winner1.style.display = "block";
		proverka = 1;
	}

	if(Block7_krest+Block8_krest+Block9_krest == 18){
		winner1.style.display = "block";
		proverka = 1;
	}

	if(Block1_krest+Block5_krest+Block9_krest == 18){
		winner1.style.display = "block";
		proverka = 1;
	}

	if(count_krest == 5 && proverka !=1){
		no.style.display = "block"
	}

	if(count_krest != count_nol && count_krest <= 4){
		var comp = Math.round(Math.random()*8);
		while(window.getComputedStyle(masBlock[comp]).backgroundImage !="none"){
			comp = Math.round(Math.random()*8); 	
		}

		masBlock[comp].style.backgroundImage = "url(\"krug.jpg\")";
		count_nol++; 

		if(comp == 0){
			Block1_krug = 7;
		}

		if(comp == 1){
			Block2_krug = 2;
		}

		if(comp == 2){
			Block3_krug = 9;
		}

		if(comp == 3){
			Block4_krug = 8;
		}

		if(comp == 4){
			Block5_krug = 6;
		}

		if(comp == 5){
			Block6_krug = 4;
		}

		if(comp == 6){
			Block7_krug = 3;
		}

		if(comp == 7){
			Block8_krug = 10;
		}

		if(comp == 8){
			Block9_krug = 5;
		}


		//Проверка

		if (Block1_krug+Block4_krug+Block7_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block3_krug+Block2_krug+Block1_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block1_krug+Block5_krug+Block9_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block2_krug+Block5_krug+Block8_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block3_krug+Block5_krug+Block7_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block3_krug+Block6_krug+Block9_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block4_krug+Block5_krug+Block6_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
		if (Block3_krug+Block6_krug+Block9_krug == 18){
			winner2.style.display = "block";
			proverka = 1;
		}
	}
})

