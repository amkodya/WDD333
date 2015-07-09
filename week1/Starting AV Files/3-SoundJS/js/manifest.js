window.onload = function() {

	if(!createjs.Sound.initializeDefaultPlugins()){return;};

	//create variable to hold path to audio files

	var audioPath = "audio/";
			
	//create an aray of objects, each object is a sound
	//Soundjs calls that a mnaifest

	var manifest = [
	{id:"Music", src:audioPath+"music.mp3|"+audioPath+"music.ogg"},
	{id:"Thunder", src:audioPath+"Thunder1.mp3|"+audioPath+"Thunder1.ogg"}

		];

		//register manifest with soundjs
		createjs.Sound.registerManifest(manifest);

		//listen for the files to load
		createjs.Sound.addEventListener("fileload", handleLoad);

		function handleLoad(event){

			//this will run ONCE each time a file is initially loaded
			//playing the file
			//createjs.Sound.play(event.src);

		}
	
	}	

	function playMusic(){

		//play just the music
		createjs.Sound.play("Music");
	}

	function playThunder(){
		//bring the thunder

		createjs.Sound.play("Thunder");
	}