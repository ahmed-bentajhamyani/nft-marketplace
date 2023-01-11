package ma.fstt.controller;

import ma.fstt.model.User;
import ma.fstt.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping
    public List<User> getAll() {
        System.out.println("get users ---------------");
        return userService.getAll();
    }

    @GetMapping("/{hash}")
    public User getUserByHash(@PathVariable String hash) {
        return userService.getUserByHash(hash);
    }

    @PostMapping
    public void add(@RequestBody User user) {
        System.out.println("persist users -------------------------");
        userService.save(user);
    }

    @PutMapping("/{id}")
    public void update(@PathVariable String id, @RequestBody User user) {
        userService.update(id, user);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        userService.delete(id);
    }
}
