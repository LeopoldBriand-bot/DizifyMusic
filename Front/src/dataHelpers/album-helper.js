import Fuse from 'fuse.js';
export default class AlbumHelper {
    constructor() {
        
    }
    getAllAlbums() {
        return [
        {
            id: "302127",
            title: "Discovery",
            image:'https://api.deezer.com/album/302127/image'
        },{
            id: "302129",
            title: "Rockers Time Now", 
            image:'https://api.deezer.com/album/302129/image'
        },{
            id: "302046",
            title: "blue print",
            image:'https://api.deezer.com/album/302046/image'
        }]
    }
    search(keywords) {
        const fuse = new Fuse(this.getAllAlbums(), {
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