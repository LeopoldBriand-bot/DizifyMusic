import axios from 'axios';

var baseURI = "http://localhost:8080";

var headers = {
    "Access-Control-Allow-Origin": "*"
};

async function seed() {
    let response = {
        message: "Error: No response!",
        c_error: -1
    };
    await axios.post(baseURI + `/auth/signup`,
            {
                nickName: 'root',
                email: 'root@root.fr',
                password: 'rootpassword'

            }, { headers }).then(res => {
                response = res.data
            })
    if (response.c_error == 0) {
        await axios.post(this.baseURI + `/auth/signin`,
            {
                email: 'root@root.fr',
                password: 'rootpassword'

            }, { headers }).then(res => {
                response = res.data;
            })
        let token = response.accessToken
        headers.Authorization = "Bearer " + token;
    }

    await axios.post(baseURI + `/artist/save`,
        [
            {
                name: "Daft Punk",
                img: "https://api.deezer.com/artist/27/image"
            },
            {
                name: "Ben Harper",
                img: "https://api.deezer.com/artist/249/image"
            },
            {
                name: "Kaspars Dimiters",
                img: "https://api.deezer.com/artist/113139/image"
            },

        ], 
        { headers: this.headers }
    );

    await axios.post(baseURI + `/album/save`,
        [
            {
                title: 'Discovery',
                artist: {id:1},
                date: new Date(), 
                img: "https://api.deezer.com/album/302127/image"
            },
            {
                title: "Boxed Set Collection",
                artist: {id:2},
                date: new Date(), 
                img: "https://api.deezer.com/album/302055/image"
            },
            {
                title: "Ai Latvija",
                artist: {id:3},
                date: new Date(), 
                img: "https://api.deezer.com/album/168702/image"
            }
        ], 
        { headers: this.headers }
    );

    await axios.post(baseURI + `/song/save`,
        [
            
            {
                name: 'Harder, Better, Faster, Stronger',
                music: "https://cdns-preview-d.dzcdn.net/stream/c-deda7fa9316d9e9e880d2c6207e92260-8.mp3",
                artist: {id:1},
                album: {id:1}
            },
            {
                name: "Crescendolls",
                music: "https://cdns-preview-0.dzcdn.net/stream/c-02585dc790f2904c4e870cb3bcecfcf3-8.mp3",
                artist: {id:1},
                album: {id:1}
            },
            {
                name: "The Three Of Us",
                music: "https://cdns-preview-5.dzcdn.net/stream/c-5208ca210cf5eba93992154445e87641-4.mp3",
                artist: {id:2},
                album: {id:2}
            },
            {
                name: "Baigi gribas",
                music: "https://cdns-preview-8.dzcdn.net/stream/c-84858a788c7b03ee14bdda05e582fd48-3.mp3",
                artist: {id:3},
                album: {id:3}
            },
        ], 
        { headers: this.headers }
    )
}

seed();
