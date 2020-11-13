package application.controller;

import application.dao.PlaylistsDAO;
import application.dao.PlaylistsJoinDAO;
import application.models.dto.Playlist;
import application.models.dto.PlaylistJoin;
import application.models.dto.Retour;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PlaylistsController {

    PlaylistsDAO playlistsDAO = new PlaylistsDAO();

    @GetMapping("/playlists/getAll")
    public List<Playlist> getAll(){
        return playlistsDAO.getAll();
    }

    @GetMapping("/playlists/getById")
    public Playlist getByID(@Param("id") int id){
        return playlistsDAO.getById(id);
    }

    @PostMapping("/playlists/add")
    public Retour add(@RequestBody Playlist playlist){
        return playlistsDAO.add(playlist);
    }

    @PostMapping("/playlists/delete")
    public Retour delete(@RequestBody Playlist playlist){
        return playlistsDAO.delete(playlist);
    }

    @PostMapping("/playlists/update")
    public Retour update(@RequestBody Playlist playlist){
        return playlistsDAO.update(playlist);
    }

}
