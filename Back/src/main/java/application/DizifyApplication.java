package application;

import application.utils.ReadProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;



@SpringBootApplication()
public class DizifyApplication {

    public static void main(String[] args) {
        SpringApplication.run(DizifyApplication.class, args);

    }

}
