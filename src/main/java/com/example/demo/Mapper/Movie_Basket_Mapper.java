package com.example.demo.Mapper;


import com.example.demo.VO.Movie_Basket;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface Movie_Basket_Mapper {

        List<Movie_Basket> getAll();//전체조회
        List<Movie_Basket> getByUsername(String username);
        int addMVBasket(@Param("movie_basket") Movie_Basket movie_basket);//추가
        int deleteById(@Param("id") int id);//삭제
        int deleteAll();
        int updateStatus(@Param("id") int id);//업데이트
        List<Movie_Basket> getAllBooking(@Param("user_id") String user_id);  // user별로조회

        Movie_Basket getById(@Param("id") int id);//id별 예매내역 조회

        Movie_Basket getBooked(@Param("user_id") String user_id);
}
