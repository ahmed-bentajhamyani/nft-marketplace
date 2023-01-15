package ma.fstt.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "carts")
public class Cart {

    @Id
    private String id;
    private float itemPrice;
    private String nftName;
    private String walletAddress;

    public Cart(float itemPrice, String nftName, String walletAddress) {
        super();
        this.itemPrice = itemPrice;
        this.nftName = nftName;
        this.walletAddress = walletAddress;
    }
}
