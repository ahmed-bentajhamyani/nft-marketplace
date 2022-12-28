package ma.fstt.service;

import java.time.LocalDate;
import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ma.fstt.model.User;
import ma.fstt.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public void save(User user) {
        User use = new User(user.getWalletId(), user.getUsername(), user.getEmail(), user.getProfilPicture(), LocalDate.now());
        userRepository.insert(use);
    }

    public List<User> getAll() {
        return userRepository.findAll();
    }

    public void update(String id, User user) {
        userRepository.findById(id).map(u -> {
                    u.setWalletId(user.getWalletId());
                    u.setUsername(user.getUsername());
                    u.setEmail(user.getEmail());
                    u.setProfilPicture(user.getProfilPicture());
                    return userRepository.save(u);
                })
                .orElseGet(() -> {
                    user.setId(id);
                    return userRepository.save(user);
                });
    }

    public void delete(String id) {
        userRepository.deleteById(id);
    }

    public Optional<User> findById(String id) {
        return userRepository.findById(id);
    }

}
