package ma.fstt;

import ma.fstt.model.Category;
import ma.fstt.service.CategoryService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableEurekaServer
public class CategoryServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(CategoryServiceApplication.class, args);
    }

    @Bean
    CommandLineRunner runner(CategoryService categoryService) {
        return args -> {
            Category category = new Category("Music");
            //categoryService.createCategory(category);
        };
    }
}
