package application.service;

import application.dao.AlbumRepository;
import application.models.entities.Album;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AlbumService {

    @Autowired
    AlbumRepository albumRepository;

    public List<Album> getAll(){ return albumRepository.findAll(); }

    public Album getById(Integer id) { return albumRepository.getOne(id); }

    public Album getByTitle(String title) { return albumRepository.findByTitle(title); }

    public void save(Album album){ albumRepository.save(album); }

    public void delete(Integer id) { albumRepository.deleteById(id);}

}
