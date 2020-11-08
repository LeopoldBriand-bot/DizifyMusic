package application.dao;

import application.models.entities.Playlists;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface PlaylistsRepository extends JpaRepository<Playlists, Integer>, JpaSpecificationExecutor<Playlists> {

}