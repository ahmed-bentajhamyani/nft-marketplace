package ma.fstt.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import ma.fstt.model.Wallet;

import ma.fstt.repository.WalletRepository;

@Service
public class WalletService {
    @Autowired
    WalletRepository walletRepository;

    public List<Wallet> getAll() {
        return walletRepository.findAll();
    }

    public Wallet findWalletByHash(String hash) {
        return walletRepository.findWalletByHash(hash);
    }

    public void save(Wallet wallet) {
        Wallet w = new Wallet(wallet.getHash(), wallet.getSolde());
        walletRepository.insert(w);
    }

    public void update(String id, Wallet wallet) {
        walletRepository.findById(id).map(wal -> {
                    wal.setHash(wallet.getHash());
                    wal.setSolde(wallet.getSolde());
                    return walletRepository.save(wal);
                })
                .orElseGet(() -> {
                    wallet.setId(id);
                    return walletRepository.save(wallet);
                });
    }

    public void delete(String id) {
        walletRepository.deleteById(id);
    }
}
