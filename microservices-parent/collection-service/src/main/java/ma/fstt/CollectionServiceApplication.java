package ma.fstt;

import ma.fstt.model.Collection;
import ma.fstt.service.CollectionService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import java.time.LocalDate;

@SpringBootApplication
@EnableMongoRepositories(basePackages = "ma.fstt.repository")
@EntityScan("ma.fstt.entities")
@EnableFeignClients
public class CollectionServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(CollectionServiceApplication.class, args);
    }

    @Bean
    CommandLineRunner runner(CollectionService collectionService) {
        return args -> {
			Collection collection = new Collection("Dracula", "Dracula dark", 12, "www.com", "DWWW", "TWWW", LocalDate.now(), "Art", "ahmedep");
            //collectionService.createCollection(collection);
        };
    }
}
