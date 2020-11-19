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

    @OneToOne
    private Artist artist;

    @OneToOne
    private Album album;

    @Column(name = "name")
    private String name;

    @Column(name = "music")
    private String music;


}
