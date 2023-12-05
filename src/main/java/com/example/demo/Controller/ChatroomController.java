package com.example.demo.Controller;

import com.example.demo.Service.ChatroomService;
import com.example.demo.VO.Chatroom;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/chatroom")
public class ChatroomController {
    @Autowired
    private ChatroomService chatroomService;

    @GetMapping("")
    public List<Chatroom> getAll(){
        return chatroomService.getAll();
    }

    @GetMapping("/{id}")
    public List<Chatroom> getById(@PathVariable("id") int postId){
        return chatroomService.getById(postId);
    }

    @PostMapping("")
    public int insert(@RequestBody Chatroom chatroom){
        int res = chatroomService.insert(chatroom);
        if(res == 1){
            System.out.println("참가자가 추가되었습니다.");
            return res;
        }else{
            System.out.println("오류발생");
            return 0;
        }

    }
}
