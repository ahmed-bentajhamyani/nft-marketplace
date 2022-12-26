package ma.fstt.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "wallets")
public class Wallet {

    @Id
    private String id;
    private String hash;
    private Double solde;

    public Wallet(String hash, Double solde) {
        super();
        this.hash = hash;
        this.solde = solde;
    }

}
