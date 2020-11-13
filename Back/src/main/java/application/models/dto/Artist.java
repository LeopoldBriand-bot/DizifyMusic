package application.models.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

public class Artist implements Serializable {

    private static final long serialVersionUID = 1L;

    @JsonProperty
    public Integer id;

    @JsonProperty
    public String name;

    @JsonProperty
    public String img;

}
