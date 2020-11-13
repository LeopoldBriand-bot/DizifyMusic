import Fuse from 'fuse.js';
export default class ArtistHelper {
    constructor() {
        
    }
    getAllArtists() {
        return [
        {
            id: "27",
            name: "Daft Punk",
            image:'https://api.deezer.com/artist/27/image',
        },{
            id: "10370",
            name: "Johnny Clarke",
            image:'https://api.deezer.com/artist/10370/image'
        },{
            id: "211337",
            name: "Imhotep",
            image:'https://api.deezer.com/artist/211337/image'
        }]
    }
    search(keywords) {
        const fuse = new Fuse(this.getAllArtists(), {
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