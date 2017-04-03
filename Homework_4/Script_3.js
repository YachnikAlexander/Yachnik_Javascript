var n = 1; 
function usk(n){
 	return Math.pow(n, 1.1)+n;
 	console.log(n);
}
var k = setInterval(function () {
scrollBy(0, usk(n));
if(scrollY+innerHeight >= 50000 - 20){
clearInterval(k);
}
n = n+0.1;
}, 	n);


