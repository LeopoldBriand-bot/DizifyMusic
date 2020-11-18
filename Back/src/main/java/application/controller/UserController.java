package application.controller;

import application.models.entities.Playlist;
import application.models.entities.User;
import application.service.PlaylistService;
import application.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/user")
@RestController
public class UserController {
    

        @Autowired
        UserService userService;

        @GetMapping("/getAll")
        public List<User> getAll(){ return userService.getAll(); }

        @GetMapping("/getById")
        public User getById(Integer id){ return userService.getById(id); }

        @PostMapping("/save")
        public void save(@RequestBody User user){ userService.save(user); }

        @PostMapping("/delete")
        public void delete(@RequestBody User user){ userService.delete(user.id); }

    }
