package com.example.demo.Mapper;


import com.example.demo.VO.Store;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface StoreMapper {
    List<Store> searchStore(@Param("searchData") String searchData);
    List<Store> getAllStore();

    Store getIdStore(@Param("id") int id);//id별 조회

    int insertStore(@Param("store") Store store);//추가

    int deleteStore(@Param("id") int id);//삭제

    int updateStore(@Param("id") int id, @Param("store") Store store);//업데이트
}
