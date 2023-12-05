package com.example.demo.repository;


//entity 패키지 안에 있는 User 에 매핑되는 인터페이스

import com.example.demo.entity.User;
import com.example.demo.entity.User2;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

//JpaRepository을 extends를 하면서 사용할 메서드 추가 (findAll, findAllById, saveAll
public interface UserRepository extends JpaRepository<User, Long> {

    //@EntityGraph는 쿼리가 수행될때 Lazy조회가 아니고
    // Eager조회로 authorities정보를 가지고옴
    //findOneWithAuthoritiesByUsername 는 username을 기준으로 User정보를 가져올때 권한 정보도 같이 가져옴
    @EntityGraph(attributePaths = "authorities")
    Optional<User> findOneWithAuthoritiesByUsername(String username);

    //회원가입 idCheck -> 사용목적에 추가
    // select * from user where username = ?
    // 리턴타입 : user
    // 매개변수 : username(String타입)
    boolean findByUsername(String username);

}
