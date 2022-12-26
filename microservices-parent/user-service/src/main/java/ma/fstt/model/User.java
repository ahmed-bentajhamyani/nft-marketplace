package ma.fstt.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document("users")
public class User {
    @Id
    private String id;
    private String idWallet;
    private String username;
    private String email;
    private String profilPicture;

    public User(String idWallet, String username, String email, String profilPicture) {
        super();
        this.idWallet = idWallet;
        this.username = username;
        this.email = email;
        this.profilPicture = profilPicture;
    }
}
