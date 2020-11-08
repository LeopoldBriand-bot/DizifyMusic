package application.models.entities;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;

@Entity
@Table(name = "users")
@Data
public class Users implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "nick_name")
    private String nickName;

    @Column(name = "avatar_img")
    private String avatarImg;

    @Column(name = "birth_date")
    private Timestamp birthDate;

    @Column(name = "email")
    private String email;

}
