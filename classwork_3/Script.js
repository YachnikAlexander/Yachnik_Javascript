
// function fact(n){
// 	return (n>=1) ?  (n*fact(n-1)):  1;
// 	//if(n>=1) 
// 	//return n*fact(n-1);
// 	//else return 1;
// } 

// var n = prompt("enter n","");
// alert(fact(n)); 




// var n = 100;
// var arr = new Array(100);
// for(var i=0; i<n; i++){
// 	(function(x){
// 		arr[x] = function(){
// 			alert(x);
// 		}
// 	})(i)
// }
// arr[75]();



// var arr = new Array();
// n = prompt("enter n", "");
// for(var i = 0; i<n*1; i++){
// 	arr[i] = Math.round(Math.random()*100);
// }
// arr.forEach(function(e){
// 	if(e%13 == 0) console.log(e);
// })
// console.log("map");
// console.log(
// 	arr.map(function(e){
// 	return e%13;
// 	})
// )
// console.log("filter");
// console.log(
// 	arr.filter(function(e){
// 	if(e%13 == 0){
// 		sum = 0;
// 		while(e){
// 			sum=sum+e%10;
// 			e=e/10;
// 		}
// 		if(sum<13) return true;
// 		else return false;
// 	}
// 	else return false;
// 	})
// )
// console.log("reduce");
// console.log(
// 	arr.reduce(function( prev, curr){
// 		var ostatok = curr%13;
// 		return (ostatok+prev);
// 	}, 0);
// )
summ = 0;
function sum(){
	for(var i = 0; i<arguments.length; i++){
		summ = summ + arguments[i];
	}
	console.log(summ);
}
sum(1, 3, 5, 6, 7);

