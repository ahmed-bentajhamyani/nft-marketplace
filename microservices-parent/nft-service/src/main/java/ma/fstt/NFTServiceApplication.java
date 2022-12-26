package ma.fstt;

import ma.fstt.model.NFT;
import ma.fstt.repository.NFTRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.stream.Stream;

@SpringBootApplication
public class NFTServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(NFTServiceApplication.class, args);
    }
}
