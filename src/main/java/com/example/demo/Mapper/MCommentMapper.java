package com.example.demo.Mapper;

import com.example.demo.VO.MComment;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface MCommentMapper {

    List<MComment> getAll();//전체조회

    MComment getById(@Param("id") int id);//id별 조회

    int deleteMComment(@Param("id") int id);//삭제


}