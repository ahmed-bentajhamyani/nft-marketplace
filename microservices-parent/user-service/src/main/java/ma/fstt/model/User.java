package ma.fstt.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document("users")
public class User {
    @Id
    private String id;
    @Indexed(unique = true)
    private String username;
    private String email;
    private String profilPicture;
    private LocalDate joinedAt;
    private String walletId;

    public User(String username, String email, String profilPicture, LocalDate joinedAt, String walletId) {
        super();
        this.username = username;
        this.email = email;
        this.profilPicture = profilPicture;
        this.joinedAt = joinedAt;
        this.walletId = walletId;
    }
}
