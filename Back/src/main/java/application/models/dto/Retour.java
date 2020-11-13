package application.models.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class Retour {

    @JsonProperty
    public String err;

    @JsonProperty
    public String msg;

    @JsonProperty
    public int rowAffected;

}
