package application.dao;

import application.models.entities.Playlist;
import application.models.entities.PlaylistJoin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlaylistJoinRepository extends JpaRepository<PlaylistJoin, Integer>, JpaSpecificationExecutor<PlaylistJoin> {

    List<PlaylistJoin> getAllByUserId(Integer userId);
}