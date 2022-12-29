package ma.fstt;

import ma.fstt.model.User;
import ma.fstt.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import java.time.LocalDate;

@SpringBootApplication
@EnableFeignClients
@EnableMongoRepositories(basePackages = "ma.fstt.repository")
public class UserServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(UserServiceApplication.class, args);
    }

    @Bean
    CommandLineRunner runner(UserService userService) {
        return args -> {
            LocalDate date = LocalDate.now();
            User collection = new User("ahmedep", "ahmed@gmail.com", "", LocalDate.now(), "1");
            userService.save(collection);
        };
    }
}
