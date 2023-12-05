package com.example.demo.Mapper;

import com.example.demo.entity.Authority2;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AuthprotyMapper {
    List<Authority2> getAll();
}
