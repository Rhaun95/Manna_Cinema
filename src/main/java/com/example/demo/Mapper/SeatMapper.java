package com.example.demo.Mapper;


import com.example.demo.VO.Seat;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface SeatMapper {


    List<Seat> getAllSeats();

//    Seat getIdStore(@Param("id") int id);//id별 조회

//    int insertItemBasket(@Param("item_basket") Seat item_basket);//추가
//
//    int deleteItemBasket(@Param("id") int id);//삭제

    int updateStatus(@Param("id") String id);//업데이트

}
