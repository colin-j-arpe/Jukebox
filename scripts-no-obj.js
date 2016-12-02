var players = document.getElementsByClassName("song-player");
var titles = document.getElementsByClassName("song-title");
var songLinks = document.getElementsByClassName("title-link");
var genres = document.getElementsByClassName("genre-name");
var artLinks = document.getElementsByClassName("artwork-link");
var artPics = document.getElementsByClassName("song-image");
var buttons = document.getElementsByClassName("button");
var userLinks = document.getElementsByClassName("user-link");
var userPics = document.getElementsByClassName("user-image");

var trackList = ["227994210", "266855447", "240957653", "133580206", "189752207", "147961911"];

if (trackList.length > 12) {trackList.length = 12;}

buildPlayers (trackList, 0);
addMusic (trackList, 0);

function buildPlayers (list, index)	{
	players[index].style.display = "inline-block";
	var trackIDstring = "/tracks/" + list[index];
	SC.get (trackIDstring).then (function (reply) {
		titles[index].innerText = reply.title;
		songLinks[index].href = reply.permalink_url;
		genres[index].innerText = reply.genre;
		artPics[index].src = reply.artwork_url;
		artLinks[index].href = reply.permalink_url;
		userPics[index].src = reply.user.avatar_url;
		userLinks[index].href = reply.user.permalink_url;
		if (index < list.length-1)	{
console.log("running again " + index);
			buildPlayers (list, index+1);
		}
	});
	return;
}

function addMusic (list, index)	{
	var trackIDstring = "/tracks/" + list[index];
	SC.stream (trackIDstring).then(function(player) {
		buttons[(index*6)+0].addEventListener ("click", function () {player.play()});
		buttons[(index*6)+1].addEventListener ("click", function () {player.pause()});
		buttons[(index*6)+2].addEventListener ("click", function () {
			player.pause();
			player.seek(0);
		});
		buttons[(index*6)+3].addEventListener ("click", function () {
			if (player.getVolume() < 1) player.setVolume (player.getVolume() + 0.1);
		});
		buttons[(index*6)+4].addEventListener ("click", function () {
			if (player.getVolume() > 0) player.setVolume (player.getVolume() - 0.1);
		});
		buttons[(index*6)+5].addEventListener ("click", function () {
			if (player.getVolume() > 0)	{
				player.setVolume (0);
			}	else 	{
				player.setVolume (0.5);
			}
		});
		if (index < list.length-1)	{
console.log("next song " + index);
			addMusic (list, index+1);
		}
	});
	return;
}

// for (var i = 0; i < trackList.length; i++) {
// 	players[i].style.display = "inline-block";
// 	var trackIDstring = "/tracks/" + trackList[i];
// console.log(trackIDstring);
// 	var returned = false;
// 	var trackTitle = "";
// 	var trackGenre = "";
// 	var counter = i;
// 	SC.get (trackIDstring).then (function (reply) {
// 		titles[counter].innerText = reply.title;
// 		genres[counter].innerText = reply.genre;
// 		returned = true;
// 		console.log (reply.title);
// 	});
// 	// titles[i].innerText = trackTitle;
// 	// genres[i].innerText = trackGenre;
// 		// while (returned === false)	{
// 		// 	console.log	("waiting");
// 		// }
// }

// SC.stream (trackIDstring).then(function(player) {
// 	buttons[0].addEventListener ("click", function () {player.play()});
// 	buttons[1].addEventListener ("click", function () {player.pause()});
// 	buttons[2].addEventListener ("click", function () {
// 		if (player.getVolume() < 1) player.setVolume (player.getVolume() + 0.1);
// 	});
// 	buttons[3].addEventListener ("click", function () {
// 		if (player.getVolume() > 0) player.setVolume (player.getVolume() - 0.1);
// 	});
// });

// var trackIDstring = "/tracks/" + trackList[0];
// SC.get (trackIDstring).then (function (reply) {
// 	titles[0].innerText = reply.title;
// 	genres[0].innerText = reply.genre;
// });
// SC.stream (trackIDstring).then(function(player) {
// 	buttons[0].addEventListener ("click", function () {player.play()});
// 	buttons[1].addEventListener ("click", function () {player.pause()});
// 	buttons[2].addEventListener ("click", function () {
// 		if (player.getVolume() < 1) player.setVolume (player.getVolume() + 0.1);
// 	});
// 	buttons[3].addEventListener ("click", function () {
// 		if (player.getVolume() > 0) player.setVolume (player.getVolume() - 0.1);
// 	});
// });

// var trackIDstring = "/tracks/" + trackList[1];
// SC.get (trackIDstring).then (function (reply) {
// 	titles[1].innerText = reply.title;
// 	genres[1].innerText = reply.genre;
// });
// SC.stream (trackIDstring).then(function(player) {
// 	buttons[4].addEventListener ("click", function () {player.play()});
// 	buttons[5].addEventListener ("click", function () {player.pause()});
// 	buttons[6].addEventListener ("click", function () {
// 		if (player.getVolume() < 1) player.setVolume (player.getVolume() + 0.1);
// 	});
// 	buttons[7].addEventListener ("click", function () {
// 		if (player.getVolume() > 0) player.setVolume (player.getVolume() - 0.1);
// 	});
// });

// var trackIDstring = "/tracks/" + trackList[2];
// SC.get (trackIDstring).then (function (reply) {
// 	titles[2].innerText = reply.title;
// 	genres[2].innerText = reply.genre;
// });
// SC.stream (trackIDstring).then(function(player) {
// 	buttons[8].addEventListener ("click", function () {player.play()});
// 	buttons[9].addEventListener ("click", function () {player.pause()});
// 	buttons[10].addEventListener ("click", function () {
// 		if (player.getVolume() < 1) player.setVolume (player.getVolume() + 0.1);
// 	});
// 	buttons[11].addEventListener ("click", function () {
// 		if (player.getVolume() > 0) player.setVolume (player.getVolume() - 0.1);
// 	});
// });

// var trackIDstring = "/tracks/" + trackList[3];
// SC.get (trackIDstring).then (function (reply) {
// 	titles[3].innerText = reply.title;
// 	genres[3].innerText = reply.genre;
// });
// SC.stream (trackIDstring).then(function(player) {
// 	buttons[12].addEventListener ("click", function () {player.play()});
// 	buttons[13].addEventListener ("click", function () {player.pause()});
// 	buttons[14].addEventListener ("click", function () {
// 		if (player.getVolume() < 1) player.setVolume (player.getVolume() + 0.1);
// 	});
// 	buttons[15].addEventListener ("click", function () {
// 		if (player.getVolume() > 0) player.setVolume (player.getVolume() - 0.1);
// 	});
// });

// var trackIDstring = "/tracks/" + trackList[4];
// SC.get (trackIDstring).then (function (reply) {
// 	titles[4].innerText = reply.title;
// 	genres[4].innerText = reply.genre;
// });
// SC.stream (trackIDstring).then(function(player) {
// 	buttons[16].addEventListener ("click", function () {player.play()});
// 	buttons[17].addEventListener ("click", function () {player.pause()});
// 	buttons[18].addEventListener ("click", function () {
// 		if (player.getVolume() < 1) player.setVolume (player.getVolume() + 0.1);
// 	});
// 	buttons[19].addEventListener ("click", function () {
// 		if (player.getVolume() > 0) player.setVolume (player.getVolume() - 0.1);
// 	});
// });

// var trackIDstring = "/tracks/" + trackList[5];
// SC.get (trackIDstring).then (function (reply) {
// 	titles[5].innerText = reply.title;
// 	genres[5].innerText = reply.genre;
// });
// SC.stream (trackIDstring).then(function(player) {
// 	buttons[20].addEventListener ("click", function () {player.play()});
// 	buttons[21].addEventListener ("click", function () {player.pause()});
// 	buttons[22].addEventListener ("click", function () {
// 		if (player.getVolume() < 1) player.setVolume (player.getVolume() + 0.1);
// 	});
// 	buttons[23].addEventListener ("click", function () {
// 		if (player.getVolume() > 0) player.setVolume (player.getVolume() - 0.1);
// 	});
// });