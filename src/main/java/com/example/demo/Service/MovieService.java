package com.example.demo.Service;

import com.example.demo.Mapper.LanguageMapper;
import com.example.demo.Mapper.MovieMapper;
import com.example.demo.VO.Language;
import com.example.demo.VO.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    @Autowired
    private MovieMapper movieMapper;

    public List<Movie> getAll() {
        return movieMapper.getAllMovie();
    }

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



}


