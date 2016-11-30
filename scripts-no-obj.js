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
	buttons[2].addEventListener ("click", function () {
		if (player.getVolume() < 1) player.setVolume (player.getVolume() + 0.1);
		console.log(player.getVolume());
	});
	buttons[3].addEventListener ("click", function () {
		if (player.getVolume() > 0) player.setVolume (player.getVolume() - 0.1);
	});
});

var trackIDstring = "/tracks/" + trackList[1];
SC.stream (trackIDstring).then(function(player) {
	buttons[4].addEventListener ("click", function () {player.play()});
	buttons[5].addEventListener ("click", function () {player.pause()});
	buttons[6].addEventListener ("click", function () {
		if (player.getVolume() < 1) player.setVolume (player.getVolume() + 0.1);
		console.log(player.getVolume());
	});
	buttons[7].addEventListener ("click", function () {
		if (player.getVolume() > 0) player.setVolume (player.getVolume() - 0.1);
	});
});

var trackIDstring = "/tracks/" + trackList[2];
SC.stream (trackIDstring).then(function(player) {
	buttons[8].addEventListener ("click", function () {player.play()});
	buttons[9].addEventListener ("click", function () {player.pause()});
	buttons[10].addEventListener ("click", function () {
		if (player.getVolume() < 1) player.setVolume (player.getVolume() + 0.1);
		console.log(player.getVolume());
	});
	buttons[11].addEventListener ("click", function () {
		if (player.getVolume() > 0) player.setVolume (player.getVolume() - 0.1);
	});
});

var trackIDstring = "/tracks/" + trackList[3];
SC.stream (trackIDstring).then(function(player) {
	buttons[12].addEventListener ("click", function () {player.play()});
	buttons[13].addEventListener ("click", function () {player.pause()});
	buttons[14].addEventListener ("click", function () {
		if (player.getVolume() < 1) player.setVolume (player.getVolume() + 0.1);
		console.log(player.getVolume());
	});
	buttons[15].addEventListener ("click", function () {
		if (player.getVolume() > 0) player.setVolume (player.getVolume() - 0.1);
	});
});

var trackIDstring = "/tracks/" + trackList[4];
SC.stream (trackIDstring).then(function(player) {
	buttons[16].addEventListener ("click", function () {player.play()});
	buttons[17].addEventListener ("click", function () {player.pause()});
	buttons[18].addEventListener ("click", function () {
		if (player.getVolume() < 1) player.setVolume (player.getVolume() + 0.1);
		console.log(player.getVolume());
	});
	buttons[19].addEventListener ("click", function () {
		if (player.getVolume() > 0) player.setVolume (player.getVolume() - 0.1);
	});
});

var trackIDstring = "/tracks/" + trackList[5];
SC.stream (trackIDstring).then(function(player) {
	buttons[20].addEventListener ("click", function () {player.play()});
	buttons[21].addEventListener ("click", function () {player.pause()});
	buttons[22].addEventListener ("click", function () {
		if (player.getVolume() < 1) player.setVolume (player.getVolume() + 0.1);
		console.log(player.getVolume());
	});
	buttons[23].addEventListener ("click", function () {
		if (player.getVolume() > 0) player.setVolume (player.getVolume() - 0.1);
	});
});


