package ma.fstt.repository;

import ma.fstt.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface UserRepository extends MongoRepository<User, String> {
    @Query("{name:'?0'}")
    User findUserByName(String name);
}
