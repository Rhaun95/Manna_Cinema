package com.example.demo.Controller;

import com.example.demo.Service.LikeThunderService;
import com.example.demo.VO.LikeThunder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/likeTh")
public class LikeThunderController {

    @Autowired
    private LikeThunderService likeThunderService;

    @GetMapping("/{username}/{postingNr}")
    public boolean check(@PathVariable("username") String uid, @PathVariable("postingNr") int cid) {
        if(likeThunderService.check(uid, cid)!=null){
            return true;
        }else{
            return false;
        }
    }

    @PostMapping("/insert") // 추가
    public int insert(@RequestBody LikeThunder likeThunder) {
        return likeThunderService.insert(likeThunder);
    }

    //comment ID로 삭제
    @DeleteMapping("/{username}/{posting_num}")
    public int delete(@PathVariable("username") String uid, @PathVariable("posting_num") int cid) {
        return likeThunderService.delete(uid, cid);
    }
    //usrename으로 좋아요한 번개 전체 조회
    @GetMapping("/{username}")
    public List<LikeThunder> getAll(@PathVariable("username") String uid) {
        return likeThunderService.getAll(uid);
    }



}