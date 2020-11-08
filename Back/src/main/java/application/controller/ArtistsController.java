package application.controller;

import application.dao.AdminsRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ArtistsController {

    AdminsRepository adminsRepository;

    @GetMapping("/getArtistByName")
    public String getHelloWorld(){
        System.out.println("GetHelloWolrd");
        return "HelloWorld !";
    }

}
