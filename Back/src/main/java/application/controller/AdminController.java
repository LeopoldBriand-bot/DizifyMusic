package application.controller;

import application.models.entities.Admin;
import application.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/admin")
@RestController
public class AdminController {

    @Autowired
    AdminService adminService;

    @GetMapping("/getAll")
    public List<Admin> getAll(){ return adminService.getAll(); }

    @GetMapping("/getById")
    public Admin getById(Integer id){ return adminService.getById(id); }

    @PostMapping("/save")
    public void save(@RequestBody Admin admin){ adminService.save(admin); }

//    @PutMapping("/update")
//    public void update(@RequestBody Admin admin){ adminService.update(admin); }

    @PostMapping("/delete")
    public void delete(@RequestBody Admin admin){ adminService.delete(admin.id); }

}