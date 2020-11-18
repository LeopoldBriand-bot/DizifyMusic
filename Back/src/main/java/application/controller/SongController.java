package application.controller;

import application.models.entities.Playlist;
import application.models.entities.Song;
import application.service.PlaylistService;
import application.service.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/song")
@RestController
public class SongController {
    

        @Autowired
        SongService songService;

        @GetMapping("/getAll")
        public List<Song> getAll(){ return songService.getAll(); }

        @GetMapping("/getById")
        public Song getById(Integer id){ return songService.getById(id); }

        @PostMapping("/save")
        public void save(@RequestBody Song song){ songService.save(song); }

        @PostMapping("/delete")
        public void delete(@RequestBody Song song){ songService.delete(song.id); }

    }
