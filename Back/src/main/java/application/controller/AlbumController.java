package application.controller;

import application.models.entities.Album;
import application.service.AlbumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/album")
@RestController
public class AlbumController {

    @Autowired
    AlbumService albumService;

    @GetMapping("/getAll")
    public List<Album> getAll(){ return albumService.getAll(); }

    @GetMapping("/getById")
    public Album getById(Integer id){ return albumService.getById(id); }

    @GetMapping("/getByTitle")
    public Album getByTitle(String title){ return albumService.getByTitle(title); }

    @PostMapping("/save")
    public void save(@RequestBody Album album){ albumService.save(album); }

    @PostMapping("/delete")
    public void delete(@RequestBody Album album){ albumService.delete(album.id); }

}
