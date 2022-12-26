package ma.fstt;

import ma.fstt.model.Category;
import ma.fstt.service.CategoryService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories(basePackages = "ma.fstt.repository")
public class CategoryServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(CategoryServiceApplication.class, args);
    }

    @Bean
    CommandLineRunner runner(CategoryService categoryService) {
        return args -> {
            Category category = new Category("Photography");
            categoryService.createCategory(category);
        };
    }
}
