package application.models.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

public class Playlist implements Serializable {

    private static final long serialVersionUID = 1L;

    @JsonProperty
    public Integer id;

    @JsonProperty
    public Integer idPlaylist;

    @JsonProperty
    public Integer songId;

}
