package ma.fstt.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ma.fstt.model.Cart;
import ma.fstt.repository.CartRepository;

@Service
public class CartService {
	
	@Autowired
	private CartRepository repository;
	
	 public List<Cart> getAllCarts() {
	        return repository.findAll();
	    }
	 
	
	    public Optional<Cart> getCartById(String id) {
	        return repository.findById(id);
	    }

	    public void createCart(Cart cart) {
	    	repository.insert(cart);
	    }

	    public Cart updateCart(String id, Cart cart) {
	    	return repository.findById(id).map(x->{
				x.setQuantity(cart.getQuantity());
				x.setTotalPrice(cart.getTotalPrice());
				return repository.save(x);
			}).orElseGet(()->{
				cart.setId(id);
				return repository.save(cart);
			});
	    }

	    public void deleteCart(String id) {
	        repository.deleteById(id);
	    }
	

}
