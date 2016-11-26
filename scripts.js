var jukebox = {

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
}