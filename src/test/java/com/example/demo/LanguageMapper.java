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


        @Insert("INSERT INTO language(name,last_update) VALUES (#{language.name} ,CURRENT_TIMESTAMP())")
        @Options(useGeneratedKeys=true,keyProperty="id")
        int insert(@Param("language") Language language);

        @Select("SELECT * FROM language")//리스트 전체 조회
        @Results(id="languageMap", value={
                @Result(property="id",column="language_id")
        })
        List<Language> getAll();

        @Select("Select * FROM language WHERE language_id=#{id}")//개별 조회
        @ResultMap("languageMap")
        Language getById(@Param("id") int id);

        @Delete("DELETE FROM language WHERE language_id = #{id}")
        @ResultMap("languageMap")
        int deleteId(@Param("id") int id);

        @Update("UPDATE language SET name=#{language.name}, last_update=CURRENT_TIMESTAMP() WHERE language_id=#{id}")
        @ResultMap("languageMap")
        int update(@Param("id") int id, @Param("language") Language language);



    }

