package ma.fstt.service;

import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ma.fstt.model.Transaction;
import ma.fstt.repository.TransactionRepository;

@Service
public class TransactionService {

    @Autowired
    TransactionRepository transactionRepository;

    public Transaction saveTransaction(Transaction t) {
        return transactionRepository.save(t);
    }

    public List<Transaction> listTransaction() {
        System.out.println(transactionRepository.findAll());
        return transactionRepository.findAll();
    }

    public Optional<Transaction> findTransactionById(String id) {
        return transactionRepository.findById(id);
    }

    public void updateTransaction(String id, Transaction trans) {
        transactionRepository.findById(id)
                .map(transaction -> {
                    transaction.setAmount(trans.getAmount());
                    transaction.setHash(trans.getHash());
                    transaction.setDate(trans.getDate());
                    transaction.setType(trans.getType());
                    return transactionRepository.save(transaction);
                })
                .orElseGet(() -> {
                    trans.setId(id);
                    return transactionRepository.save(trans);
                });
    }

    public void deleteTransaction(String id) {
        transactionRepository.deleteById(id);
    }
}
