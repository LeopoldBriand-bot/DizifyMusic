package application.service;

import application.dao.PlaylistRepository;
import application.dao.UserRepository;
import application.models.entities.Playlist;
import application.models.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public List<User> getAll(){ return userRepository.findAll(); }

    public User getById(Integer id) { return userRepository.getOne(id); }

    public void save(User user){ userRepository.save(user); }

    public void delete(Integer id) { userRepository.deleteById(id);}

}
