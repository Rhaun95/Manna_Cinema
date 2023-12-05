package com.example.demo.Controller;

import com.example.demo.Service.CommentService;
import com.example.demo.VO.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/Co")
public class CommentController {

    @Autowired
    private CommentService commentService;


    @CrossOrigin
    @GetMapping("/comment")
    public List<Comment> getAll() {
        return commentService.getAll();
    }


    @CrossOrigin
    @GetMapping("/reviewComment/{review_id}")
    public List<Comment> getReview(@PathVariable int review_id) {
        return commentService.getReview(review_id);
    }

    @CrossOrigin
    @GetMapping("/reviewComment_desc/{review_id}")
    public List<Comment> getReview_desc(@PathVariable int review_id) {
        return commentService.getReview_desc(review_id);
    }

    //문의글 답변 하나 조회하기
    @CrossOrigin
    @GetMapping("/comment/{id}")
    public Comment get(@PathVariable("id") int id) {

        return commentService.getById(id);

    }

    //문의글 답변 추가
    @CrossOrigin
    @PostMapping("/insertComment")
    public int addComment(@RequestBody Comment comment) {
        if (commentService.insert(comment) == 1) {
            System.out.println("댓글추가성공");
            return 1;
        } else {
            System.out.println("오류발생");
            return  0;
        }

    }

    //문의글 답변 삭제
    @CrossOrigin
    @DeleteMapping("/delete/{user_id}/{posting_num}")
    public String delete(@PathVariable("user_id") String user_id, @PathVariable("posting_num") int posting_num) {

        if (commentService.delete(user_id, posting_num) != 0) {
            System.out.println("성공");
            return "답변삭제 성공";
        } else {
            System.out.println("오류발생");
            return "오류발생";
        }
    }

    @CrossOrigin
    @PutMapping("/update/{posting_num}")
    public int put(@PathVariable int posting_num, @RequestBody Comment comment) {

        if (commentService.update(posting_num, comment) == 1) {
            System.out.println("수정 성공");
            return commentService.update(posting_num, comment);  //res
        } else {
            System.out.println("수정오류발생");
            return commentService.update(posting_num, comment);
        }
    }



}

