package application.dao;

import application.models.dto.PlaylistJoin;
import application.models.dto.Retour;
import application.models.dto.User;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class PlaylistsJoinDAO implements GenericDAO<PlaylistJoin> {

    // Create

    @Override
    public Retour add(PlaylistJoin playlistJoin){
        Retour ret = new Retour();
        try {
            PreparedStatement statement = this.DATABASE_CONNECT.conn.prepareStatement(
                    "INSERT INTO playlists_join (user_id, name, is_public) VALUES (?, ?, ?)", Statement.RETURN_GENERATED_KEYS);
            statement.setInt(1,playlistJoin.userId);
            statement.setString(2,playlistJoin.name);
            statement.setBoolean(3,playlistJoin.isPublic);
            int affectedRows = statement.executeUpdate();

            if (affectedRows == 0) {
                throw new SQLException("Creating playlistJoin failed, no rows affected.");
            }
            try (ResultSet generatedKeys = statement.getGeneratedKeys()) {
                if (generatedKeys.first()) {
                    ret.msg = "User created with id : " + generatedKeys.getInt(1);
                    ret.rowAffected = affectedRows;
                }
                else {
                    throw new SQLException("Creating playlistJoin failed, no ID obtained.");
                }
            }

        } catch (SQLException throwables) {
            throwables.printStackTrace();
            ret.err = throwables.getMessage();
        }
        return ret;
    }

    // Read

    @Override
    public PlaylistJoin getById(int id){
        PlaylistJoin playlistJoin = new PlaylistJoin();
        try {
            PreparedStatement statement = this.DATABASE_CONNECT.conn.prepareStatement("SELECT * FROM playlists_join WHERE id = ?");
            statement.setInt(1,id);
            ResultSet resultSet = statement.executeQuery();
            if (resultSet.first()){
                playlistJoin.id = resultSet.getInt("id");
                playlistJoin.userId = resultSet.getInt("user_id");
                playlistJoin.name = resultSet.getString("name");
                playlistJoin.isPublic = resultSet.getBoolean("is_public");
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return playlistJoin;
    }

    @Override
    public List<PlaylistJoin> getAll(){
        List<PlaylistJoin> playlistJoins = new ArrayList<PlaylistJoin>();
        try {
            PreparedStatement statement = this.DATABASE_CONNECT.conn.prepareStatement("SELECT * FROM playlists_join");
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()){
                PlaylistJoin playlistJoin = new PlaylistJoin();
                playlistJoin.id = resultSet.getInt("id");
                playlistJoin.userId = resultSet.getInt("user_id");
                playlistJoin.name = resultSet.getString("name");
                playlistJoin.isPublic = resultSet.getBoolean("is_public");
                playlistJoins.add(playlistJoin);
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return playlistJoins;
    }

    // Update

    @Override
    public Retour update(PlaylistJoin playlistJoin){
        Retour ret = new Retour();
        try {
            PreparedStatement statement = this.DATABASE_CONNECT.conn.prepareStatement(
                    "UPDATE playlists_join SET user_id = ?, name = ?, is_public = ? WHERE id = ?");
            statement.setInt(1,playlistJoin.userId);
            statement.setString(2,playlistJoin.name);
            statement.setBoolean(3,playlistJoin.isPublic);
            statement.setInt(4,playlistJoin.id);
            int affectedRows = statement.executeUpdate();

            if (affectedRows == 0) {
                throw new SQLException("Updating playlists_join failed, no rows affected.");
            }else{
                ret.msg = "Playlists_join with id " + playlistJoin.id + " has been Updated";
                ret.rowAffected = affectedRows;
            }

        } catch (SQLException throwables) {
            throwables.printStackTrace();
            ret.err = throwables.getMessage();
        }
        return ret;
    }

    // Delete

    @Override
    public Retour delete(PlaylistJoin playlistJoin){
        Retour ret = new Retour();
        try {
            PreparedStatement statement = this.DATABASE_CONNECT.conn.prepareStatement(
                    "DELETE FROM playlists_join WHERE id = ?");

            statement.setInt(1,playlistJoin.id);
            int affectedRows = statement.executeUpdate();

            if (affectedRows == 0) {
                throw new SQLException("Deleting playlists_join failed, no rows affected.");
            }else{
                ret.msg = "Playlists_join with id : " + playlistJoin.id + " has been delete";
                ret.rowAffected =  affectedRows;
            }

        } catch (SQLException throwables) {
            throwables.printStackTrace();
            ret.err = throwables.getMessage();
        }

        return ret;
    }

}