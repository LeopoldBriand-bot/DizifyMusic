import Fuse from 'fuse.js';

import UtilsHelper from './utils-helper'

import axios from 'axios';
import CommonDataManager from '../stores/data.store'

const store = CommonDataManager.getInstance();
const utilsHelper = new UtilsHelper();
export default class SongHelper {
    baseURI = "http://api:8080";

    headers = {
        "Access-Control-Allow-Origin": "*"
    };

    constructor() {
        console.log(store.getAuthToken());
        this.baseURI = "http://api:8080";
        this.headers = {
            "Access-Control-Allow-Origin": "*",
            Authorization: store.getAuthToken() ? "Bearer " + store.getAuthToken() : ""
        };
    }

    updateAuthToken() {
        this.headers.Authorization = "Bearer " + store.getAuthToken();
    }

    async getAllSongs() {
        this.updateAuthToken();
        // Call HTTP 
        let songs = [];
        await axios.get(this.baseURI + `/song/getAll`, { headers: this.headers })
            .then(res => {
                songs = res.data.map(e => utilsHelper.mapSongs(e));
            })
        return songs;
    }
    getRecentlyListenedSong() {
        this.updateAuthToken();
        return [{
            id: '1',
            name: 'Harder, Better, Faster, Stronger',
            artist: 'Daft Punk',
            album: 'Discovery',
            image: 'https://api.deezer.com/album/302127/image'
        }, {
            id: '2',
            name: 'Stop The Tribal War (Remastered 2000)',
            artist: 'Johnny Clarke',
            album: 'Rockers Time Now',
            image: 'https://api.deezer.com/album/302129/image'
        }, {
            id: '3',
            name: 'Darling Darling (Live 1992)',
            artist: 'Mano Negra',
            album: 'Best Of',
            image: 'https://api.deezer.com/album/302054/image'
        },
        {
            id: '4',
            name: 'Harder, Better, Faster, Stronger',
            artist: 'Daft Punk',
            album: 'Discovery',
            image: 'https://api.deezer.com/album/302127/image'
        }, {
            id: '5',
            name: 'Stop The Tribal War (Remastered 2000)',
            artist: 'Johnny Clarke',
            album: 'Rockers Time Now',
            image: 'https://api.deezer.com/album/302129/image'
        }, {
            id: '6',
            name: 'Darling Darling (Live 1992)',
            artist: 'Mano Negra',
            album: 'Best Of',
            image: 'https://api.deezer.com/album/302054/image'
        },]
    }
    async search(keywords) {
        const fuse = new Fuse(await this.getAllSongs(), {
            keys: [
                'name',
            ],
            includeScore: true
        });
        return fuse.search(keywords).map(song => {
            return song.item;
        });
    }
}