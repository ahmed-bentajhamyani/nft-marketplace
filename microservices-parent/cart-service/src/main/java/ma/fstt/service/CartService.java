package ma.fstt.service;

import ma.fstt.model.Cart;
import ma.fstt.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    public List<Cart> getUserCarts(String walletAdress) {
        return cartRepository.findCartsByWalletAddress(walletAdress);
    }

    public void createCart(Cart c) {
        Cart cart = new Cart(c.getItemPrice(), c.getNftName(), c.getWalletAddress());
        cartRepository.insert(cart);
    }

    public Cart updateCart(String id, Cart cart) {
        return cartRepository.findById(id).map(c -> {
            c.setItemPrice(cart.getItemPrice());
            c.setNftName(cart.getNftName());
            c.setWalletAddress(cart.getWalletAddress());
            return cartRepository.save(c);
        }).orElseGet(() -> {
            cart.setId(id);
            return cartRepository.save(cart);
        });
    }

    public void deleteCart(String id) {
        cartRepository.deleteById(id);
    }

    public void deleteAllCartsByWalletAddress(String walletAddress) {
        cartRepository.deleteAllByWalletAddress(walletAddress);
    }
}
