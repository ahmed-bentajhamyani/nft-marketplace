package ma.fstt;

import ma.fstt.model.NFT;
import ma.fstt.service.NFTService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class NFTServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(NFTServiceApplication.class, args);
    }
}
