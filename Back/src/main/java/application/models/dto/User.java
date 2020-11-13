package application.models.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.Date;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class User implements Serializable {

    private static final long serialVersionUID = 1L;


    @JsonProperty
    public Integer id;

    @JsonProperty
    public String nickName;

    @JsonProperty
    public String avatarImg;

    @JsonProperty
    public Date birthDate;

    @JsonProperty
    public String email;

}
