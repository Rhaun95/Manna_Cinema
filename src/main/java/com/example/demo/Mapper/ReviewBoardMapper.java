package com.example.demo.Mapper;

import com.example.demo.VO.ReviewBoard;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface ReviewBoardMapper {
    List<ReviewBoard> getAll(); //전체조회
    /*    ReviewBoard getBookMark(@Param("id") int id);//북마크 전체 조회*/

    ReviewBoard getById(@Param("id") int id);//id별 조회

    int insert(@Param("reviewBoard") ReviewBoard reviewBoard);

    //검색
    List<ReviewBoard> searchReview(@Param("type") String type,@Param ("search")String search);

    int delete(@Param("id") int id);

    int addHit(@Param("id") int id);

    List<ReviewBoard> filterReview(@Param("type") String type);

    int update(@Param("reviewBoard") ReviewBoard reviewBoard, @Param("id") int id);

}


