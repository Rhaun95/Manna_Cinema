package com.example.demo.Mapper.Kakaopay;

import com.example.demo.VO.Kakaopay.AmountVO;
import com.example.demo.VO.Kakaopay.CardVO;
import com.example.demo.VO.Kakaopay.KakaoPayApproveVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

@Mapper
public interface KakaoApproveMapper {
    int insertApprove(KakaoPayApproveVO kakaoApprove);//추가

    List<AmountVO> amount();
    List<CardVO> cardInfo();

    int insertAmount(KakaoPayApproveVO kakaApprove);
    int insertCard(KakaoPayApproveVO kakaoApprove);

    String getTid(String partner_order_id);
    String getAmount(String tid);
    int updatePayment(String tid);
    KakaoPayApproveVO kakaoInfo(String tid);
    KakaoPayApproveVO getApproveInfo(String partner_order_id);
    List <KakaoPayApproveVO> getDetailsPayment(String partner_user_id);
//List <KakaoPayApproveVO> getDetailsPayment(String tid);
    KakaoPayApproveVO getCancelInfo(String tid);
    KakaoPayApproveVO getByBasketId(@Param("basket_id") String basket_id);

    int Approve(Map map);//추가


}
