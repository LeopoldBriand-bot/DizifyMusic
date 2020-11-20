package application.dao;

import application.models.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>, JpaSpecificationExecutor<User> {

    public Optional<User> findByNickName(String nickName);

    public Optional<User> findByEmail(String email);

    public Boolean existsByNickName(String nickName);

    public Boolean existsByEmail(String email);


}