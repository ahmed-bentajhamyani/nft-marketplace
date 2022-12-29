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
    private float prise;
    private String collectionName;

    public NFT(String name, String image, float prise, String collectionName) {
        super();
        this.name = name;
        this.image = image;
        this.prise = prise;
        this.collectionName = collectionName;
    }
}
