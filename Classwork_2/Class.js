var n = prompt("Enter the number", "");
var a = Math.sin(n);
var f=1;
var sum = 0;

for(var i=0; i<n; i++){
	for(j=1; j<=2*i-1;j++) f*=j;	
	sum  = sum + ((Math.pow(-1, i))*Math.pow(n, 2*i-1)/f);
}
alert(a);
alert(sum);


