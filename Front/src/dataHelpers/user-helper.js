import bcrypt from 'bcryptjs';

export default class UserHelper {
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

    getFavorites(userId) {
        console.log(userId);
        return {
            songs: [{
                name:'Harder, Better, Faster, Stronger', 
                artist:'Daft Punk', 
                album:'Discovery', 
                image:'https://api.deezer.com/album/302127/image'
            }],
            albums: [{
                id: "302127",
                title: "Discovery",
                image:'https://api.deezer.com/album/302127/image'
            }],
            artists: [{
                id: "27",
                name: "Daft Punk",
                image:'https://api.deezer.com/artist/27/image',
            }]
        }
    }
}