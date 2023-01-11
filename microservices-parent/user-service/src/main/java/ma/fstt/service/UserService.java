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
        User newUser = new User(user.getUsername(), user.getEmail(), user.getProfilePicture(), user.getHash(), LocalDate.now());
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
                    u.setHash(user.getHash());
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

    public User getUserByHash(String hash) {
        return userRepository.findUserByHash(hash);
    }

}
