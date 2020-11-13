package application.dao;

import application.models.entities.PlaylistJoin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface PlaylistJoinRepository extends JpaRepository<PlaylistJoin, Integer>, JpaSpecificationExecutor<PlaylistJoin> {

}