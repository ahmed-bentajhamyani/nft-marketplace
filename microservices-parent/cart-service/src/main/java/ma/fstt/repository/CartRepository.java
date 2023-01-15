package ma.fstt.repository;

import ma.fstt.model.Cart;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface CartRepository extends MongoRepository<Cart, String> {
    @Query("{walletAddress:'?0'}")
    List<Cart> findCartsByWalletAddress(String walletAddress);

    @Query("{walletAddress:'?0'}")
    List<Cart> deleteAllByWalletAddress(String walletAddress);
}
