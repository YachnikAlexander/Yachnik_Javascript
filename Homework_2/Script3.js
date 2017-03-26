var n = prompt("Enter n",""), x = prompt("Enter x",""), sum = 0;
var mas = new Array();
for(i=0; i < n*1+1; i++){
	a = prompt("Enter number", "");
	mas[i] = a*Math.pow(x, i);
	sum = sum + mas[i];
}
alert("Sum = "+sum);