package application.utils;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class ReadProperties {

    private Properties prop;

    public ReadProperties(String fileName){
        this.loadPropsFromClassPath(fileName);
    }

    public ReadProperties(String filePath, Boolean isInClassPath) {
        if (isInClassPath) {
            this.loadPropsFromClassPath(filePath);
        } else {
            this.loadPropsFromExternalFile(filePath);
        }
    }

    public String getKey(String key){
        if (this.prop != null){
            return this.prop.getProperty(key);
        }
        return null;
    }

    private void loadPropsFromClassPath(String fileName){
        try (InputStream input = ReadProperties.class.getClassLoader().getResourceAsStream(fileName)) {

            prop = new Properties();

            if (input == null) {
                System.out.println("Sorry, unable to find " + fileName);
                return;
            }

            //load a properties file from class path, inside static method
            prop.load(input);

        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }

    private void loadPropsFromExternalFile(String filePath){
        try (InputStream input = new FileInputStream(filePath)) {

            prop = new Properties();

            if (input == null) {
                System.out.println("Sorry, unable to find " + filePath);
                return;
            }

            prop.load(input);
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }
}