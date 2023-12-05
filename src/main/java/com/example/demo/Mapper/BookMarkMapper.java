package com.example.demo.Mapper;

import com.example.demo.VO.BookMark;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface BookMarkMapper {

    List<BookMark> getAll();

    List<BookMark> getAllById();

    //북마크용
    List<BookMark> getById(@Param("own_id") String own_id);//id별 조회

    int insertMark(@Param("bookMark") BookMark bookMark);//추가

    int deleteMark(@Param("post_id") int post_id);//삭제

    int addHit(@Param("post_id") int post_id);  //조회수 증가
    List<BookMark> filterReview(@Param("type") String type);


}
