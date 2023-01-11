package ma.fstt.repository;

import ma.fstt.model.Collection;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface CollectionRepository extends MongoRepository<Collection, String> {
    @Query("{name:'?0'}")
    Collection findCollectionByName(String name);

    @Query("{userHash:'?0'}")
    List<Collection> findCollectionsByUserHash(String userHash);
}
