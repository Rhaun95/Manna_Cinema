package com.example.demo.Mapper;

import com.example.demo.VO.Chatroom;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface ChatroomMapper {
    List<Chatroom> getAll();

    List<Chatroom> getById(int postId);

    int insert(@Param("chatroom") Chatroom chatroom);


}
