package application.service;

import application.dao.PlaylistRepository;
import application.models.entities.Playlist;
import application.models.entities.PlaylistJoin;
import application.models.entities.Song;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PlaylistService {

    @Autowired
    PlaylistRepository playlistRepository;

    public List<Playlist> getAllSongByPlaylistJoinId(Integer playlistJoinId){
        return playlistRepository.getAllSongByPlaylistJoinId(playlistJoinId);
    }

    public List<Playlist> getAll(){ return playlistRepository.findAll(); }

    public Playlist getById(Integer id) { return playlistRepository.getOne(id); }

    public void save(Playlist playlist){ playlistRepository.save(playlist); }

    public void delete(Integer id) { playlistRepository.deleteById(id);}

}
