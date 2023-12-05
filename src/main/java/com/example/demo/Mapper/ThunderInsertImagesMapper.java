package com.example.demo.Mapper;

import com.example.demo.VO.ThunderInsert_Images;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface ThunderInsertImagesMapper {

//    List<Movie> searchMovie(@Param("searchData") String searchData);
    List<ThunderInsert_Images> getAll();//전체조회
    int insertImages(@Param("images") ThunderInsert_Images images);//추가

    int deleteImages(@Param("id") int id);//삭제
//
//    Movie getIdMovie(@Param("id") int id);//id별 조회
//

//
//    int updateMovie(@Param("id") int id, @Param("movie") Movie movie);//업데이트
//
//    String getStill1(@Param("id") int id);//스틸컷1 조회
//    String getStill2(@Param("id") int id);//스틸컷1 조회
//    String getStill3(@Param("id") int id);//스틸컷1 조회



}

