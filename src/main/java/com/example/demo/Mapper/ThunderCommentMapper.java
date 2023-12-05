package com.example.demo.Mapper;

import com.example.demo.VO.ThunderComment;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface ThunderCommentMapper {

    List<ThunderComment> getAll();//전체조회

   List<ThunderComment> getByPostId(@Param("posting_num") int id);//posting_num별 조회

    int insert( @Param("comment") ThunderComment thunderComment);
    List<ThunderComment> getByUsername(@Param("username") String username);
//
//    int insert(@Param("board") Comment comment);//추가
//
    int delete(@Param("id") int id) ;//삭제

    int update(@Param("id") int id,@Param("thunderComment") ThunderComment thunderComment);//업데이트


}