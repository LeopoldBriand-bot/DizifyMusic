package application.models.entities;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;

@Table(name = "albums")
@Entity
@Data
public class Album implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    public Integer id;

    @Column(name = "artist_id")
    public Integer artistId;

    @Column(name = "title")
    public String title;

    @Column(name = "date")
    public Timestamp date;

    @Column(name = "img")
    private String img;

}
