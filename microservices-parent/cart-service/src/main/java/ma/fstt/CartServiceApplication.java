package ma.fstt;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;
import org.springframework.context.annotation.Bean;

import ma.fstt.model.Cart;
import ma.fstt.repository.CartRepository;

@SpringBootApplication
@EnableEurekaServer
public class CartServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(CartServiceApplication.class, args);
    }

    @Bean
    CommandLineRunner start(CartRepository cartRepository) {
        return args -> {
            // cartRepository.save(new Cart("dde122",12,(float) 123.5,null));
        };
    }
}
