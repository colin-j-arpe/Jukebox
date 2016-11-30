var players = document.getElementsByClassName("song-player");
var titles = document.getElementsByClassName("song-title");
var artists = document.getElementsByClassName("artist-name");
var buttons = document.getElementsByClassName("button");

var trackList = ["227994210", "266855447", "240957653", "133580206", "189752207", "147961911"];

for (var i = 0; i < trackList.length; i++) {
	players[i].style.display = "inline-block";
}

var trackIDstring = "/tracks/" + trackList[0];
SC.stream (trackIDstring).then(function(player) {
	buttons[0].addEventListener ("click", function () {player.play()});
	buttons[1].addEventListener ("click", function () {player.pause()});
});

var trackIDstring = "/tracks/" + trackList[1];
SC.stream (trackIDstring).then(function(player) {
	buttons[4].addEventListener ("click", function () {player.play()});
	buttons[5].addEventListener ("click", function () {player.pause()});
});

var trackIDstring = "/tracks/" + trackList[2];
SC.stream (trackIDstring).then(function(player) {
	buttons[8].addEventListener ("click", function () {player.play()});
	buttons[9].addEventListener ("click", function () {player.pause()});
});

var trackIDstring = "/tracks/" + trackList[3];
SC.stream (trackIDstring).then(function(player) {
	buttons[12].addEventListener ("click", function () {player.play()});
	buttons[13].addEventListener ("click", function () {player.pause()});
});

var trackIDstring = "/tracks/" + trackList[4];
SC.stream (trackIDstring).then(function(player) {
	buttons[16].addEventListener ("click", function () {player.play()});
	buttons[17].addEventListener ("click", function () {player.pause()});
});

var trackIDstring = "/tracks/" + trackList[5];
SC.stream (trackIDstring).then(function(player) {
	buttons[20].addEventListener ("click", function () {player.play()});
	buttons[21].addEventListener ("click", function () {player.pause()});
});


// function Jukebox (trackIDs) {
// 	if (trackIDs.length > 12) trackIDs.length = 12;
// 	this.trackStrings = [];
// 	for (var i = 0; i < trackIDs.length; i++) {
// 		var b = [];
// 		for (var j = 0; j < 4; j++)	{
// 			b[j] = 4 * i + j;
// 		}
// 		this.trackStrings[i] = "/tracks/" + trackIDs[i];
// 		players[i].style.display = "inline-block";
// 		SC.stream (this.trackStrings[i]). then (function (player) {
// 			buttons[b[0]].addEventListener ("click", function () {
// 				player.play();
// 			});
// 			buttons[b[1]].addEventListener ("click", function () {
// 				player.pause();
// 			});
// 		});
// 	}
// // 	this.play = function (index)	{
// // 		SC.stream (this.trackStrings[index]).then (function (player) {
// // 			buttons[index].addEventListener ("click", function () {
// // 	myJukebox.play (0);
// // });

// // 			// player.play ();
// // 			buttons[index+1].addEventListener ("click", function ()	{
// // 				player.pause ();
// // 			});
// // 		});
// // 	}
// // 	this.pause = function (index)	{
// // 		SC.stream (this.trackStrings[index]).then (function (player) {player.pause ()});
// // 	}
// };

// var myJukebox = new Jukebox (trackList);

// for (var i = 0; i < myJukebox.trackStrings.length; i++) {
// 	players[i].style.display = "inline-block";
// 	buttons[i*4].addEventListener ("click", function () {myJukebox.play (i) });
// 	buttons[i*4+1].addEventListener ("click", function () {myJukebox.pause (i) });
// };


// players[i].style.display = "inline-block";

// for (var i = 0; i < myJukebox.trackStrings.length; i+=4) {
// 	buttons[i].addEventListener ("click", function () {
// 	myJukebox.play (i/4);
// });

// }


// buttons[0].addEventListener ("click", function () {
// 	myJukebox.play (0);
// });
	// buttons[1].addEventListener ("click", function () {
// 	console.log(i);
// 	myJukebox.pause (0)
// });

// players[1].style.display = "inline-block";
// buttons[4].addEventListener ("click", function () {myJukebox.play (i) });
// buttons[5].addEventListener ("click", function () {myJukebox.pause (i) });

// players[2].style.display = "inline-block";
// buttons[8].addEventListener ("click", function () {myJukebox.play (i) });
// buttons[9].addEventListener ("click", function () {myJukebox.pause (i) });

// players[3].style.display = "inline-block";
// buttons[12].addEventListener ("click", function () {myJukebox.play (i) });
// buttons[13].addEventListener ("click", function () {myJukebox.pause (i) });

// players[4].style.display = "inline-block";
// buttons[16].addEventListener ("click", function () {myJukebox.play (i) });
// buttons[17].addEventListener ("click", function () {myJukebox.pause (i) });

// players[5].style.display = "inline-block";
// buttons[20].addEventListener ("click", function () {myJukebox.play (i) });
// buttons[21].addEventListener ("click", function () {myJukebox.pause (i) });

// var i = 0;
// var b1 = i*4+0;
// var b2 = i*4+1;
// var b3 = i*4+2;
// var b4 = i*4+3;

// var trackIDstring = "/tracks/" + trackList[i];
// 	SC.stream (trackIDstring).then(function(player) {
// 		buttons[b1].addEventListener ("click", function () {player.play()});
// 		buttons[b2].addEventListener ("click", function () {player.pause()});
// 		buttons[b3].addEventListener ("click", function () {player.volumeUp()});	
// 		buttons[b4].addEventListener ("click", function () {player.volumeDown()});
// 	});

// i = 1;
// var trackIDstring = "/tracks/" + trackList[i];
// 	SC.stream (trackIDstring).then(function(player) {
// 		buttons[4].addEventListener ("click", function () {player.play()});
// 		buttons[5].addEventListener ("click", function () {player.pause()});
// 		buttons[6].addEventListener ("click", function () {player.volumeUp()});	
// 		buttons[7].addEventListener ("click", function () {player.volumeDown()});
// 	});

// i = 2;
// var trackIDstring = "/tracks/" + trackList[i];
// 	SC.stream (trackIDstring).then(function(player) {
// 		buttons[(i*4)+0].addEventListener ("click", function () {player.play()});
// 		buttons[(i*4)+1].addEventListener ("click", function () {player.pause()});
// 		buttons[(i*4)+2].addEventListener ("click", function () {player.volumeUp()});	
// 		buttons[(i*4)+3].addEventListener ("click", function () {player.volumeDown()});
// 	});

// i = 3;
// var trackIDstring = "/tracks/" + trackList[i];
// 	SC.stream (trackIDstring).then(function(player) {
// 		buttons[12].addEventListener ("click", function () {player.play()});
// 		buttons[13].addEventListener ("click", function () {player.pause()});
// 		buttons[14].addEventListener ("click", function () {player.volumeUp()});	
// 		buttons[15].addEventListener ("click", function () {player.volumeDown()});
// 	});

// i = 4;
// var trackIDstring = "/tracks/" + trackList[i];
// 	SC.stream (trackIDstring).then(function(player) {
// 		buttons[(4*i)+0].addEventListener ("click", function () {player.play()});
// 		buttons[(4*i)+1].addEventListener ("click", function () {player.pause()});
// 		buttons[(4*i)+2].addEventListener ("click", function () {player.volumeUp()});	
// 		buttons[(4*i)+3].addEventListener ("click", function () {player.volumeDown()});
// 	});

// i = 5;
// var trackIDstring = "/tracks/" + trackList[i];
// 	SC.stream (trackIDstring).then(function(player) {
// 		buttons[(4*i)+0].addEventListener ("click", function () {player.play()});
// 		buttons[(4*i)+1].addEventListener ("click", function () {player.pause()});
// 		buttons[(4*i)+2].addEventListener ("click", function () {player.volumeUp()});	
// 		buttons[(4*i)+3].addEventListener ("click", function () {player.volumeDown()});
// 	});

// var tracks = [];

// for (var i = 0; i < trackList.length; i++) {
// 	var b1 = i*4+0;
// 	var b2 = i*4+1;
// 	var b3 = i*4+2;
// 	var b4 = i*4+3;
// 	var trackIDstring = "/tracks/" + trackList[i];
// 	// var track = SC.get (trackIDstring);
// 	// titles[i].innerText = track.title;
// 	SC.stream (trackIDstring).then(function(player) {
// 		buttons[b1].addEventListener ("click", function () {player.play()});
// 		buttons[b2].addEventListener ("click", function () {player.pause()});
// 		buttons[b3].addEventListener ("click", function () {player.volumeUp()});	
// 		buttons[b4].addEventListener ("click", function () {player.volumeDown()});
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