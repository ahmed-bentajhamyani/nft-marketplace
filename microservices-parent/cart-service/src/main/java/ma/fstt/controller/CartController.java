package ma.fstt.controller;

import ma.fstt.model.Cart;
import ma.fstt.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/api/cart")
@CrossOrigin(origins = "http://localhost:4200")
public class CartController {

    @Autowired
    private CartRepository repository;

    @GetMapping
    public List<Cart> getCart() {
        return repository.findAll();
    }

    @PostMapping
    public Cart saveCart(Cart cart) {
        return repository.save(cart);
    }

    @DeleteMapping("/{id}")
    public void deleteCart(@PathVariable("id") String id) {
        repository.deleteById(id);
    }

    @GetMapping("/{id}")
    public Optional<Cart> getOneCart(@PathVariable("id") String id) {
        return repository.findById(id);
    }

    @PutMapping("/{id}")
    public Cart updateCart(@RequestBody Cart cart, @PathVariable String id) {
        return repository.findById(id).map(x -> {
            x.setQuantity(cart.getQuantity());
            x.setTotalPrice(cart.getTotalPrice());
            return repository.save(x);
        }).orElseGet(() -> {
            cart.setId(id);
            return repository.save(cart);
        });
    }
}
