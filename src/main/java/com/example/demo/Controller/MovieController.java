package com.example.demo.Controller;

import java.time.LocalTime;
import java.util.List;

import com.example.demo.Service.LanguageService;
import com.example.demo.Service.MovieService;
import com.example.demo.VO.Language;
import com.example.demo.VO.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@RestController
@RequestMapping("/movie")
public class MovieController {

    @Autowired
    private MovieService movieService;


    @GetMapping("") // 전체 조회
    public List<Movie> getAll() {
        return movieService.getAll();
    }


    @GetMapping("/{id}")
    public Movie getById(@PathVariable("id") int id) {
        return movieService.getId(id);
    }

    @PostMapping("insert") // 추가
    public Movie post(@RequestBody Movie movie) {
        movieService.insert(movie);
        return movie;
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable("id") int id) {
        movieService.delete(id);
        return id + "번 제품이 삭제되었습니다";
    }

    @PutMapping("/{id}")
    public String update(@PathVariable("id") int id, @RequestBody Movie movie) {
        movieService.update(id, movie);
        return id + "번 제품 수정되었습니다." + LocalTime.now();
    }


    @GetMapping("/{id}/still1")
    public String getStill1(@PathVariable("id") int id){
        return movieService.getStill1(id);
    }
    @GetMapping("/{id}/still2")
    public String getStill2(@PathVariable("id") int id){
        return movieService.getStill2(id);
    }
    @GetMapping("/{id}/still3")
    public String getStill3(@PathVariable("id") int id){
        return movieService.getStill3(id);
    }




}