package com.example.demo.Service;


import com.example.demo.Mapper.TChatMapper;
import com.example.demo.VO.TChat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TChatService {

    @Autowired
    private TChatMapper tChatMapper;



    public List<TChat> getAll() {
        return tChatMapper.getAllTChat();
    }

    public List<TChat> getId(int tchatid) {
        return tChatMapper.getIdTChat(tchatid);
    }

    public int insert(TChat tchat, int tchatid) {
        return  tChatMapper.insertTChat(tchat, tchatid);
    }

    public int delete(int num) {
        return tChatMapper.deleteTChat(num);
    }
}
