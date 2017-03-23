var a = prompt("Enter a number",''), chislo = 0;
stroka = a.toString();
n = stroka.length;
for(i=0; i<n; i++)
{
	var c=(stroka.charAt(i)*1);
	
	chislo+=c;
}
alert(chislo);
