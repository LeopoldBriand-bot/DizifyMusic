package application.controller;

import application.models.entities.Playlist;
import application.models.entities.PlaylistJoin;
import application.service.PlaylistJoinService;
import application.service.PlaylistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/playlistJoin")
@RestController
public class PlaylistJoinController {
    

        @Autowired
        PlaylistJoinService playlistJoinService;

        @GetMapping("/getAll")
        public List<PlaylistJoin> getAll(){ return playlistJoinService.getAll(); }

        @GetMapping("/getById")
        public PlaylistJoin getById(Integer id){ return playlistJoinService.getById(id); }

        @PostMapping("/save")
        public void save(@RequestBody PlaylistJoin playlistJoin){ playlistJoinService.save(playlistJoin); }

        @PostMapping("/delete")
        public void delete(@RequestBody PlaylistJoin playlistJoin){ playlistJoinService.delete(playlistJoin.id); }

    }
