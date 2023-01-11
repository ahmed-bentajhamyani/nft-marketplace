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
    public List<Wallet> getAll() {
        return walletservice.getAll();
    }

    @GetMapping("/{hash}")
    public Wallet getWalletByHash(@PathVariable String hash) {
        return walletservice.findWalletByHash(hash);
    }

    @PostMapping
    public void save(@RequestBody Wallet wallet) {
        walletservice.save(wallet);
    }

    @PutMapping("/{id}")
    public void update(@PathVariable String id, @RequestBody Wallet wallet) {
        walletservice.update(id, wallet);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") String id) {
        walletservice.delete(id);
    }

}
