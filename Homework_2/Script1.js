var n = prompt("Enter N",""), s = prompt("Enter S",""), p = prompt("Enter P",""), sum=0;
var mas = new Array(n);
for(var i=0;i<n;i++){
	mas[i]=Math.random()*(s*p*2/100)+(s-(s*p/100));
	sum = sum + mas[i];
}
for(var i=0; i<n-1; i++){
	if(mas[i]>mas[i+1]) {
		var swap = mas[i];
		mas[i] = mas[i+1];
		mas[i+1] = swap;
	}
}
alert(mas);
alert(sum/n);