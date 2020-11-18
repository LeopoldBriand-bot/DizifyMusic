package application.models.entities;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "songs")
@Data
public class Song implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    public Integer id;

    @Column(name = "artist_id")
    private Integer artistId;

    @Column(name = "album_id")
    private Integer albumId;

    @Column(name = "name")
    private String name;

    @Column(name = "duration")
    private String duration;

}
