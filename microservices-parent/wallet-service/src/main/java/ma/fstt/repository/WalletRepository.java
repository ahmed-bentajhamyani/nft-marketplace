package ma.fstt.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import ma.fstt.model.Wallet;

public interface WalletRepository  extends MongoRepository<Wallet, String>{

}
