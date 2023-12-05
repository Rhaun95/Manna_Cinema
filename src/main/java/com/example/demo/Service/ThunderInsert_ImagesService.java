package com.example.demo.Service;

import com.example.demo.Mapper.ThunderInsertImagesMapper;
import com.example.demo.VO.ThunderInsert_Images;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ThunderInsert_ImagesService {

    @Autowired
    private ThunderInsertImagesMapper mapper;


    //전체조회
    public List<ThunderInsert_Images> getAll() {
        return mapper.getAll();
    }
    public int insert(ThunderInsert_Images images) {
        return  mapper.insertImages(images);
    }

    public int delete(int id) {
        return mapper.deleteImages(id);
    }

//
//    //검색
//    public List<ThunderInsert_Images> searchMovie(String searchData){
//        return movieMapper.searchMovie(searchData);
//    }


//    //상세 조회(개별)
//    public Movie getId(int id) {
//        return movieMapper.getIdMovie(id);
//    }
//
//    public int update(int id,Movie movie) {
//        return movieMapper.updateMovie(id,movie);
//    }
//
//    public String getStill1(int id){
//            return movieMapper.getStill1(id);
//    }
//    public String getStill2(int id){
//        return movieMapper.getStill2(id);
//    }
//    public String getStill3(int id){
//        return movieMapper.getStill3(id);
//    }



}


