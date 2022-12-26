package ma.fstt.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "nfts")
public class NFT {
    @Id
    private String id;
    private String name;
    private String image;
    private float prise;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public NFT() {
        super();
    }

    public NFT(String id, String name, String image, float prise) {
        super();
        this.id = id;
        this.name = name;
        this.image = image;
        this.prise = prise;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public float getPrise() {
        return prise;
    }

    public void setPrise(float prise) {
        this.prise = prise;
    }


}
