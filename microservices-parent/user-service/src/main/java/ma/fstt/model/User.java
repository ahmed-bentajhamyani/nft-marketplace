package ma.fstt.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document("users")
public class User {
    @Id
    private String id;
    private String username;
    private String email;
    private String profilePicture;
    private String walletAddress;
    private LocalDate joinedAt;

    public User(String username, String email, String profilePicture, String walletAddress, LocalDate joinedAt) {
        super();
        this.username = username;
        this.email = email;
        this.profilePicture = profilePicture;
        this.joinedAt = joinedAt;
        this.walletAddress = walletAddress;
    }
}
