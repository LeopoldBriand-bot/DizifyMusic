package application.dao;

import application.models.dto.Playlist;
import application.models.dto.PlaylistJoin;
import application.models.dto.Retour;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class PlaylistsDAO implements GenericDAO<Playlist> {

    // Create
    @Override
    public Retour add(Playlist playlist){
        Retour ret = new Retour();
        try {
            PreparedStatement statement = this.DATABASE_CONNECT.conn.prepareStatement(
                    "INSERT INTO playlists (id_playlist, song_id) VALUES (?, ?)", Statement.RETURN_GENERATED_KEYS);
            statement.setInt(1,playlist.idPlaylist);
            statement.setInt(2,playlist.songId);
            int affectedRows = statement.executeUpdate();

            if (affectedRows == 0) {
                throw new SQLException("Creating playlist failed, no rows affected.");
            }
            try (ResultSet generatedKeys = statement.getGeneratedKeys()) {
                if (generatedKeys.first()) {
                    ret.msg = "Playlist created with id : " + generatedKeys.getInt(1);
                    ret.rowAffected = affectedRows;
                }
                else {
                    throw new SQLException("Creating playlist failed, no ID obtained.");
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
    public Playlist getById(int id){
        Playlist playlist = new Playlist();
        try {
            PreparedStatement statement = this.DATABASE_CONNECT.conn.prepareStatement("SELECT * FROM playlists WHERE id = ?");
            statement.setInt(1,id);
            ResultSet resultSet = statement.executeQuery();
            if (resultSet.first()){
                playlist.id = resultSet.getInt("id");
                playlist.idPlaylist = resultSet.getInt("id_playlist");
                playlist.songId = resultSet.getInt("song_id");
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return playlist;
    }

    @Override
    public List<Playlist> getAll(){
        List<Playlist> playlists = new ArrayList<Playlist>();
        try {
            PreparedStatement statement = this.DATABASE_CONNECT.conn.prepareStatement("SELECT * FROM playlists");
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()){
                Playlist playlist = new Playlist();
                playlist.id = resultSet.getInt("id");
                playlist.idPlaylist = resultSet.getInt("id_playlist");
                playlist.songId = resultSet.getInt("song_id");
                playlists.add(playlist);
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return playlists;
    }

    // Update

    @Override
    public Retour update(Playlist playlist){
        Retour ret = new Retour();
        try {
            PreparedStatement statement = this.DATABASE_CONNECT.conn.prepareStatement(
                    "UPDATE playlists SET id_playlist = ?, song_id = ? WHERE id = ?");
            statement.setInt(1,playlist.idPlaylist);
            statement.setInt(2,playlist.songId);
            statement.setInt(3,playlist.id);
            int affectedRows = statement.executeUpdate();

            if (affectedRows == 0) {
                throw new SQLException("Updating playlist failed, no rows affected.");
            }else{
                ret.msg = "Playlist with id " + playlist.id + " has been Updated";
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
    public Retour delete(Playlist playlist){
        Retour ret = new Retour();
        try {
            PreparedStatement statement = this.DATABASE_CONNECT.conn.prepareStatement(
                    "DELETE FROM playlists WHERE id = ?");

            statement.setInt(1,playlist.id);
            int affectedRows = statement.executeUpdate();

            if (affectedRows == 0) {
                throw new SQLException("Deleting playlist failed, no rows affected.");
            }else{
                ret.msg = "Playlist with id : " + playlist.id + " has been delete";
                ret.rowAffected =  affectedRows;
            }

        } catch (SQLException throwables) {
            throwables.printStackTrace();
            ret.err = throwables.getMessage();
        }

        return ret;
    }

}