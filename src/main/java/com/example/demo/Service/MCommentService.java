package com.example.demo.Service;
import com.example.demo.Mapper.MCommentMapper;
import com.example.demo.VO.MComment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MCommentService {
    @Autowired
    private MCommentMapper mCommentMapper;

    public List<MComment> getAll() {
        return mCommentMapper.getAll();
    }

    //댓글 하나 조회
    public MComment getById(int id) {

        return mCommentMapper.getById(id);
    }

    public int deleteMComment(int id) {
        return mCommentMapper.deleteMComment(id);
    }


}
