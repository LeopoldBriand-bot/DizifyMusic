package application.service;

import application.dao.FavoriteRepository;
import application.models.entities.Favorite;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavoriteService {

    @Autowired
    FavoriteRepository favoriteRepository;

    public List<Favorite> getFavoriteSongs(){


        return favoriteRepository.findAll();

    }

    public List<Favorite> getFavoriteAlbums(){ return favoriteRepository.findAll(); }

    public List<Favorite> getFavoriteArtists(){ return favoriteRepository.findAll(); }

    public List<Favorite> getAll(){ return favoriteRepository.findAll(); }

    public List<Favorite> getAllByUserId(Integer userId){ return favoriteRepository.findAllByUserId(userId); }

    public Favorite getById(Integer id) { return favoriteRepository.getOne(id); }

    public void save(Favorite favorite){ favoriteRepository.save(favorite); }

    public void delete(Integer id) { favoriteRepository.deleteById(id);}

}
