package application.dao;

import application.models.dto.Retour;
import application.models.dto.User;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class UsersDAO implements GenericDAO<User> {

    // Create

    @Override
    public Retour add(User user){
        Retour ret = new Retour();
        try {
            PreparedStatement statement = this.DATABASE_CONNECT.conn.prepareStatement(
                    "INSERT INTO users (nick_name, avatar_img, birth_date, email) VALUES (?, ?, ?, ?)", Statement.RETURN_GENERATED_KEYS);
            statement.setString(1,user.nickName);
            statement.setString(2,user.avatarImg);
            statement.setDate(3, new Date(user.birthDate.getTime()));
            statement.setString(4,user.email);
            int affectedRows = statement.executeUpdate();

            if (affectedRows == 0) {
                throw new SQLException("Creating user failed, no rows affected.");
            }
            try (ResultSet generatedKeys = statement.getGeneratedKeys()) {
                if (generatedKeys.first()) {
                    ret.msg = "User created with id : " + generatedKeys.getInt(1);
                    ret.rowAffected = affectedRows;
                }
                else {
                    throw new SQLException("Creating user failed, no ID obtained.");
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
    public User getById(int id){
        User user = new User();
        try {
            PreparedStatement statement = this.DATABASE_CONNECT.conn.prepareStatement("SELECT * FROM users WHERE id = ?");
            statement.setInt(1,id);
            ResultSet resultSet = statement.executeQuery();
            if (resultSet.first()){
                user.id = resultSet.getInt("id");
                user.nickName = resultSet.getString("nick_name");
                user.avatarImg = resultSet.getString("avatar_img");
                user.birthDate = resultSet.getTimestamp("birth_date");
                user.email = resultSet.getString("email");
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return user;
    }

    @Override
    public List<User> getAll(){
        List<User> users = new ArrayList<User>();
        try {
            PreparedStatement statement = this.DATABASE_CONNECT.conn.prepareStatement("SELECT * FROM users");
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()){
                User user = new User();
                user.id = resultSet.getInt("id");
                user.nickName = resultSet.getString("nick_name");
                user.avatarImg = resultSet.getString("avatar_img");
                user.birthDate = resultSet.getTimestamp("birth_date");
                user.email = resultSet.getString("email");
                users.add(user);
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return users;
    }

    // Update

    @Override
    public Retour update(User user){
        Retour ret = new Retour();
        try {
            PreparedStatement statement = this.DATABASE_CONNECT.conn.prepareStatement(
                    "UPDATE users SET nick_name = ?, avatar_img = ?, birth_date = ?, email = ? WHERE id = ?");
            statement.setString(1,user.nickName);
            statement.setString(2,user.avatarImg);
            statement.setDate(3,new Date(user.birthDate.getTime()));
            statement.setString(4,user.email);
            statement.setInt(5,user.id);
            int affectedRows = statement.executeUpdate();

            if (affectedRows == 0) {
                throw new SQLException("Updating user failed, no rows affected.");
            }else{
                ret.msg = "User with id " + user.id + " has been Updated";
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
    public Retour delete(User user){
        Retour ret = new Retour();
        try {
            PreparedStatement statement = this.DATABASE_CONNECT.conn.prepareStatement(
                    "DELETE FROM users WHERE id = ?");

            statement.setInt(1,user.id);
            int affectedRows = statement.executeUpdate();

            if (affectedRows == 0) {
                throw new SQLException("Deleting user failed, no rows affected.");
            }else{
                ret.msg = "User with id : " + user.id + " has been delete";
                ret.rowAffected =  affectedRows;
            }

        } catch (SQLException throwables) {
            throwables.printStackTrace();
            ret.err = throwables.getMessage();
        }

        return ret;
    }

}