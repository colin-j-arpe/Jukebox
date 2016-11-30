var players = document.getElementsByClassName("song-player");
var titles = document.getElementsByClassName("song-title");
var artists = document.getElementsByClassName("artist-name");
var buttons = document.getElementsByClassName("button");
var trackList = ["227994210", "266855447", "240957653", "133580206", "189752207", "147961911"]

var trackIDstring = "/tracks/" + trackList[0];
	SC.stream (trackIDstring).then(function(player) {
		buttons[0].addEventListener ("click", function () {player.play()});
		buttons[1].addEventListener ("click", function () {player.pause()});
		buttons[2].addEventListener ("click", function () {player.volumeUp()});	
		buttons[3].addEventListener ("click", function () {player.volumeDown()});
	});

var trackIDstring = "/tracks/" + trackList[1];
	SC.stream (trackIDstring).then(function(player) {
		buttons[4].addEventListener ("click", function () {player.play()});
		buttons[5].addEventListener ("click", function () {player.pause()});
		buttons[6].addEventListener ("click", function () {player.volumeUp()});	
		buttons[7].addEventListener ("click", function () {player.volumeDown()});
	});

var trackIDstring = "/tracks/" + trackList[2];
	SC.stream (trackIDstring).then(function(player) {
		buttons[8].addEventListener ("click", function () {player.play()});
		buttons[9].addEventListener ("click", function () {player.pause()});
		buttons[10].addEventListener ("click", function () {player.volumeUp()});	
		buttons[11].addEventListener ("click", function () {player.volumeDown()});
	});

var trackIDstring = "/tracks/" + trackList[3];
	SC.stream (trackIDstring).then(function(player) {
		buttons[12].addEventListener ("click", function () {player.play()});
		buttons[13].addEventListener ("click", function () {player.pause()});
		buttons[14].addEventListener ("click", function () {player.volumeUp()});	
		buttons[15].addEventListener ("click", function () {player.volumeDown()});
	});

var trackIDstring = "/tracks/" + trackList[4];
	SC.stream (trackIDstring).then(function(player) {
		buttons[16].addEventListener ("click", function () {player.play()});
		buttons[17].addEventListener ("click", function () {player.pause()});
		buttons[18].addEventListener ("click", function () {player.volumeUp()});	
		buttons[19].addEventListener ("click", function () {player.volumeDown()});
	});

var trackIDstring = "/tracks/" + trackList[5];
	SC.stream (trackIDstring).then(function(player) {
		buttons[20].addEventListener ("click", function () {player.play()});
		buttons[21].addEventListener ("click", function () {player.pause()});
		buttons[22].addEventListener ("click", function () {player.volumeUp()});	
		buttons[23].addEventListener ("click", function () {player.volumeDown()});
	});

// var tracks = [];

// for (var i = 0; i < trackList.length; i++) {
// 	var trackIDstring = "/tracks/" + trackList[i];
// 	// var track = SC.get (trackIDstring);
// 	// titles[i].innerText = track.title;
// 	tracks[i] = SC.stream (trackIDstring).then(function(player) {
// 		buttons[(4 * i) + 0].addEventListener ("click", function () {player.play()});
// 		buttons[(4 * i) + 1].addEventListener ("click", function () {player.pause()});
// 		buttons[(4 * i) + 2].addEventListener ("click", function () {player.volumeUp()});	
// 		buttons[(4 * i) + 3].addEventListener ("click", function () {player.volumeDown()});
// 	});
// }

// var song1 = new Song (trackList[0], 0);
// titles[0].innerText = song1.track._result.title;

// function Song (trackID, index)	{
// 	this.trackIDstring = "/tracks/" + trackID;
// 	this.track = SC.get (this.trackIDstring);
	// SC.stream (this.trackIDstring).then(function(player) {
// 		button[(4 * index) + 0].addEventListener ("click", function () {player.play()});
// 		button[(4 * index) + 1].addEventListener ("click", function () {player.pause()});
// 		button[(4 * index) + 2].addEventListener ("click", function () {player.volumeUp()});	
// 		button[(4 * index) + 3].addEventListener ("click", function () {player.volumeDown()});
// 	});
// }


// for (var i = 0; i < trackList.length; i++) {
// 	var song = new Song (trackList[i], i);
// 	titles[i].innerText = song.track.title;
// 	// artists[index].innerText = this.track.Artist;
// }


// var scPlayer = $("#sc-player");

// $(document).ready(function()	{


	// SC.stream("/tracks/227994210").then(function(player) {
	// 	playButton.addEventListener ("click", function () { player.play() });
	// 	pauseButton.addEventListener ("click", function () { player.pause() });	
	// 	// player.play();
	// });

// 	var song01 = SC.get ("/tracks/227994210");
// 	// $(scPlayer).attr("src", song01);


// 	// SC.get("/tracks", {
// 	// 	q:"paleta"
// 	// }).then(function(response) {
// 	// 	console.log(response);
// 	// });

// 	var jukebox = {

// 	}

// 	var audio = document.getElementById("audio");
// 	var player = document.getElementById("player");
// 	player.volume = 0.5;
	// var playButton = document.getElementsByClassName("button")[0];
	// var pauseButton = document.getElementsByClassName("button")[1];
// 	var volumeUpButton = document.getElementsByClassName("button")[2];
// 	var volumeDownButton = document.getElementsByClassName("button")[3];
// 	var songMenu = document.getElementById("song-menu");
// 	var userSong = document.getElementById("new-song-file");

// 	playButton.addEventListener ("click", function () { player.play() });
// 	// playButton.addEventListener ("click", function () {alert("button works")});
// 	pauseButton.addEventListener ("click", function () { player.pause() });
// 	volumeUpButton.addEventListener ("click", function () { 
// 		if (player.volume < 1)	{
// 			player.volume += 0.1;
// 		}	else 	{
// 			player.volume = 1;
// 		}
// 	});
// 	volumeDownButton.addEventListener ("click", function ()	{
// 		if (player.volume > 0)	{
// 			player.volume -= 0.1;
// 		}
// 	});

// 	songMenu.addEventListener("change", selectSong);

// 	function selectSong ()	{
// 		if (songMenu.value === "load-track")	{
// 			newSong();
// 		}	else 	{
// 			loadSong();
// 		}
// 	}

// 	// function loadSong ()	{
// 	// 	if (songMenu.value === "song0")	{
// 	// 		player.src = "Assets/Audio/Year Of Birds - Slack Handfuls of Nothing - 01 Foreign Habits.mp3";
// 	// 	}
// 	// 	if (songMenu.value === "song1")	{
// 	// 		player.src = "Assets/Audio/Year Of Birds - Slack Handfuls of Nothing - 02 Grimms Law.mp3";
// 	// 	}
// 	// 	if (songMenu.value === "song2")	{
// 	// 		player.src = "Assets/Audio/Year Of Birds - Slack Handfuls of Nothing - 03 Four Square House.mp3";
// 	// 	}
// 	// 	if (songMenu.value === "song3")	{
// 	// 		player.src = "Assets/Audio/Copkiller - Alien Soccer - 02 The White Sheet.mp3";
// 	// 	}

// 	// }

// 	function newSong ()	{
// 		userSong.click();
// 	// console.log(document.getElementById("new-song-file").value);
// 		userSong.addEventListener("change", function ()	{
// 			player.src = document.getElementById("new-song-file").files[0];
// 	// console.log(document.getElementById("new-song-file").files[0]);
// 		});

// 	}

// 	// userSong.addEventListener ("input", )

// 	function Playlist (title)	{
// 		this.title = title;
// 		this.songs = [];
// 		this.addSong = function (newSong, position)	{
// 			this.songs.push(newSong);
// 			if (position !== null)	{
// 				for (var i = this.songs.length; i > position; i--) {
// 					songs[i] = songs[i-1];
// 				}
// 				songs[position] = newSong;
// 			}
// 		}
// 		this.shuffle = function ()	{
// 			this.songs = this.songs.sort (function () {return 0.5 - Math.random() });
// 		}
// 	}
// });