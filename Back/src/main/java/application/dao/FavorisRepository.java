package application.dao;

//public interface FavorisRepository extends JpaRepository<Favoris, Integer>, JpaSpecificationExecutor<Favoris> {
//
//}


import application.models.entities.Favoris;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FavorisRepository extends CrudRepository<Favoris, Integer>{

}