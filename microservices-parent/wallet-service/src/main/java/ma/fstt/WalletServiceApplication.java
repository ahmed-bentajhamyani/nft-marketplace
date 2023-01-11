package ma.fstt;

import ma.fstt.model.Wallet;
import ma.fstt.service.WalletService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableEurekaServer
public class WalletServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(WalletServiceApplication.class, args);
    }

    @Bean
    CommandLineRunner runner(WalletService walletService) {
        return args -> {
            Wallet wallet = new Wallet("M23456789Y", 290.9);
            // walletService.save(wallet);
        };
    }
}
