var elements = 0;
var comments = 0;
var text = 0;

var f = function(element){
	console.log(element);

	if(element.nodeType == 1) elements++;
	if(element.nodeType == 3) text++;
	if(element.nodeType == 8) comments++;

	if(element.childNodes.length){
		for (var i = 0; i < element.childNodes.length; i++) {
			f(element.childNodes[i]);
		}
	}
}
f(document);
console.log("Tags: " + elements);
console.log("comments :" + comments);
console.log("text :" + text);