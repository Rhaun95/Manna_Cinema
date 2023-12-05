package com.example.demo.Service;

import com.example.demo.Mapper.LikeCommentMapper;
import com.example.demo.VO.LikeComment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LikeCommentService {

    @Autowired
    private LikeCommentMapper likeCommentMapper;

    //상세 조회(개별)
    public LikeComment check(int uid, int cid) {
        return likeCommentMapper.check(uid, cid);
    }

    public int insert(LikeComment likeComment) {
        return  likeCommentMapper.insertLike(likeComment);
    }

    public int delete(int uid, int cid) {
        return likeCommentMapper.deleteLike(uid, cid);
    }


}


