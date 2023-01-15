package ma.fstt.controller;

import ma.fstt.model.Cart;
import ma.fstt.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/cart")
@CrossOrigin(origins = "http://localhost:4200")
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping("/{walletAddress}")
    public List<Cart> getUserCarts(@PathVariable String walletAddress) {
        return cartService.getUserCarts(walletAddress);
    }

    @PostMapping
    public void saveCart(@RequestBody Cart cart) {
        cartService.createCart(cart);
    }

    @DeleteMapping("/{id}")
    public void deleteCart(@PathVariable String id) {
        cartService.deleteCart(id);
    }

    @DeleteMapping("/clear/{walletAddress}")
    public void deleteAllCartsByWalletAddress(@PathVariable String walletAddress) {
        cartService.deleteAllCartsByWalletAddress(walletAddress);
    }

    @PutMapping("/{id}")
    public void updateCart(@RequestBody Cart cart, @PathVariable String id) {
        cartService.updateCart(id, cart);
    }
}
