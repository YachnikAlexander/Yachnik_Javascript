var a = prompt("enter the string", ""), n = a.length, close = 0, open = 0, opensum=0, closesum=0;
for(var i = 0; i<n; i++){
	var close = a.charCodeAt("(");
	var open = a.charCodeAt(")");
	if(close<open){
		alert("not correct parantheses"); break;
	}
	else{
		if(a.charAt(i)=="(") opensum++;
		if(a.charAt(i)==")") closesum++;
	}
}
if(opensum==closesum && opensum) 
	alert("Correct parantheses");
else if(opensum)
	alert("Not Correct parantheses");
