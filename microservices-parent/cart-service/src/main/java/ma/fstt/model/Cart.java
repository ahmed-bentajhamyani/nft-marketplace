package ma.fstt.model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "cart")
public class Cart {
	
	@Id
	private String id;
	private int quantity;
	private float totalPrice;
	
	@DBRef
	private List<String> nfts = new ArrayList<>();
	
	
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public int getQuantity() {
		return quantity;
	}
	
	public Cart() {
		super();
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public float getTotalPrice() {
		return totalPrice;
	}
	public void setTotalPrice(float totalPrice) {
		this.totalPrice = totalPrice;
	}
	
	public Cart(String id, int quantity, float totalPrice) {
		super();
		this.id = id;
		this.quantity = quantity;
		this.totalPrice = totalPrice;
	}
	
	public Cart(String id, int quantity, float totalPrice, List<String> nfts) {
		super();
		this.id = id;
		this.quantity = quantity;
		this.totalPrice = totalPrice;
		this.nfts = nfts;
	}
	
	
	
}
