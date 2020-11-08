package application.dao;

import application.models.entities.Admins;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface AdminsRepository extends JpaRepository<Admins, Integer>, JpaSpecificationExecutor<Admins> {

}