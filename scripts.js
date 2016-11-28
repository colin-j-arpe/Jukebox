var jukebox = {

}

var audio = document.getElementById("audio");
var player = document.getElementById("player");
player.volume = 0.5;
var playButton = document.getElementsByClassName("button")[0];
var pauseButton = document.getElementsByClassName("button")[1];
var volumeUpButton = document.getElementsByClassName("button")[2];
var volumeDownButton = document.getElementsByClassName("button")[3];
var songMenu = document.getElementById("song-menu");

playButton.addEventListener ("click", function () { player.play() });
// playButton.addEventListener ("click", function () {alert("button works")});
pauseButton.addEventListener ("click", function () { player.pause() });
volumeUpButton.addEventListener ("click", function () { 
	if (player.volume < 1)	{
		player.volume += 0.1;
	}	else 	{
		player.volume = 1;
	}
});
volumeDownButton.addEventListener ("click", function ()	{
	if (player.volume > 0)	{
		player.volume -= 0.1;
	}
});

songMenu.addEventListener("change", selectSong);

function selectSong ()	{
	if (songMenu.value === "load-track")	{
		newSong();
	}	else 	{
		loadSong();
	}
}

function loadSong ()	{
	if (songMenu.value === "song0")	{
		player.src = "Assets/Audio/Year Of Birds - Slack Handfuls of Nothing - 01 Foreign Habits.mp3";
	}
	if (songMenu.value === "song1")	{
		player.src = "Assets/Audio/Year Of Birds - Slack Handfuls of Nothing - 02 Grimms Law.mp3";
	}
	if (songMenu.value === "song2")	{
		player.src = "Assets/Audio/Year Of Birds - Slack Handfuls of Nothing - 03 Four Square House.mp3";
	}
	if (songMenu.value === "song3")	{
		player.src = "Assets/Audio/Copkiller - Alien Soccer - 02 The White Sheet.mp3";
	}

}

function Playlist (title)	{
	this.title = title;
	this.songs = [];
	this.addSong = function (newSong, position)	{
		this.songs.push(newSong);
		if (position !== null)	{
			for (var i = this.songs.length; i > position; i--) {
				songs[i] = songs[i-1];
			}
			songs[position] = newSong;
		}
	}
	this.shuffle = function ()	{
		this.songs = this.songs.sort (function () {return 0.5 - Math.random() });
	}
}