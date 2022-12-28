package ma.fstt.controller;

import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ma.fstt.model.Cart;
import ma.fstt.repository.CartRepository;

@RestController
@RequestMapping(value="/api/cart")
@CrossOrigin(origins = "http://localhost:4200")
public class CartController {
	
	@Autowired
	private CartRepository repository;
	
	@GetMapping
	public List<Cart> getCart(){
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
	public Cart updateCart(@RequestBody Cart cart , @PathVariable String id){
		return repository.findById(id).map(x->{
			x.setQuantity(cart.getQuantity());
			x.setTotalPrice(cart.getTotalPrice());
			return repository.save(x);
		}).orElseGet(()->{
			cart.setId(id);
			return repository.save(cart);
		});
		
				
	}
	
	

}
