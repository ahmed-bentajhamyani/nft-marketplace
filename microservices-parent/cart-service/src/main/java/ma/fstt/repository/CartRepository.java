package ma.fstt.repository;


import org.springframework.data.mongodb.repository.MongoRepository;

import ma.fstt.model.Cart;

public interface CartRepository extends MongoRepository<Cart , String> {

	
	
}
