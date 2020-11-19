


export default class UtilsHelper {


    mapSongs(song) {
        return {
            id: song.id,
            name: song.name,
            artist: song.artist ? song.artist.name : "",
            album: song.album ? song.album.name : "",
            image: song.album ? song.album.img : "",
            music: song.music
        }
    }

    mapAlbums(album) {
        return {
            id: album.id,
            title: album.title,
            date: album.date,
            image: album.img,
            artist: album.artist ? album.artist.name : ""
        }

    }

    mapArtists(artist) {
        return {
            id: artist.id,
            name: artist.name,
            image: artist.img,
        }
    }

}