package com.example.demo.Service;

import com.example.demo.Mapper.BookMarkMapper;
import com.example.demo.VO.BookMark;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookMarkService {

    @Autowired
    private BookMarkMapper BookMarkMapper;

    public  List<BookMark> getAll() {
        return BookMarkMapper.getAll();
    }
    public  List<BookMark> getAllById() {
        return BookMarkMapper.getAllById();
    }

    public List<BookMark> getById(String own_id) {
        return BookMarkMapper.getById(own_id);
    }

    public int insert(BookMark bookMark) {
        return BookMarkMapper.insertMark(bookMark);
    }

    public int delete(int post_id) {
        return BookMarkMapper.deleteMark(post_id);
    }

    //조회수
    public int addHit(int post_id) {

        return BookMarkMapper.addHit(post_id);
    }


    //게시판 필터 (영화관 후기, 영화후기)
    public List<BookMark> filterReview(String type) { return BookMarkMapper.filterReview(type);}



}
