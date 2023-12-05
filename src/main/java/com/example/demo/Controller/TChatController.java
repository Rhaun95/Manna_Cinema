package com.example.demo.Controller;

import com.example.demo.Service.TChatService;
import com.example.demo.VO.TChat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/tchat")
public class TChatController {
    @Autowired
    private TChatService tChatService;
    // 전체 조회
    @GetMapping("")
    public List<TChat> getAll() {
        return tChatService.getAll();
    }
    // 방 별 조회
    @GetMapping("/{tchatid}")
    public List<TChat> getById(@PathVariable("tchatid") int tchatid) {
        return tChatService.getId(tchatid);
    }
    // 채팅 전송 param 값 tchatid 주소값 (각 방 전송)
    @PostMapping("/{tchatid}")
    public TChat post(@RequestBody TChat tchat, @PathVariable("tchatid") int tchatid) {
        tChatService.insert(tchat,tchatid);
        return tchat;
    }
    @DeleteMapping("/{id}")
    public String delete(@PathVariable("id") int id) {
        tChatService.delete(id);
        return id + "번 채팅 삭제";
    }
}
