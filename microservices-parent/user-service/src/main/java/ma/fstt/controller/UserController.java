package ma.fstt.controller;

import ma.fstt.model.User;
import ma.fstt.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping
    public List<User> getAll() {
        return userService.getAll();
    }

    @GetMapping("/{walletAddress}")
    public User getUserByWalletAddress(@PathVariable String walletAddress) {
        return userService.getUserByWalletAddress(walletAddress);
    }

    @PostMapping
    public void add(@RequestBody User user) {
        userService.save(user);
    }

    @PutMapping("/{id}")
    public void update(@PathVariable String id, @RequestBody User user) {
        System.out.println(user);
        userService.update(id, user);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        userService.delete(id);
    }
}
