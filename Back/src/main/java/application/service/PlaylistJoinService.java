package application.service;

import application.dao.PlaylistJoinRepository;
import application.dao.PlaylistRepository;
import application.models.entities.Playlist;
import application.models.entities.PlaylistJoin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlaylistJoinService {

    @Autowired
    PlaylistJoinRepository playlistJoinRepository;

    public List<PlaylistJoin> getAll(){ return playlistJoinRepository.findAll(); }

    public PlaylistJoin getById(Integer id) { return playlistJoinRepository.getOne(id); }

    public void save(PlaylistJoin playlist){ playlistJoinRepository.save(playlist); }

    public void delete(Integer id) { playlistJoinRepository.deleteById(id);}

}
