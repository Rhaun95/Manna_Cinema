package com.example.demo.Mapper;

import com.example.demo.VO.Comment;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface CommentMapper {

    List<Comment> getAll();//전체조회

    List<Comment> getReview(@Param ("review_id") int review_id);

    List<Comment> getReview_desc(@Param ("review_id") int review_id);

    Comment getById(@Param("id") int id);//id별 조회

    int insert( @Param("comment") Comment comment);

    int delete( @Param("user_id") String user_id, @Param("posting_num") int posting_num);//삭제

    int update(@Param("posting_num") int posting_num, @Param("comment") Comment comment);//업데이트
/*
    int insert(@Param("board") Comment comment);//추가

    int delete(@Param("id") int id) ;//삭제

    int update(@Param("id") int id,@Param("comment") Comment comment);//업데이트
*/

}