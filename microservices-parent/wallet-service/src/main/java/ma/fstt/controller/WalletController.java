package ma.fstt.controller;

import java.util.List;
import java.util.Optional;

import ma.fstt.service.WalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import ma.fstt.model.Wallet;

@RestController
@RequestMapping("/api/wallets")
@CrossOrigin(origins = "http://localhost:4200")
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
