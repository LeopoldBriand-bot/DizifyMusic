package application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//@SpringBootApplication(scanBasePackages={"application", "application.dao", "application.service",
//        "application.controller", "application.models"})

//@SpringBootApplication(scanBasePackages={"application", "application.dao"})
@SpringBootApplication(scanBasePackages={"application"})
@EnableAutoConfiguration()
//@ComponentScan(basePackages={"application", "application.dao", "application.service",
//        "application.controller", "application.models"})
public class DizifyApplication {

    public static void main(String[] args) {
        SpringApplication.run(DizifyApplication.class, args);
    }

}