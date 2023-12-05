package com.example.demo.Controller;


import com.example.demo.Service.BookMarkService;
import com.example.demo.VO.BookMark;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/Bm")
public class BookMarkController {

    @Autowired
    private BookMarkService bookMarkService;


    //북마크
    @CrossOrigin
    @GetMapping( "/bookMark/{own_id}")
    public List<BookMark> get(@PathVariable("own_id") String own_id) {

        return bookMarkService.getById(own_id);
    }
    //필터



    @CrossOrigin
    @GetMapping("/bookMark/markReview")
    public List<BookMark>getAllById(){
        System.out.println(bookMarkService.getAllById());
        return bookMarkService.getAllById();
    }


    @CrossOrigin
    @PostMapping("/bookMark")
    public int add(@RequestBody BookMark bookMark) {
        try{
            return  bookMarkService.insert(bookMark);
        } catch (Exception e){
            System.out.println("북마크 오류발생");
            return 0;
        }

    }
    //필터
    @CrossOrigin
    @GetMapping("/filter/{type}")
    public List<BookMark> filterReview(@PathVariable("type") String type){ return bookMarkService.filterReview(type);}



    @CrossOrigin
    @DeleteMapping("/bookMark/{post_id}")
    public String delete(@PathVariable("post_id") int post_id) {

        if (bookMarkService.delete(post_id) != 0) {
            System.out.println("성공");
            return "성공";
        } else {
            System.out.println("오류발생");
            return "오류발생";
        }
    }


    //북마크 조회수 증가
    @CrossOrigin
    @PutMapping("/bookMark/addHit/{post_id}")
    public int addHit(@PathVariable("post_id") int post_id) {
        int result = bookMarkService.addHit(post_id);
        if (result == 1) {
            System.out.println("조회수 추가 성공");
            return result;
        } else {
            System.out.println("조회수 실패");
            return 0;
        }

    }

}
