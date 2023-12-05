package com.example.demo.Service;

import com.example.demo.Mapper.Movie_Basket_Mapper;
import com.example.demo.VO.Movie_Basket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Movie_Basket_Service {
    @Autowired
    private Movie_Basket_Mapper mapper;


    public List<Movie_Basket> getAll(){
        return mapper.getAll();
    }
    public List<Movie_Basket> getByUsername(String username){
        return mapper.getByUsername(username);
    }
    public int addMVBasket(Movie_Basket movie_basket){
        return mapper.addMVBasket(movie_basket);
    }


    public int deleteAll(){
        return mapper.deleteAll();
    }
    public int deleteById(int id){
        return mapper.deleteById(id);
    }
    public int updateStatus(int id){
        return mapper.updateStatus(id);
    }
    public List<Movie_Basket> getAllBooking(String user_id){
        return mapper.getAllBooking(user_id);
    }

    public Movie_Basket getById(int id) {
        return mapper.getById(id);
    }

    public Movie_Basket getBooked(String user_id) {
        return mapper.getBooked(user_id);
    }
}