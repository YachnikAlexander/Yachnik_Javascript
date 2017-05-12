var playBtn = document.querySelector(".playBtn");
var stopBtn = document.querySelector(".stopBtn");
var higherSpeedBtn = document.querySelector(".higherSpeedBtn");
var lowerSpeedBtn = document.querySelector(".lowerSpeedBtn");
var volumeBtn = document.querySelector(".volumeBtn");
var measureOfVolume = document.querySelector(".measureOfVolume");
var allFillingDiv = document.querySelector(".allFillingDiv");
var moveDiv = document.querySelector(".moveDiv");
var time = document.querySelector(".time");
var widthAllBlock = parseFloat(window.getComputedStyle(allFillingDiv).width);

var audio = new Audio();

var timeFromTheBegin = 0;
playBtn.addEventListener("click", function(){
	
	if(playBtn.classList.contains("playBtn")){
		audio.src = "Noize Mc.mp3";
		audio.currentTime = timeFromTheBegin;
		audio.play();
		playBtn.classList.remove("playBtn");
		playBtn.classList.toggle("pauseBtn");
	}
	else{
		audio.pause();
		playBtn.classList.remove("pauseBtn");
		playBtn.classList.toggle("playBtn");
		timeFromTheBegin = audio.currentTime;
		console.log(timeFromTheBegin)
	}	
});
stopBtn.addEventListener("click", function(){
	audio.pause();
	timeFromTheBegin = 0;
	playBtn.classList.remove("pauseBtn");
	playBtn.classList.toggle("playBtn");
});
higherSpeedBtn.addEventListener("click", function(){
	audio.playbackRate+=0.2;
});
lowerSpeedBtn.addEventListener("click", function(){
	audio.playbackRate-=0.2;
});
volumeBtn.addEventListener("click", function(){
	if(volumeBtn.classList.contains("volumeBtn")){
		audio.muted = true;
		volumeBtn.classList.remove("volumeBtn");
		volumeBtn.classList.toggle("volumeNoneBtn");
	}
	else{
		audio.muted = false;
		volumeBtn.classList.remove("volumeNoneBtn");
		volumeBtn.classList.toggle("volumeBtn");		
	};	
});
measureOfVolume.addEventListener("input", function(){
	audio.volume = measureOfVolume.value;
})
setInterval(function(){
	var widthMoveDiv = audio.currentTime/audio.duration*widthAllBlock;
	moveDiv.style.width = widthMoveDiv+"px";
}, 1000)

allFillingDiv.addEventListener("click", function(e){
	moveDiv.style.width = e.offsetX+"px";
	audio.currentTime = e.offsetX/widthAllBlock*audio.duration;
});
audio.onloadedmetadata = function(){
	setInterval(function(){
		var minutesCurrentTime = Math.floor(audio.currentTime/60);
		var secCurrentTime = Math.floor(audio.currentTime - minutesCurrentTime*60);
		var minutesDuration = Math.floor(audio.duration/60);
		var secDuration = Math.floor(audio.duration - minutesDuration*60);
		time.innerText = minutesCurrentTime+":"+secCurrentTime+"/"+minutesDuration+":"+secDuration ;
	}, 1000)
}


