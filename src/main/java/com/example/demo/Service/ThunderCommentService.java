package com.example.demo.Service;

import com.example.demo.Mapper.ThunderCommentMapper;
import com.example.demo.VO.ThunderComment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ThunderCommentService {
    @Autowired
    private ThunderCommentMapper thunderCommentMapper;

    public List<ThunderComment> getAll() {
        return thunderCommentMapper.getAll();
    }

    //댓글 하나 조회
    public List<ThunderComment> getByPostId(int id) {

        return thunderCommentMapper.getByPostId(id);
    }
    public List<ThunderComment> getByUsername(String username){return thunderCommentMapper.getByUsername(username);}
    //댓글 추가
    public int insert(ThunderComment thunderComment) {
        return thunderCommentMapper.insert(thunderComment);
    }
    public int delete(int id) {
        return thunderCommentMapper.delete(id);
    }
    //수정
    public int update(int id, ThunderComment thunderComment){
        return thunderCommentMapper.update(id, thunderComment);
    }



}
