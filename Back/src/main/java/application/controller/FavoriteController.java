package application.controller;

import application.models.entities.Favorite;
import application.service.FavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RequestMapping("/favorite")
@RestController
public class FavoriteController {

    @Autowired
    FavoriteService favoriteService;

    @GetMapping("/getFavoriteSongs")
    public List<Favorite> getFavoriteSongs(Integer userId){ return favoriteService.getFavoriteSongs(); }

    @GetMapping("/getFavoriteAlbums")
    public List<Favorite> getFavoriteAlbums(Integer userId){ return favoriteService.getFavoriteAlbums(); }

    @GetMapping("/getFavoriteArtists")
    public List<Favorite> getFavoriteArtists(Integer userId){ return favoriteService.getFavoriteArtists(); }

    @GetMapping("/getAll")
    public List<Favorite> getAll(){ return favoriteService.getAll(); }

    @GetMapping("/getAllByUserId")
    public List<Favorite> getAllByUserId(Integer userId){ return favoriteService.getAllByUserId(userId); }

    @GetMapping("/getById")
    public Favorite getById(Integer id){ return favoriteService.getById(id); }

    @PostMapping("/save")
    public void save(@RequestBody Favorite favorite){ favoriteService.save(favorite); }

    @PostMapping("/delete")
    public void delete(@RequestBody Favorite favorite){ favoriteService.delete(favorite.id); }

}