package com.example.demo.Controller;

import com.example.demo.Service.ReviewBoardService;
import com.example.demo.VO.ReviewBoard;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/RB")
public class ReviewBoardController {

    @Autowired
    private ReviewBoardService reviewBoardService;

    @CrossOrigin
    @GetMapping("/reviewBoard")
    public List<ReviewBoard> getReview(){
        return reviewBoardService.getAll();
    }

    //필터
    @CrossOrigin
    @GetMapping("/filter/{type}")
    public List<ReviewBoard> filterReview(@PathVariable("type") String type){ return reviewBoardService.filterReview(type);}


    //검색
    @CrossOrigin
    @GetMapping("/search/{type}/{search}")
    public List<ReviewBoard> searchReview(@PathVariable("type") String type,@PathVariable("search") String search){
        return reviewBoardService.searchReview(type,"%" + search + "%");
    }


    //게시글 하나 조회
    @CrossOrigin
    @GetMapping("/reviewBoard/{id}")
    public ReviewBoard get (@PathVariable("id") int id) {
        return reviewBoardService.getById(id);
    }


    //추가
    @CrossOrigin
    @PostMapping("/reviewBoard")
    public int insert(@RequestBody ReviewBoard reviewBoard) {
        if (reviewBoardService.insert(reviewBoard) == 1) {
            System.out.println("후기 추가성공");
            return 1;
        } else {
            System.out.println("후기 추가 실패");
            return 0;
        }

    }
    //문의글 수정
    //수정
    @CrossOrigin
    @PutMapping("/update/{id}")
    public int update(@PathVariable("id") int id, @RequestBody ReviewBoard reviewBoard) {
        if (reviewBoardService.update(reviewBoard,id) == 1) {
            System.out.println("성공");
            return 1;
        } else {
            System.out.println("오류발생");
            return 0;
        }
    }



    //삭제
    @CrossOrigin
    @DeleteMapping("/reviewBoard/{id}")

    public int delete(@PathVariable("id") int id) {

        if (reviewBoardService.delete(id) != 0) {
            System.out.println("성공");
            return 1;
        } else {
            System.out.println("오류발생");
            return 0;
        }
    }

    //조회수
    @CrossOrigin
    @PutMapping("/reviewBoard/addHit/{id}")
    public int addHit(@PathVariable("id") int id) {
        int result = reviewBoardService.addHit(id);
        if (result == 1) {
            System.out.println("조회수 추가 성공");
            return result;
        } else {
            System.out.println("조회수 실패");
            return 0;
        }

    }
}
