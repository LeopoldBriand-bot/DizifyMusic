package application.dao;

import application.models.dto.Retour;
import application.models.dto.Song;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class SongsDAO implements GenericDAO<Song> {

    // Create

    @Override
    public Retour add(Song song){
        Retour ret = new Retour();
        try {
            PreparedStatement statement = this.DATABASE_CONNECT.conn.prepareStatement(
                    "INSERT INTO songs (artist_id, album_id, name, duration) VALUES (?, ?, ?, ?)", Statement.RETURN_GENERATED_KEYS);
            statement.setInt(1,song.artistId);
            statement.setInt(2,song.albumId);
            statement.setString(3, song.name);
            statement.setLong(4,song.duration);
            int affectedRows = statement.executeUpdate();

            if (affectedRows == 0) {
                throw new SQLException("Creating song failed, no rows affected.");
            }
            try (ResultSet generatedKeys = statement.getGeneratedKeys()) {
                if (generatedKeys.first()) {
                    ret.msg = "Song created with id : " + generatedKeys.getInt(1);
                    ret.rowAffected = affectedRows;
                }
                else {
                    throw new SQLException("Creating song failed, no ID obtained.");
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
    public Song getById(int id){
        Song song = new Song();
        try {
            PreparedStatement statement = this.DATABASE_CONNECT.conn.prepareStatement("SELECT * FROM songs WHERE id = ?");
            statement.setInt(1,id);
            ResultSet resultSet = statement.executeQuery();
            if (resultSet.first()){
                song.id = resultSet.getInt("id");
                song.artistId = resultSet.getInt("artist_id");
                song.albumId = resultSet.getInt("album_id");
                song.name = resultSet.getString("name");
                song.duration = resultSet.getLong("duration");
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return song;
    }

    @Override
    public List<Song> getAll(){
        List<Song> songs = new ArrayList<Song>();
        try {
            PreparedStatement statement = this.DATABASE_CONNECT.conn.prepareStatement("SELECT * FROM songs");
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()){
                Song song = new Song();
                song.id = resultSet.getInt("id");
                song.artistId = resultSet.getInt("artist_id");
                song.albumId = resultSet.getInt("album_id");
                song.name = resultSet.getString("name");
                song.duration = resultSet.getLong("duration");
                songs.add(song);
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return songs;
    }

    // Update

    @Override
    public Retour update(Song song){
        Retour ret = new Retour();
        try {
            PreparedStatement statement = this.DATABASE_CONNECT.conn.prepareStatement(
                    "UPDATE songs SET artist_id = ?, album_id = ?, name = ?, duration = ? WHERE id = ?");
            statement.setInt(1,song.artistId);
            statement.setInt(2,song.albumId);
            statement.setString(3, song.name);
            statement.setLong(4,song.duration);
            statement.setInt(5,song.id);
            int affectedRows = statement.executeUpdate();

            if (affectedRows == 0) {
                throw new SQLException("Updating song failed, no rows affected.");
            }else{
                ret.msg = "Song with id " + song.id + " has been Updated";
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
    public Retour delete(Song song){
        Retour ret = new Retour();
        try {
            PreparedStatement statement = this.DATABASE_CONNECT.conn.prepareStatement(
                    "DELETE FROM songs WHERE id = ?");

            statement.setInt(1,song.id);
            int affectedRows = statement.executeUpdate();

            if (affectedRows == 0) {
                throw new SQLException("Deleting song failed, no rows affected.");
            }else{
                ret.msg = "Song with id : " + song.id + " has been delete";
                ret.rowAffected =  affectedRows;
            }

        } catch (SQLException throwables) {
            throwables.printStackTrace();
            ret.err = throwables.getMessage();
        }

        return ret;
    }

}