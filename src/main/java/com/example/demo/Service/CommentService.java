package com.example.demo.Service;

import com.example.demo.Mapper.CommentMapper;
import com.example.demo.VO.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {
    @Autowired
    private CommentMapper commentMapper;

    public List<Comment> getAll() {
        return commentMapper.getAll();
    }

    //후기 댓글보임
    public List<Comment> getReview(int review_id) {
        return commentMapper.getReview(review_id);
    }
    public List<Comment> getReview_desc(int review_id) {
        return commentMapper.getReview_desc(review_id);
    }
    //댓글 하나 조회
    public Comment getById(int id) {

        return commentMapper.getById(id);
    }

    //댓글 추가
    public int insert(Comment comment) {
        return commentMapper.insert(comment);
    }

    //댓글 삭제
    public int delete(String user_id, int posting_num) {
        return commentMapper.delete(user_id, posting_num);
    }
    //update
    public int update(int posting_num, Comment comment) {
        return commentMapper.update(posting_num, comment);
    }

}
