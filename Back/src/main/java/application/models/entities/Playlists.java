package application.models.entities;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "playlists")
@Data
public class Playlists implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "id_playlist")
    private Integer idPlaylist;

    @Column(name = "song_id")
    private Integer songId;

}