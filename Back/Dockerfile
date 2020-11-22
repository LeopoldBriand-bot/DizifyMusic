FROM mcr.microsoft.com/java/jre-headless:15u1-zulu-alpine
COPY target/DizifyMusic-1.0-SNAPSHOT.jar /dizify.war

CMD ["/usr/bin/java", "-jar", "/dizify.war"]
