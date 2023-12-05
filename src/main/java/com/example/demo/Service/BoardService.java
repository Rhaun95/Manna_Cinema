package com.example.demo.Service;

import com.example.demo.Mapper.BoardMapper;
import com.example.demo.VO.Board;
import com.example.demo.entity.ExcelBoard;
import com.example.demo.repository.BoardRepository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardService {

    @Autowired
    private BoardMapper BoardMapper;

    //게시판 목록 조회
    public List<Board> getAll() {
        return BoardMapper.getAll();
    }

    //일대일 문의 목록 조회
    public List<Board> getUser(String user_id) {
        return BoardMapper.getUser(user_id);
    }



    //게시글 하나 조회
    public Board getById(int id) {

        return BoardMapper.getById(id);

    }


    //이전페이지 조회

    //다음페이지 조회


    //insert
    public int insert(Board board) {
        System.out.println("serivce board" + board);
        return BoardMapper.insert(board);
    }

    //delete
    public int delete(int id) {
        return BoardMapper.delete(id);
    }

    //update
    public int update(int id, Board board) {
        return BoardMapper.update(id, board);
    }



    public int addHit(int id, Board board) {

        return BoardMapper.addHit(id, board);
    }

    public List<Board> filterReview(String type) { return BoardMapper.filterReview(type);
    }

    public List<Board> searchReview(String type,String search) {
        return BoardMapper.searchReview(type, search);
    }



    //엑셀 출력 위해 만듬(장호)
    @Autowired
    private BoardRepository boardRepository;

    public List<ExcelBoard> getBoardExcel() { return boardRepository.findAll();}


}


