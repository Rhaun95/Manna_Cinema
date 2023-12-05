package com.example.demo.Service;

import com.example.demo.Mapper.ReviewBoardMapper;
import com.example.demo.VO.ReviewBoard;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewBoardService {
    @Autowired
    private ReviewBoardMapper ReviewBoardMapper;


    public List<ReviewBoard> getAll() {
        return ReviewBoardMapper.getAll();
    }

    //북마크 조회
/*    public ReviewBoard getBookMark(int id) {
        return ReviewBoardMapper.getBookMark(id);
    }*/

    public ReviewBoard getById(int id) {
        return ReviewBoardMapper.getById(id);
    }

    public int insert(ReviewBoard reviewBoard) {
        return ReviewBoardMapper.insert(reviewBoard);
    }

    public List<ReviewBoard> searchReview(String type, String search) {
        return ReviewBoardMapper.searchReview(type, search);
    }

    public int delete(int id) { return ReviewBoardMapper.delete(id);
    }

    public int update(ReviewBoard reviewBoard, int id) { return ReviewBoardMapper.update(reviewBoard,id);
    }

    //게시판 필터 (영화관 후기, 영화후기)
    public List<ReviewBoard> filterReview(String type) { return ReviewBoardMapper.filterReview(type);
    }

    //조회수
    public int addHit(int id) {

        return ReviewBoardMapper.addHit(id);
    }
}
