import axios from 'axios';

import UtilsHelper from './utils-helper'

const utilsHelper = new UtilsHelper();

export default class UserHelper {


    baseURI = "http://localhost:8080";

    headers = {
        "Access-Control-Allow-Origin": "*"
    };

    constructor() {

    }
    connect() {
        return {}
    }
    disconnect() {
        return {}
    }
    async getFavorites(userId) {
        console.log(userId);
        // Call HTTP 
        let favorites = [];
        await axios.get(this.baseURI + `/favorite/getAllByUserId?userId=${userId}`, { headers: this.headers })
            .then(res => {
                console.log(res.data);
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

    addToFavorites(type, userId, id) {
        console.log(type, userId, id);
        switch (type) {
            case "album":
                axios.post(this.baseURI + `/favorite/save`, {
                    userId: userId,
                    artist: null,
                    album: { id: id },
                    song: null
                }, { headers: this.headers })
                    .then(res => {
                        console.log(res.data);
                    })
                break;
            case "song":
                axios.post(this.baseURI + `/favorite/save`, {
                    userId: userId,
                    artist: null,
                    album: null,
                    song: { id: id }
                }, { headers: this.headers })
                    .then(res => {
                        console.log(res.data);
                    })
                break;
            case "artist":
                axios.post(this.baseURI + `/favorite/save`, {
                    userId: userId,
                    artist: { id: id },
                    album: null,
                    song: null
                }, { headers: this.headers })
                    .then(res => {
                        console.log(res.data);
                    })
                break;

            default:
                console.warn("type is not matching : 'album', 'artist' or 'song'");
                break;
        }
    }
}