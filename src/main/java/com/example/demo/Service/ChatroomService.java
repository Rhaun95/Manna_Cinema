package com.example.demo.Service;

import com.example.demo.Mapper.ChatroomMapper;
import com.example.demo.VO.Chatroom;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatroomService {
    @Autowired
    private ChatroomMapper chatroomMapper;


    public List<Chatroom> getAll(){
        return chatroomMapper.getAll();
    };
    public List<Chatroom> getById(int postId){
        return chatroomMapper.getById(postId);
    };

    public int insert(Chatroom chatroom){
        return chatroomMapper.insert(chatroom);
    }
}
