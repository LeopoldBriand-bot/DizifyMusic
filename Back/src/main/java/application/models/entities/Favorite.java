package application.models.entities;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;


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

    @Column(name = "artist_id")
    private Integer artistId;

    @Column(name = "album_id")
    private Integer albumId;

    @Column(name = "song_id")
    private Integer songId;

}
