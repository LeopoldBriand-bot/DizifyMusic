package application.controller;

import application.models.entities.Admins;
import application.service.AdminsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class AdminsController {

    @Autowired
    AdminsService adminsService;

    @GetMapping("/getAllAdmins")
    public List<Admins> getAll(){
        return adminsService.getAll();
    }

    @PostMapping("/saveAdmin")
    public void saveAdmin(@RequestBody Admins admins){ adminsService.saveAdmin(admins); }
}