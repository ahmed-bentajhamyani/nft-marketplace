package ma.fstt.repository;

import ma.fstt.model.Collection;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface CollectionRepository extends MongoRepository<Collection, String> {
    @Query("{name:'?0'}")
    Collection findCollectionByName(String name);
}
