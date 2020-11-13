package application.models.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

public class Song implements Serializable {

    private static final long serialVersionUID = 1L;

    @JsonProperty
    public Integer id;

    @JsonProperty
    public Integer artistId;

    @JsonProperty
    public Integer albumId;

    @JsonProperty
    public String name;

    @JsonProperty
    public long duration;

}
