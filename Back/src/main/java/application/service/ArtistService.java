package application.service;

import application.dao.ArtistRepository;
import application.models.entities.Artist;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArtistService {

    @Autowired
    ArtistRepository artistRepository;

    public List<Artist> getAll(){ return artistRepository.findAll(); }

    public Artist getById(Integer id) { return artistRepository.getOne(id); }

    public Artist getByName(String title) { return artistRepository.getByName(title); }

    public void save(Artist artist){ artistRepository.save(artist); }

    public void delete(Integer id) { artistRepository.deleteById(id);}

}
