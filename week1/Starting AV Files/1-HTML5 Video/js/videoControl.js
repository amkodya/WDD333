var vid;

window.onload=function(){

	//link to video
	vid = document.getElementById("vid")
}


function pauseToggle(){

	//test video and determine if it is paused
	// .paused is a boolean property

	if(vid.paused){

		//play video
		vid.play();

	}else{

		//pause video
		vid.pause();
	}

}

function clicked(){

	//currentTime - current play time in seconds

	//jump ahead 2 seconds
	vid.currentTime +=2;
}