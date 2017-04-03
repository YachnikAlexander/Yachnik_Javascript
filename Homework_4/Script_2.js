var Nomer_mobil = prompt("enter the number", '');
var reg_vir = /^(\+?)(3)(7)(5)[\s]?[\s/(]?(\d{2})[\s/)]?[\s]?(\d{3})[\s/-]?(\d{2})[\s-)]?(\d{2})$/;
var otvet = reg_vir.exec(Nomer_mobil);
otvet.shift();
if(otvet[0]!='+'){
	otvet.unshift('+');
	alert(otvet.slice(0,9).join(''));
}
else{
	alert(otvet.slice(0,9).join(''));
}


