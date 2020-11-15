package application.service;

import application.dao.PlaylistRepository;
import application.models.entities.Playlist;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlaylistService {

    @Autowired
    PlaylistRepository playlistRepository;

    public List<Playlist> getAll(){ return playlistRepository.findAll(); }

    public Playlist getById(Integer id) { return playlistRepository.getOne(id); }

    public void save(Playlist playlist){ playlistRepository.save(playlist); }

    public void delete(Integer id) { playlistRepository.deleteById(id);}

}
