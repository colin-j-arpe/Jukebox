var jukebox = {

}

var player = document.getElementsByTagName("audio")[0];
var playButton = document.getElementsByClassName("button")[0];
var pauseButton = document.getElementsByClassName("button")[1];
var volumeUpButton = document.getElementsByClassName("button")[2];
var volumeDownButton = document.getElementsByClassName("button")[3];

// playButton.addEventListener ("click", player.play());
playButton.addEventListener ("click", alert("button works"));
pauseButton.addEventListener ("click", player.pause());
volumeUpButton.addEventListener ("click", player.volume += 0.1);
volumeDownButton.addEventListener ("click", player.volume -= 0.1);

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