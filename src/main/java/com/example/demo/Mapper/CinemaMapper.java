package com.example.demo.Mapper;


import com.example.demo.VO.Cinema;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface CinemaMapper {
    List<Cinema> getAllCinema();

    Cinema getIdCinema(@Param("id") int id);//id별 조회

    int insertCinema(@Param("cinema") Cinema cinema);//추가

    int deleteCinema(@Param("id") int id);//삭제

    int updateCinema(@Param("id") int id, @Param("cinema") Cinema cinema);//업데이트
}
