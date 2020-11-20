package application.controller;

import application.models.entities.Playlist;
import application.models.entities.PlaylistJoin;
import application.models.entities.Song;
import application.service.PlaylistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RequestMapping("/playlist")
@RestController
public class PlaylistController {
    

        @Autowired
        PlaylistService playlistService;

        @GetMapping("/getAllSongByPlaylistJoinId")
        public List<Playlist> getAllSongByPlaylistJoinId(Integer playlistJoinId){ return playlistService.getAllSongByPlaylistJoinId(playlistJoinId); }

        @GetMapping("/getAll")
        public List<Playlist> getAll(){ return playlistService.getAll(); }

        @GetMapping("/getById")
        public Playlist getById(Integer id){ return playlistService.getById(id); }

        @PostMapping("/save")
        public void save(@RequestBody Playlist playlist){ playlistService.save(playlist); }

        @PostMapping("/delete")
        public void delete(@RequestBody Playlist playlist){ playlistService.delete(playlist.id); }

    }
