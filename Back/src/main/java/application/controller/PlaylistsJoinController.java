package application.controller;

import application.dao.AdminsDAO;
import application.dao.PlaylistsJoinDAO;
import application.dao.UsersDAO;
import application.models.dto.PlaylistJoin;
import application.models.dto.Retour;
import application.models.dto.User;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PlaylistsJoinController {

    PlaylistsJoinDAO playlistsJoinDAO = new PlaylistsJoinDAO();

    @GetMapping("/playlistsJoin/getAll")
    public List<PlaylistJoin> getAll(){
        return playlistsJoinDAO.getAll();
    }

    @GetMapping("/playlistsJoin/getById")
    public PlaylistJoin getByID(@Param("id") int id){
        return playlistsJoinDAO.getById(id);
    }

    @PostMapping("/playlistsJoin/add")
    public Retour add(@RequestBody PlaylistJoin playlistJoin){
        return playlistsJoinDAO.add(playlistJoin);
    }

    @PostMapping("/playlistsJoin/delete")
    public Retour delete(@RequestBody PlaylistJoin playlistJoin){
        return playlistsJoinDAO.delete(playlistJoin);
    }

    @PostMapping("/playlistsJoin/update")
    public Retour update(@RequestBody PlaylistJoin playlistJoin){
        return playlistsJoinDAO.update(playlistJoin);
    }

}
