package application.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/helloWorld")
    public String getHelloWorld(){
        System.out.println("GetHelloWolrd");
        return "HelloWorld !";
    }

}
