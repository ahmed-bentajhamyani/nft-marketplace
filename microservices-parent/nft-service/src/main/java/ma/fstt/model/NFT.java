package ma.fstt.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "nfts")
public class NFT {
    @Id
    private String id;
    private String name;
    private String image;
    private float price;
    private String collectionName;

    public NFT(String name, String image, float price, String collectionName) {
        super();
        this.name = name;
        this.image = image;
        this.price = price;
        this.collectionName = collectionName;
    }
}
