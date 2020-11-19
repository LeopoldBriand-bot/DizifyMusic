package application.models.entities;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;


@Entity
@Table(name = "favoris")
@Data
public class Favorite implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    public Integer id;

    @Column(name = "user_id")
    private Integer userId;

    @ManyToOne
    private Song song;

    @ManyToOne
    private Artist artist;

    @ManyToOne
    private Album album;

}
