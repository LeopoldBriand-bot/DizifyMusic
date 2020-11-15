package application.controller;

import application.models.entities.Favorite;
import application.service.FavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/favorite")
@RestController
public class FavoriteController {

    @Autowired
    FavoriteService favoriteService;

    @GetMapping("/getAll")
    public List<Favorite> getAll(){ return favoriteService.getAll(); }

    @GetMapping("/getById")
    public Favorite getById(Integer id){ return favoriteService.getById(id); }

    @PostMapping("/save")
    public void save(@RequestBody Favorite favorite){ favoriteService.save(favorite); }

    @PostMapping("/delete")
    public void delete(@RequestBody Favorite favorite){ favoriteService.delete(favorite.id); }

}