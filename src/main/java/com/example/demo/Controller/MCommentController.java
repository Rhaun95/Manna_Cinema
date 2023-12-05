package com.example.demo.Controller;

import com.example.demo.Service.MCommentService;
import com.example.demo.VO.MComment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/mcomment")
public class MCommentController {

    @Autowired
    private MCommentService mCommentService;


    @GetMapping("")
    public List<MComment> getAll() {
        return mCommentService.getAll();
    }


    //문의글 답변 하나 조회하기

    @GetMapping("/{id}")
    public MComment get(@PathVariable("id") int id) {

        return mCommentService.getById(id);

    }

    @DeleteMapping("/{id}")
    public String deleteMComment(@PathVariable("id") int id) {
        mCommentService.deleteMComment(id);
        return "삭제";
    }

}


