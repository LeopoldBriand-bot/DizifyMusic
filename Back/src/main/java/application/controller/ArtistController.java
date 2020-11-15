package application.controller;

import application.models.entities.Artist;
import application.service.ArtistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequestMapping("/artist")
@RestController
public class ArtistController {

    @Autowired
    ArtistService artistService;

    @GetMapping("/getAll")
    public List<Artist> getAll(){ return artistService.getAll(); }

    @GetMapping("/getById")
    public Artist getById(Integer id){ return artistService.getById(id); }

    @GetMapping("/getByName")
    public Artist getByName(String title){ return artistService.getByName(title); }

    @PostMapping("/save")
    public void save(@RequestBody Artist artist){ artistService.save(artist); }

    @PostMapping("/delete")
    public void delete(@RequestBody Artist artist){ artistService.delete(artist.id); }

}