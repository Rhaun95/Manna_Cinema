package com.example.demo.Controller;

import com.example.demo.Service.LikeCommentService;
import com.example.demo.VO.LikeComment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/likeCo")
public class LikeCommentController {

    @Autowired
    private LikeCommentService likeCommentService;

    @GetMapping("/{uid}/{cid}")
    public LikeComment check(@PathVariable("uid") int uid, @PathVariable("cid") int cid) {
        return likeCommentService.check(uid, cid);
    }

    @PostMapping("/insert") // 추가
    public int insert(@RequestBody LikeComment likeComment) {
        return likeCommentService.insert(likeComment);
    }

    //comment ID로 삭제
    @DeleteMapping("/{uid}/{cid}")
    public int delete(@PathVariable("uid") int uid, @PathVariable("cid") int cid) {
        return likeCommentService.delete(uid, cid);
    }



}