package ma.fstt.repository;

import ma.fstt.model.Category;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface CategoryRepository extends MongoRepository<Category, String> {
    @Query("{name:'?0'}")
    Category findCategoryByName(String name);
}
