package application.service;

import application.dao.AdminRepository;
import application.models.entities.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {

    @Autowired
    AdminRepository adminRepository;

    public List<Admin> getAll(){
        return adminRepository.findAll();
    }

    public Admin getById(Integer id) { return adminRepository.getOne(id); }

    public void save(Admin admin){ adminRepository.save(admin); }

//    public void update(Admin admin) { adminRepository.updateOne(admin); }

    public void delete(Integer id) { adminRepository.deleteById(id);}

}
