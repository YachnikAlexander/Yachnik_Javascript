var a = prompt("Enter a number","");
while(!(a*1||a==0)){
	a = prompt("it's not a number, please, Enter a number","")
}
var b = prompt("Enter a operation, such as +, -, /, *","");

while(!(b == "+" || b == "-" || b == "/" || b == "*")){
	b = prompt("it's not a operation, please, Enter a operation","")
}
var c = prompt("Enter a number","");
while(!(c*1||c==0)){
	c = prompt("it's not a number, please, Enter a number","")
}
switch(b){
	case("+"):{alert(a*1 + c*1); break;}

	case("-"):{alert(a*1 - c*1); break;}

	case("/"):{	if(c*1 == 0) alert("it's not correct")
				else alert(a/c); break;}

	case("*"):{alert(a * c); break;}
}



