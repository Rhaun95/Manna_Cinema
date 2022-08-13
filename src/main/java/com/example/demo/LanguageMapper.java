package com.example.demo;


import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.ResultMap;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface LanguageMapper {

        List<Language> getAll();//전체조회

        Language getId(@Param("id") int id);//id별 조회

        int insertTest(@Param("language") Language language);//추가

        int deleteTest(@Param("id") int id);//삭제

        int updateTest(@Param("id") int id, @Param("language") Language language);//업데이트


}

