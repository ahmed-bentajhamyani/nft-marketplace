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
    private float price;
    private String collectionName;
    private String imageName;
    private String token;

    public NFT(String name, float price, String collectionName, String imageName, String token) {
        super();
        this.name = name;
        this.price = price;
        this.collectionName = collectionName;
        this.imageName = imageName;
        this.token = token;
    }
}
