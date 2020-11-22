import Fuse from 'fuse.js';

import axios from 'axios';

import UtilsHelper from './utils-helper'

import CommonDataManager from '../stores/data.store'

const store = CommonDataManager.getInstance();
const utilsHelper = new UtilsHelper();
export default class AlbumHelper {
    baseURI = "http://api:8080";

    headers = {
        "Access-Control-Allow-Origin": "*"
    };

    constructor() {

        this.baseURI = "http://localhost:8080";
        this.headers = {
            "Access-Control-Allow-Origin": "*",
            Authorization: store.getAuthToken() ? "Bearer " + store.getAuthToken() : ""
        };
    }

    updateAuthToken() {
        this.headers.Authorization = "Bearer " + store.getAuthToken();
    }

    async getAllAlbums() {
        this.updateAuthToken();

        // Call HTTP 
        let albums = [];
        await axios.get(this.baseURI + `/album/getAll`, { headers: this.headers })
            .then(res => {
                albums = res.data.map(e => utilsHelper.mapAlbums(e));
            })
        return albums;

    }
    async search(keywords) {
        const fuse = new Fuse(await this.getAllAlbums(), {
            keys: [
                'title',
            ],
            includeScore: true
        });
        return fuse.search(keywords).map(album => {
            return album.item;
        });
    }
}