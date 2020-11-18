package application.service;

import application.dao.PlaylistRepository;
import application.dao.SongRepository;
import application.models.entities.Playlist;
import application.models.entities.Song;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SongService {

    @Autowired
    SongRepository songRepository;

    public List<Song> getAll(){ return songRepository.findAll(); }

    public Song getById(Integer id) { return songRepository.getOne(id); }

    public void save(Song song){ songRepository.save(song); }

    public void delete(Integer id) { songRepository.deleteById(id);}

}
