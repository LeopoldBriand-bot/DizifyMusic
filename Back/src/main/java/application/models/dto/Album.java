package application.models.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;


public class Album implements Serializable {

    private static final long serialVersionUID = 1L;

    @JsonProperty
    public Integer id;

    @JsonProperty
    public Integer artistId;

    @JsonProperty
    public String title;

    @JsonProperty
    public Timestamp date;

    @JsonProperty
    public String img;

}
