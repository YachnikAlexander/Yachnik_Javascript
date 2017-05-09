var btnBlackWhite = document.querySelector(".btnBlackWhite")
var imgObj = document.getElementById('image'); 
var body = document.querySelector('body') 
function gray(imgObj) {  
        var canvas = document.createElement('canvas'); 

        var ctx = canvas.getContext('2d');  
 
        var imgW = imgObj.width;  
        var imgH = imgObj.height;  
        canvas.width = imgW;  
        canvas.height = imgH;  
 		
 		ctx.drawImage(imgObj, 0, 0);
          
        var imgPixels = ctx.getImageData(0, 0, imgW, imgH);  
        console.log(imgPixels)
 
        for(var y = 0; y < imgPixels.height; y++){  
            for(var x = 0; x < imgPixels.width; x++){  
                var i = (y * 4) * imgPixels.width + x * 4;  
                var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;  
                imgPixels.data[i] = avg;   
                imgPixels.data[i + 1] = avg;   
                imgPixels.data[i + 2] = avg;  
            }  
        }  
        ctx.putImageData(imgPixels, 0, 0,0,0, imgPixels.width, imgPixels.height);  
        return canvas.toDataURL();  
    }  
btnBlackWhite.addEventListener("click", function(){
        var img= document.createElement('img'); 
    	img.src = gray(imgObj);
    	body.appendChild(img);
    	img.setAttribute("style", "height:300px")
})
    
   




















