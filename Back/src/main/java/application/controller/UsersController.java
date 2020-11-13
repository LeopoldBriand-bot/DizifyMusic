package application.controller;

import application.dao.AdminsDAO;
import application.dao.UsersDAO;
import application.models.dto.Retour;
import application.models.dto.User;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UsersController {

    UsersDAO usersDAO = new UsersDAO();

    @GetMapping("/users/getAll")
    public List<User> getAll(){
        return usersDAO.getAll();
    }

    @GetMapping("/users/getById")
    public User getById(@Param("id") int id){
        return usersDAO.getById(id);
    }

    @PostMapping("/users/add")
    public Retour add(@RequestBody User user){
        return usersDAO.add(user);
    }

    @PostMapping("/users/delete")
    public Retour delete(@RequestBody User user){
        return usersDAO.delete(user);
    }

    @PostMapping("/users/update")
    public Retour update(@RequestBody User user){
        return usersDAO.update(user);
    }


}
