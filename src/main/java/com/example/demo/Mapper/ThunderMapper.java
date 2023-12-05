package com.example.demo.Mapper;


import com.example.demo.VO.Thunder;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface ThunderMapper {
    List<Thunder> searchStore(@Param("searchData") String searchData);
    List<Thunder> getAll();

    List<Thunder> getByLocation(@Param("loc") String location);

    Thunder getById(@Param("id") int id);//id별 조회
    List<Thunder> getByUsername(@Param("username") String username);
    List<Thunder> getWanted(@Param("username") String username,@Param("location") String location);

    List<Thunder> getHot();


    List<Thunder> getByAll(@Param("cat") String category, @Param("loc") String location, @Param("username") String username);

    int insertThunder(@Param("thunder") Thunder thunder);//추가

    int deleteThunder(@Param("id") int id);//삭제

//    int updateThunder(@Param("id") int id, @Param("thunder") Thunder thunder);//업데이트
}
