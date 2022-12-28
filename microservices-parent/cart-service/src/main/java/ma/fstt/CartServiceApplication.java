package ma.fstt;

import java.util.stream.Stream;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import ma.fstt.model.Cart;
import ma.fstt.repository.CartRepository;

@SpringBootApplication
public class CartServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CartServiceApplication.class, args);
	}
	
	@Bean
	CommandLineRunner start( CartRepository cartRepo) {
		return args->{
			Stream.of(12,123,null).forEach(c->{
				// cartRepo.save(new Cart("dde122",12,(float) 123.5,null));
			});
		};
	}
	

}
