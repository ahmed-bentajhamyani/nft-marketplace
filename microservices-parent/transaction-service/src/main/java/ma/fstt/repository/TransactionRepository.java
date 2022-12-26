package ma.fstt.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import ma.fstt.model.Transaction;

public interface TransactionRepository extends MongoRepository<Transaction, String> {
}
