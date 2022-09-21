package com.example.demo.Mapper;


import java.util.List;

import com.example.demo.VO.Movie;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface MovieMapper {

    List<Movie> searchMovie(@Param("searchData") String searchData);
    List<Movie> getAllMovie();//전체조회

    Movie getIdMovie(@Param("id") int id);//id별 조회

    int insertMovie(@Param("movie") Movie movie);//추가

    int deleteMovie(@Param("id") int id);//삭제

    int updateMovie(@Param("id") int id, @Param("movie") Movie movie);//업데이트

    String getStill1(@Param("id") int id);//스틸컷1 조회
    String getStill2(@Param("id") int id);//스틸컷1 조회
    String getStill3(@Param("id") int id);//스틸컷1 조회



}

