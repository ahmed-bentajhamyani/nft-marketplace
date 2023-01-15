package ma.fstt.service;

import ma.fstt.model.User;
import ma.fstt.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public void save(User user) {
        User newUser = new User(user.getUsername(), user.getEmail(), user.getProfilePicture(), user.getWalletAddress(), LocalDate.now());
        userRepository.insert(newUser);
    }

    public List<User> getAll() {
        return userRepository.findAll();
    }

    public void update(String id, User user) {
        userRepository.findById(id).map(u -> {
            u.setUsername(user.getUsername());
            u.setEmail(user.getEmail());
            u.setProfilePicture(user.getProfilePicture());
            u.setWalletAddress(user.getWalletAddress());
            return userRepository.save(u);
        });
    }

    public void delete(String id) {
        userRepository.deleteById(id);
    }

    public User getUserByWalletAddress(String walletAddress) {
        return userRepository.findUserByWalletAddress(walletAddress);
    }

}
