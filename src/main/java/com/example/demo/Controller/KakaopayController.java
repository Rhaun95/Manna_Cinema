package com.example.demo.Controller;

//import com.example.demo.Service.CartService;

import com.example.demo.Service.KakaopayService;
import com.example.demo.VO.Kakaopay.KakaoPayApproveVO;
import com.example.demo.VO.Kakaopay.KakaoPayReadyVO;
import com.example.demo.VO.Kakaopay.Response.OrderCancelDTO;
import lombok.Setter;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@CrossOrigin
@Log
@RestController
@RequestMapping("/payment")
public class KakaopayController {
    @Setter(onMethod_ = @Autowired)

    private KakaopayService kakaoPay;

//    @Autowired
//    private CartService cartService;
//
//    @PostMapping("/addCart")
//    public CartVO add(@RequestBody CartVO cart){
//        cartService.addCart(cart);
//        log.info("addCart 요청");
//        log.info("장바구니 정보 DB추가"+String.valueOf(cart));
//        return cart;
//    }

    @PostMapping("/addCart")
    public KakaoPayReadyVO add(@RequestBody KakaoPayReadyVO ReadyVO){
        kakaoPay.addReady(ReadyVO);
        log.info("addCart 요청");
        log.info("장바구니 정보 DB추가"+String.valueOf(ReadyVO));
        return ReadyVO;
    }
    @GetMapping("/getCart")
    public KakaoPayReadyVO getReady(@RequestParam("basket_id") String basket_id){
        log.info("basket_id: " + basket_id);
        log.info("getCart 요청");
        return kakaoPay.getReady(basket_id);
    }

//    @GetMapping("/getCart")
//    public CartVO getCart(@RequestParam("basket_id") int basket_id){
//        log.info("basket_id: " + String.valueOf(basket_id));
//        log.info("getCart 요청");
//        return cartService.getCart(basket_id);
//
//    }




    @PostMapping("/kakaoPay")
    public String kakaoPay(@RequestParam("partner_order_id") String partner_order_id){
        log.info("결제 준비 요청");
        return  kakaoPay.ReadyVO(partner_order_id);
    }

    @GetMapping("/kakaoPaySuccess")
    public String kakaoPaySuccess(@RequestParam("pg_token") String pg_token,@RequestParam("partner_order_id")String partner_order_id){

        log.info("kakaoPaySuccess get");
        log.info("kakaoPaySuccess pg_token : "+ pg_token);
        log.info("kakaoPaySuccess partner_order_id : " + partner_order_id);
        return kakaoPay.ApproveVO(pg_token, partner_order_id);
    }






//    @GetMapping("/kakaoPayCancel")
//    public void kakaoPayCancel(){
//    }
//
//    @GetMapping("/kakaoPayFail")
//    public void kakaoPayFail(){
//    }

    @GetMapping("/kakaoInfo")
    public KakaoPayApproveVO kakaoInfo(@RequestParam("tid") String tid){
        log.info("결제 정보 조회 요청 파라미터 : " + tid);
        return kakaoPay.kakaoInfo(tid);
    }

    @GetMapping("/detailsPayment")
    public List<KakaoPayApproveVO> detailsPayment(@RequestParam("partner_user_id") String partner_user_id){
        log.info(" Ctrl : details"+String.valueOf(kakaoPay.getDetailsPayment(partner_user_id)));
        return kakaoPay.getDetailsPayment(partner_user_id);
    }


    @PostMapping("/cancelPayment")
    public OrderCancelDTO cancelPayment(@RequestParam("tid")String tid){
        log.info("결제 취소요청, cancel_tid : " + tid);
        return kakaoPay.cancelPayment(tid);
    }
    @GetMapping("/cancelPayment")
    public  KakaoPayApproveVO getCancelInfo(@RequestParam("tid") String tid){
        log.info("basket_id: " + tid);
        log.info("getCancelInfo 요청");
        return kakaoPay.getCancelInfo(tid);
    }

    @GetMapping("/getByBasketId/{basket_id}")
    public  KakaoPayApproveVO getByBasketId(@PathVariable("basket_id") String basket_id){
        log.info("basket_id: " + basket_id);
        return kakaoPay.getByBasketId(basket_id);
    }

//    @PostMapping("/orderInfo")
//    public KakaoPayApproveVO infoPayment(@RequestParam("partner_order_id")String partner_order_id){
////        kakaoPay.infoPayment(approveVO);
//    }
//        return kakaoPay.OrderInfo(partner_order_id);
//    }

}