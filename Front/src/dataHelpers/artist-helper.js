import Fuse from 'fuse.js';

import axios from 'axios';

import UtilsHelper from './utils-helper'
import CommonDataManager from '../stores/data.store'

const store = CommonDataManager.getInstance();

const utilsHelper = new UtilsHelper();
export default class ArtistHelper {
    baseURI = "http://api:8080";

    headers = {
        "Access-Control-Allow-Origin": "*"
    };

    constructor() {

        this.baseURI = "http://api:8080";
        this.headers = {
            "Access-Control-Allow-Origin": "*",
            Authorization: store.getAuthToken() ? "Bearer " + store.getAuthToken() : ""
        };
    }

    updateAuthToken() {
        this.headers.Authorization = "Bearer " + store.getAuthToken();
    }
    async getAllArtists() {
        this.updateAuthToken();
        // Call HTTP 
        let artists = [];
        await axios.get(this.baseURI + `/artist/getAll`, { headers: this.headers })
            .then(res => {
                artists = res.data.map(e => utilsHelper.mapArtists(e));
            })
        return artists;

    }
    async search(keywords) {
        const fuse = new Fuse(await this.getAllArtists(), {
            keys: [
                'name',
            ],
            includeScore: true
        });
        return fuse.search(keywords).map(artist => {
            return artist.item;
        });
    }
}