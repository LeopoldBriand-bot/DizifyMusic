package application.dao;

import application.models.entities.PlaylistsJoin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface PlaylistsJoinRepository extends JpaRepository<PlaylistsJoin, Integer>, JpaSpecificationExecutor<PlaylistsJoin> {

}