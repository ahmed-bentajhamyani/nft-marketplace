package ma.fstt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class CollectionServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(CollectionServiceApplication.class, args);
    }
}
