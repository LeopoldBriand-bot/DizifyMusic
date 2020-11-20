
import axios from 'axios';
import UtilsHelper from './utils-helper'
import bcrypt from 'bcryptjs';

const utilsHelper = new UtilsHelper();

export default class UserHelper {


    baseURI = "http://localhost:8080";

    headers = {
        "Access-Control-Allow-Origin": "*"
    };

    constructor() {

    }

    createUser(user) {
        console.log(user);
    }

    connectUser(user) {
        // TODO : appel BDD connexion user
        // TODO : recuperation token si valide tout mettre dans store

        console.log(user);
    }
    disconnectUSer() {
        return {}
    }

    encryptPassword(password) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        return hash
    }

    checkPassword(hash, bdd) {
        return bcrypt.compareSync(hash, bdd)
    }

    async getAllSongByPlaylistJoinId(userId, playlistId) {

        // Call HTTP 
        let songs = [];
        await axios.get(this.baseURI + `/playlist/getAllSongByPlaylistJoinId?playlistJoinId=${playlistId}`, { headers: this.headers })
            .then(res => {
                songs = res.data;
            })

        return songs;

        // return {
        //     songs: [{
        //         name: 'Harder, Better, Faster, Stronger',
        //         artist: 'Daft Punk',
        //         album: 'Discovery',
        //         image: 'https://api.deezer.com/album/302127/image'
        //     }]
        // }
    }

    async getPlaylistNameByPlaylistJoinId(userId, playlistId) {

        // Call HTTP 
        let playlist = {
            id: 0,
            userId: 0,
            name: "Generic PlayList Name",
            isPublic: false,
        };
        await axios.get(this.baseURI + `/playlistJoin/getById?id=${playlistId}`, { headers: this.headers })
            .then(res => {
                playlist = res.data;
            })

        return playlist;
    }


    async getPlaylists(userId) {
        // Call HTTP 
        let playlists = [];
        await axios.get(this.baseURI + `/playlistJoin/getAllByUserId?userId=${userId}`, { headers: this.headers })
            .then(res => {
                playlists = res.data;
            })
        return playlists;


        // return [
        //     {
        //         id: 12,
        //         name: "Playlist12"
        //     },
        //     {
        //         id: 10,
        //         name: "Playlist12"
        //     },
        //     {
        //         id: 15,
        //         name: "Playlist15"
        //     }
        // ]

    }
    async addPlaylist(userId, name) {
        await axios.post(this.baseURI + `/playlistJoin/save`,
            {
                userId: userId,
                name: name,
                isPublic: false
            }, { headers: this.headers })
    }

    async removePlaylist(id) {
        await axios.post(this.baseURI + `/playlistJoin/delete`,
            { id }, { headers: this.headers })
    }

    async addSongToPlaylist(songId, id) {
        console.log(songId, id)
        await axios.post(this.baseURI + `/playlist/save`,
            {
                playlistJoin: { id: id },
                song: { id: songId }
            }, { headers: this.headers })
    }

    async removeSongFromPlaylist(songId, id) {
        console.log(songId, id)
        await axios.post(this.baseURI + `/playlist/delete`,
            { id }, { headers: this.headers })
    }


    async getFavorites(userId) {

        // console.log(userId);
        // Call HTTP 
        let favorites = [];
        await axios.get(this.baseURI + `/favorite/getAllByUserId?userId=${userId}`, { headers: this.headers })
            .then(res => {
                // console.log(res.data);
                favorites = res.data;
            })

        let songs = favorites.filter(e => e.song != null).map(e => utilsHelper.mapSongs(e.song));
        let albums = favorites.filter(e => e.album != null).map(e => utilsHelper.mapAlbums(e.album));
        let artists = favorites.filter(e => e.artist != null).map(e => utilsHelper.mapArtists(e.artist));

        return {
            songs,
            albums,
            artists
        }
    }

    async addToFavorites(type, userId, id) {
        // console.log(type, userId, id);
        switch (type) {
            case "album":
                axios.post(this.baseURI + `/favorite/save`, {
                    userId: userId,
                    artist: null,
                    album: { id: id },
                    song: null
                }, { headers: this.headers })
                break;
            case "song":
                axios.post(this.baseURI + `/favorite/save`, {
                    userId: userId,
                    artist: null,
                    album: null,
                    song: { id: id }
                }, { headers: this.headers })
                break;
            case "artist":
                axios.post(this.baseURI + `/favorite/save`, {
                    userId: userId,
                    artist: { id: id },
                    album: null,
                    song: null
                }, { headers: this.headers })
                break;

            default:
                console.warn("type is not matching : 'album', 'artist' or 'song'");
                break;
        }
    }
}