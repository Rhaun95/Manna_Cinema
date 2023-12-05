package com.example.demo.Mapper.Kakaopay;

import com.example.demo.VO.Kakaopay.KakaoPayReadyVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.Map;


@Mapper
public interface KakaoPayReadyMapper {

    String getTid(String partner_order_id);
    String getItem(String partner_order_id);
    String getAmount(String partner_order_id);
    String getQuantity(String partner_order_id);
    String getUserId(String partner_order_id);
    String getBasketId(String partner_order_id);
    KakaoPayReadyVO getReady(String basket_id);


    int addReady(@Param("ready") KakaoPayReadyVO ready);
//    int insertReady(KakaoPayReadyVO kakaoReady);//추가

    //    int updateReady(KakaoPayReadyVO ReadyVO, String partner_order_id);//추가
    int updateReady(Map members);//추가

}