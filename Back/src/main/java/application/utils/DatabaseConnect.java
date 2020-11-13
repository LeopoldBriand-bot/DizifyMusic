package application.utils;

import java.sql.*;

public class DatabaseConnect {

    public Connection conn;
    private Statement statement;
    public static DatabaseConnect db;
    private DatabaseConnect() {
        ReadProperties props = new ReadProperties("application.properties");
        String url= props.getKey("spring.datasource.url");
        String dbName = props.getKey("spring.datasource.dbName");
        String driver = props.getKey("spring.datasource.driver-class-name");
        String userName = props.getKey("spring.datasource.username");
        String password = props.getKey("spring.datasource.password");
        try {
            Class.forName(driver).newInstance();
            this.conn = (Connection) DriverManager.getConnection(url+dbName,userName,password);
        }
        catch (Exception sqle) {
            sqle.printStackTrace();
        }
    }
    /**
     *
     * @return MysqlConnect Database connection object
     */
    public static synchronized DatabaseConnect getDbCon() {
        if ( db == null ) {
            db = new DatabaseConnect();
        }
        return db;

    }
    /**
     *
     * @param query String The query to be executed
     * @return a ResultSet object containing the results or null if not available
     * @throws java.sql.SQLException
     */
    public ResultSet query(String query)  {
        try {
            statement = db.conn.createStatement();
            ResultSet res = statement.executeQuery(query);
            return res;
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return null;
    }
    /**
     * @desc Method to insert data to a table
     * @param insertQuery String The Insert query
     * @return boolean
     * @throws SQLException
     */
    public int insert(String insertQuery) throws SQLException {
        statement = db.conn.createStatement();
        int result = statement.executeUpdate(insertQuery);
        return result;

    }

}
