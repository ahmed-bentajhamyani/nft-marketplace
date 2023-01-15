package ma.fstt.repository;

import ma.fstt.model.Image;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface ImageRepository extends MongoRepository<Image, String> {
    @Query("{name:'?0'}")
    Image findByName(String name);

    @Query("{imageName:'?0'}")
    Image deleteImageByName(String imageName);
}
