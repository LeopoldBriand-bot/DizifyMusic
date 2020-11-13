package application.service;

import application.dao.AdminsRepository;
import application.models.entities.Admins;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminsService {

    @Autowired
    AdminsRepository adminsRepository;

//    @Bean
    public List<Admins> getAll(){
        return adminsRepository.findAll();
    }

//    @Bean
    public Admins saveAdmin(Admins admins){
        return adminsRepository.save(admins);
    }
}
