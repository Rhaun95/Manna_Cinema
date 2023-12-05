package com.example.demo.Mapper;

import com.example.demo.entity.User2;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
    public interface SignUpCheck {
       User2 getByIdCheck(@Param("username") String username);
}
