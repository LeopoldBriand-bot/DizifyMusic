package application.models.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "admins")
@Data
public class Admins implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
//    @JsonProperty
    private Integer id;

    @Column(name = "user_id")
    @JsonProperty
    private Integer userId;

}
