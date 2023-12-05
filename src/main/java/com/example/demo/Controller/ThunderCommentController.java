package com.example.demo.Controller;

import com.example.demo.Service.ThunderCommentService;
import com.example.demo.VO.ThunderComment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/thCo")
public class ThunderCommentController {

    @Autowired
    private ThunderCommentService thunderCommentService;


    @CrossOrigin
    @GetMapping("")
    public List<ThunderComment> getAll() {
        return thunderCommentService.getAll();
    }


    //해당 번개 포스터 댓글 조회하기
    @CrossOrigin
    @GetMapping("/{id}")
    public List<ThunderComment> getByPostId(@PathVariable("id") int id) {
        return thunderCommentService.getByPostId(id);

    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable("id") int id) {
        thunderCommentService.delete(id);
        return id + "번 제품이 삭제되었습니다";
    }

    //문의글 답변 추가
    @CrossOrigin
    @PostMapping("/insert")
    public int addComment(@RequestBody ThunderComment thunderComment) {
        if (thunderCommentService.insert(thunderComment) == 1) {
            System.out.println("댓글추가성공");
            return 1;
        } else {
            System.out.println("오류발생");
            return  0;
        }
    }
    @GetMapping("/select/{username}")
    public List<ThunderComment> getById(@PathVariable("username") String username) {
        return thunderCommentService.getByUsername(username);
    }

    //수정
    @CrossOrigin
    @PutMapping("/{id}")
    public String updateComment(@PathVariable("id")int id, @RequestBody ThunderComment thunderComment) {
         if(thunderCommentService.update(id, thunderComment) == 1 ){
             return id + "번 댓글이 업데이트 되었습니다.";
         }else{
             return "댓글 수정 실패!";
         }
    //삭제

    }
}

