window.onload = function() {

	if(!createjs.Sound.initializeDefaultPlugins()){return;};

	//SoundJS has the ability to preload sounds

	createjs.Sound.registerSound({id:"soundId", src:"audio/music.mp3|audio/music.ogg"});

	//listen for the file to load

	createjs.Sound.addEventListener("fileload", handleFileLoad);

	function handleFileLoad(event){
		//a sound has been loaded

		console.log("preloaded:", event.src);
		
		

		//play the loaded sound
		//createjs.Sound.play(event.src);


	}

	
	
	
	}

function playMusic(){

	//play the sound when button is clicked
	createjs.Sound.play("soundId");
}
