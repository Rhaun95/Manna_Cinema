package com.example.demo.Mapper;


import com.example.demo.VO.Item_basket;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface item_basketMapper {


    List<Item_basket> getAllItems();
    List<Item_basket> getByUsername(String username);

//    Seat getIdStore(@Param("id") int id);//id별 조회

    int insertItemBasket(@Param("item_basket") Item_basket item_basket);//추가

    int deleteAll();
    int deleteById(@Param("id") int id);//삭제

    int updateStatus(@Param("id") int id);//업데이트

}
