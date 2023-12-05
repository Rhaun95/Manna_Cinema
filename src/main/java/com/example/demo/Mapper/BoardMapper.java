package com.example.demo.Mapper;

import com.example.demo.VO.Board;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface BoardMapper {

        List<Board> getAll();//전체조회

        List<Board> getUser(@Param("user_id") String user_id);//1대1문의 게시판

        Board getById(@Param("id") int id);//id별 조회

        /*        Board movePage(@Param("id") int id); //페이지 이동*/

        int insert(@Param("board") Board board);//추가

        int delete(@Param("id") int id);//삭제

        int update(@Param("id") int id, @Param("board") Board board);//업데이트

        int addHit(@Param("id") int id, @Param("board") Board board); //조회수

        List<Board> filterReview(@Param("type") String type);

        List<Board> searchReview(@Param("type") String type,@Param ("search")String search);



}

