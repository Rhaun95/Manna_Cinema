package com.example.demo.Service;

import com.example.demo.Mapper.MovieMapper;
import com.example.demo.VO.Movie;
import com.example.demo.entity.ExcelMovie;
import com.example.demo.repository.MovieRepository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    @Autowired
    private MovieMapper movieMapper;

    @Autowired
    private MovieRepository movieRepository;

    //검색
    public List<Movie> searchMovie(String searchData){
        return movieMapper.searchMovie(searchData);
    }

    //전체조회
    public List<Movie> getAll() {
        return movieMapper.getAllMovie();
    }

    //상세 조회(개별)
    public Movie getId(int id) {
        return movieMapper.getIdMovie(id);
    }


    public int insert(Movie movie) {
        return  movieMapper.insertMovie(movie);
    }

    public int delete(int id) {
        return movieMapper.deleteMovie(id);
    }
    //
    public int update(int id,Movie movie) {
        return movieMapper.updateMovie(id,movie);
    }

    public String getStill1(int id){
        return movieMapper.getStill1(id);
    }
    public String getStill2(int id){
        return movieMapper.getStill2(id);
    }
    public String getStill3(int id){
        return movieMapper.getStill3(id);
    }
    public List<ExcelMovie> getMAll() {
        return movieRepository.findAll();
    }


}


