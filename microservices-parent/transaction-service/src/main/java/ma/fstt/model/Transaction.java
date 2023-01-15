package ma.fstt.model;


import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "transactions")
public class Transaction {
    @Id
    private String id;
    private float amount;
    private Date date;
    private String type;
    private String hash;

    public Transaction(float amount, Date date, String type, String hash) {
        super();
        this.amount = amount;
        this.date = date;
        this.type = type;
        this.hash = hash;
    }
}

