package com.example.demo.Mapper;


import java.util.List;

import com.example.demo.VO.Language;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface LanguageMapper {

        List<Language> getAll();//전체조회

        Language getId(@Param("id") int id);//id별 조회

        int insertTest(@Param("language") Language language);//추가

        int deleteTest(@Param("id") int id);//삭제

        int updateTest(@Param("id") int id, @Param("language") Language language);//업데이트


}

