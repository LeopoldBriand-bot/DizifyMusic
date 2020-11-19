import Fuse from 'fuse.js';

import axios from 'axios';

import UtilsHelper from './utils-helper'

const utilsHelper = new UtilsHelper();
export default class AlbumHelper {
    baseURI = "http://localhost:8080";

    headers = {
        "Access-Control-Allow-Origin": "*"
    };

    constructor() {

    }
    async getAllAlbums() {

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