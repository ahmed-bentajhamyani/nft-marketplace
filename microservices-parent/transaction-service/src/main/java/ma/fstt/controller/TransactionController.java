package ma.fstt.controller;

import ma.fstt.model.Transaction;
import ma.fstt.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/transaction")
@CrossOrigin(origins = "http://localhost:4200")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @GetMapping
    public List<Transaction> getAllTransaction() {
        return transactionService.listTransaction();
    }

    @PostMapping
    public void addClient(@RequestBody Transaction transaction) {
        Transaction newTransaction = transactionService.saveTransaction(transaction);
    }

    @GetMapping("/{id}")
    public Optional<Transaction> getArticleById(@PathVariable("id") String id) {
        return transactionService.findTransactionById(id);
    }

    @PutMapping("/{id}")
    public void updateArticle(@PathVariable String id, @RequestBody Transaction transaction) {
        transactionService.updateTransaction(id, transaction);
    }

    @DeleteMapping("/{id}")
    public void deleteArticle(@PathVariable("id") String id) {
        transactionService.deleteTransaction(id);
    }
}
