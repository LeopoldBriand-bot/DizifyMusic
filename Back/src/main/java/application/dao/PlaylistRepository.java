package application.dao;

import application.models.entities.Playlist;
import application.models.entities.PlaylistJoin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlaylistRepository extends JpaRepository<Playlist, Integer>, JpaSpecificationExecutor<Playlist> {

    List<Playlist> getAllSongByPlaylistJoinId(Integer playlistJoinId);

}