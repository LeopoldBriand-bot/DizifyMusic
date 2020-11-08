package application.dao;

import application.models.entities.Favoris;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface FavorisRepository extends JpaRepository<Favoris, Integer>, JpaSpecificationExecutor<Favoris> {

}