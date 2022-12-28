package ma.fstt.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "collections")
public class Collection {
    @Id
    private String id;
    @Indexed(unique = true)
    private String name;
    private String description;
    private int items;
    private String website;
    private String discord;
    private String twitter;
    private LocalDate createdAt;
    private String categoryName;


    public Collection(String name, String description, int items, String website, String discord, String twitter, String categoryName, LocalDate createdAt) {
        this.name = name;
        this.description = description;
        this.items = items;
        this.website = website;
        this.discord = discord;
        this.twitter = twitter;
        this.categoryName = categoryName;
        this.createdAt = createdAt;
    }
}
