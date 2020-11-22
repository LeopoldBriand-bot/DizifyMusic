# DizifyMusic
Consult our wiki for more information
## Use with docker

Run `sudo docker-compose up -d` in root folder  
Then go in Seeder folder and run `npm run seed`  
Ensure that your docker networks are created and works with `docker network ls`.  
App is available on localhost:3000  

## Use without docker

Change `spring.datasource.url=jdbc:mariadb://mariadb:3306/Dizify` to  `spring.datasource.url=jdbc:localhost://mariadb:3306/Dizify`  
in /Back/src/main/ressources/application.properties  

Then build ans run Back java application with JAVA 15 JDK  

Change `this.baseURI` variable to you localhost api path in every data-helpers in front folders  
then run `npm run start`  

This suppose to have a mariadb working.  
