var i=window.setInterval(function(){ 
window.scrollBy(0,3); 
if ((window.scrollY+window.innerHeight)>=1000-2){ 
clearInterval(i); 
} 
}, 15)
