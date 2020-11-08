package application.dao;

import application.models.entities.Songs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface SongsRepository extends JpaRepository<Songs, Integer>, JpaSpecificationExecutor<Songs> {

}