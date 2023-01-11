package ma.fstt.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import ma.fstt.model.Wallet;
import org.springframework.data.mongodb.repository.Query;

public interface WalletRepository extends MongoRepository<Wallet, String> {
    @Query("{hash:'?0'}")
    Wallet findWalletByHash(String hash);
}
