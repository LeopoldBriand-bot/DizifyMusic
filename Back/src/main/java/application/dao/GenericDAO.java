package application.dao;

import application.models.dto.Playlist;
import application.models.dto.Retour;
import application.utils.DatabaseConnect;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public interface GenericDAO<T> {

    DatabaseConnect DATABASE_CONNECT = DatabaseConnect.getDbCon();

    // Create

    public Retour add(T data);

    // Read

    public T getById(int id);

    public List<T> getAll();

    // Update

    public Retour update(T data);

    // Delete

    public Retour delete(T data);

}
