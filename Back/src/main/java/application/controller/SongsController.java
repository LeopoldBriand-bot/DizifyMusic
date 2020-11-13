package application.controller;

import application.dao.SongsDAO;
import application.dao.UsersDAO;
import application.models.dto.Retour;
import application.models.dto.Song;
import application.models.dto.User;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SongsController {

    SongsDAO songsDAO = new SongsDAO();

    @GetMapping("/songs/getAll")
    public List<Song> getAll(){
        return songsDAO.getAll();
    }

    @GetMapping("/songs/getById")
    public Song getById(@Param("id") int id){
        return songsDAO.getById(id);
    }

    @PostMapping("/songs/add")
    public Retour add(@RequestBody Song song){
        return songsDAO.add(song);
    }

    @PostMapping("/songs/delete")
    public Retour delete(@RequestBody Song song){
        return songsDAO.delete(song);
    }

    @PostMapping("/songs/update")
    public Retour update(@RequestBody Song song){
        return songsDAO.update(song);
    }


}
