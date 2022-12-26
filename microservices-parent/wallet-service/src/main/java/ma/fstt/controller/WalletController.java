package ma.fstt.controller;

import java.util.List;
import java.util.Optional;

import ma.fstt.service.WalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ma.fstt.model.Wallet;

@RestController
@RequestMapping("/api/wallets")
public class WalletController {

    @Autowired
    WalletService walletservice;

    @GetMapping
    public ResponseEntity<List<Wallet>> getAll() {
        List<Wallet> users = walletservice.getAll();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public Optional<Wallet> findById(@PathVariable("id") String id) {
        return walletservice.findById(id);
    }

    @PostMapping
    public ResponseEntity<?> add(@RequestBody Wallet wallet) {
        walletservice.save(wallet);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable String id, @RequestBody Wallet wallet) {
        walletservice.update(id, wallet);
        return new ResponseEntity<>(HttpStatus.OK);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") String id) {
        walletservice.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
