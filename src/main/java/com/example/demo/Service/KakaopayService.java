package com.example.demo.Service;

import com.example.demo.Mapper.Kakaopay.AmountMapper;
import com.example.demo.Mapper.Kakaopay.KakaoApproveMapper;
import com.example.demo.Mapper.Kakaopay.KakaoPayReadyMapper;
import com.example.demo.VO.Kakaopay.*;
import com.example.demo.VO.Kakaopay.Response.OrderCancelDTO;
import com.example.demo.VO.Kakaopay.Response.ReadyDTO;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Log
public class KakaopayService {

    @Autowired
    private KakaoPayReadyMapper ReadyMapper;
    @Autowired
    private KakaoApproveMapper ApproveMapper;

//    @Autowired
//    private CartMapper cartMapper;

    @Autowired
    private AmountMapper amountMapper;

    private static final String HOST = "https://kapi.kakao.com";
    private KakaoPayApproveVO ApproveVO;
    private OrderCancelDTO orderCancelDTO;
    private KakaoPayReadyVO ReadyVO;
    private AmountVO amountVO;
    private CardVO cardVO;
    public HttpHeaders getHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "KakaoAK " + "6944c4771096e7e9cc99cd537774e037");
        headers.set("Accept", MediaType.APPLICATION_JSON_UTF8_VALUE);
        headers.set("Content-Type", MediaType.APPLICATION_FORM_URLENCODED_VALUE + ";charset=UTF-8");

        return headers;
    }
    //  테스트 코드
    String TestCid = "TC0ONETIME"; // 실제 결제에서는 cid를 발급받아야 사용가능. 이 프로젝트에선 테스트코드 사용.

    public String ReadyVO(String partner_order_id) {

        // 서버로 요청할 Body
        MultiValueMap<String, String> params = new LinkedMultiValueMap<String, String>();
        params.add("cid", TestCid);            // 필수값 - 가맹점코드
        params.add("partner_order_id", partner_order_id);    // 필수값 - 가맹점 주문번호
        params.add("partner_user_id", ReadyMapper.getUserId(partner_order_id));    // 필수값 - 가맹점 회원 id
        params.add("item_name", ReadyMapper.getItem(partner_order_id));      // 필수값 - 상품이름
        params.add("quantity", ReadyMapper.getQuantity(partner_order_id));                // 필수값 - 상품수량
        params.add("total_amount", ReadyMapper.getAmount(partner_order_id));       // 필수값 - 총 금액
        params.add("tax_free_amount", "100");       // 필수값 - 면세금액
        params.add("approval_url", "http://localhost:3000/payment/paymentApproved?partner_order_id=" + partner_order_id);    // 필수값 - 결제성공시 연결 url
        params.add("cancel_url", "http://localhost:3000/payment/paymentCancel");       // 필수값 - 결제 취소
        params.add("fail_url", "http://localhost:3000/payment/kakaoPayFail");    // 필수값 - 결제 실패

        RestTemplate restTemplate = new RestTemplate();
        HttpEntity<MultiValueMap<String, String>> body = new HttpEntity<MultiValueMap<String, String>>(params, this.getHeaders());

        String url = "/v1/payment/ready";
        try {
            ReadyVO = restTemplate.postForObject(HOST + url, body, ReadyDTO.class);
        }catch (RestClientException e) {
            e.printStackTrace();
        }
//        카카오페이 서버에 준비요청을 보냈을 때 리턴되는 값에는 partner_order_id가 없음.
//        response된 값을 파라미터로 전달받은 partner_order_id와 같이 사용하기 위해 Hashmap 사용
        Map<String, String> response = new HashMap<>();
        response.put("tid", ReadyVO.getTid());
        response.put("created_at", ReadyVO.getCreated_at());
        response.put("partner_order_id", partner_order_id);


        log.info("--------------------------------------------------------------------------------------");
        log.info("결제준비 요청 바디 : " + body);
        log.info("결제준비 정보 : " + ReadyVO);
        log.info("redirect url : " + ReadyVO.getNext_redirect_pc_url());
        log.info( "Kakaopay API Response : "+ String.valueOf(response));
        log.info("--------------------------------------------------------------------------------------");

        ReadyMapper.updateReady(response);

        return ReadyVO.getNext_redirect_pc_url();
    }

    //    public KakaoPayApproveVO ApproveVO(String pg_token, String partner_order_id) {
    public String ApproveVO(String pg_token, String partner_order_id) {
        log.info("kakaoPayApprove");

        log.info("--------------------------------------------------------------------------------------");

        RestTemplate restTemplate = new RestTemplate();

        MultiValueMap<String, String> params = new LinkedMultiValueMap<String, String>();
        params.add("cid", TestCid);
        params.add("tid", ReadyMapper.getTid(partner_order_id));
        params.add("partner_order_id", partner_order_id);
        params.add("partner_user_id", ReadyMapper.getUserId(partner_order_id));
        params.add("pg_token", pg_token);
        params.add("total_amount", ReadyMapper.getAmount(partner_order_id));

        HttpEntity<MultiValueMap<String, String>> body = new HttpEntity<MultiValueMap<String, String>>(params, this.getHeaders());
        String url = "/v1/payment/approve";
        try {
            ApproveVO = restTemplate.postForObject(HOST + url, body, KakaoPayApproveVO.class);
//            ApproveMapper.insertApprove(ApproveVO);
            Map<String, String> response = new HashMap<>();
            response.put("tid", ApproveVO.getTid());
            response.put("partner_order_id", ApproveVO.getPartner_order_id());
            response.put("partner_user_id", ApproveVO.getPartner_user_id());
            response.put("payment_method_type", ApproveVO.getPayment_method_type());
            response.put("item_name", ApproveVO.getItem_name());
            response.put("total_amount", ReadyMapper.getAmount(partner_order_id));
            response.put("quantity", ReadyMapper.getAmount(partner_order_id));
            response.put("created_at", ApproveVO.getCreated_at());
            response.put("approved_at", ApproveVO.getApproved_at());
            response.put("basket_id", ReadyMapper.getBasketId(partner_order_id));

            log.info("basketId" + ReadyMapper.getBasketId(partner_order_id));

            log.info("amount" + ReadyMapper.getAmount(partner_order_id));
            log.info("basketId" + ReadyMapper.getQuantity(partner_order_id));


            ApproveMapper.Approve(response);
            ApproveMapper.insertAmount(ApproveVO);
            ApproveMapper.insertCard(ApproveVO);
        }catch(HttpClientErrorException e){
            e.printStackTrace();
            log.info("이미 승인된 건입니다!");
            return ReadyMapper.getTid(partner_order_id);
        }




        log.info("--------------------------------------------------------------------------------------");
        log.info("결제 승인 요청 바디 : " + body);
        log.info("결제 승인 정보 : " + ApproveVO);
        log.info("DB 결제 승인 정보  :"+ ApproveMapper.getApproveInfo(partner_order_id));
        log.info("결제 완료 TID : " + ApproveMapper.getTid(partner_order_id));
        log.info(ApproveMapper.getTid(partner_order_id));
        log.info("--------------------------------------------------------------------------------------");



        return ApproveMapper.getTid(partner_order_id);




    }


    // 장바구니 db에 담아서 auto_increment로 자동으로 주문번호 생성
    // 카카오페이를 통한 결제 조회, 프로젝트에선 사용 하지 않았음

//        public OrderInfoDTO OrderInfo(String partner_order_id){
//        RestTemplate restTemplate = new RestTemplate();
//        log.info("주문 정보 조회 요청 ");
//        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
//        params.add("cid", TestCid);
//        params.add("tid", String.valueOf(ApproveMapper.getTid(partner_order_id)));
//
//        HttpEntity<MultiValueMap<String, String>> body = new HttpEntity<MultiValueMap<String, String>>(params, this.getHeaders());
//        String url = "/v1/payment/order";
//
//        OrderInfoDTO orderInfo = restTemplate.postForObject(HOST+url, body, OrderInfoDTO.class);
//
//        log.info("주문 정보 :"+body);
//        log.info("주문 상세 정보 : " + orderInfo);
//
//        return orderInfo;
//    }

    public int addReady(KakaoPayReadyVO ready){
        log.info("addCart return : "+String.valueOf(ReadyMapper.addReady(ready)));
        return ReadyMapper.addReady(ready);
    }
    // 장바구니 번호로 주문번호 가져오기
    public KakaoPayReadyVO getReady(String basket_id){
        log.info("getCart return : "+String.valueOf(ReadyMapper.getReady(basket_id)));
        return ReadyMapper.getReady(basket_id);
    }

    // 결제 완료 후 결제정보 가져오기
    public KakaoPayApproveVO kakaoInfo(String tid){
        log.info("결제 정보 조회 요청  : "+ ApproveMapper.kakaoInfo(tid));
        return ApproveMapper.kakaoInfo(tid);
    }

    public List<KakaoPayApproveVO> getDetailsPayment(String partner_user_id){
        log.info(" getDetailsPayment :  "+String.valueOf(ApproveMapper.getDetailsPayment(partner_user_id)));
        return ApproveMapper.getDetailsPayment(partner_user_id);
    }


//    public List<KakaoPayApproveVO> getDetailsPayment(String tid){
//        log.info(" getDetailsPayment :  "+String.valueOf(ApproveMapper.getDetailsPayment(tid)));
//        return ApproveMapper.getDetailsPayment(tid);
//    }



    public OrderCancelDTO cancelPayment(String tid){
        RestTemplate restTemplate = new RestTemplate();
        log.info("카카오페이 결제 취소 요청");
        MultiValueMap<String,String> params = new LinkedMultiValueMap<>();
        params.add("cid", TestCid);
        params.add("tid", tid);
        params.add("cancel_amount", String.valueOf(ApproveMapper.getAmount(tid)));
        params.add("cancel_tax_free_amount", "100");

        HttpEntity<MultiValueMap<String,String>> body = new HttpEntity<>(params, this.getHeaders());

        String url = "/v1/payment/cancel";

        try {
            orderCancelDTO =
                    restTemplate.postForObject(HOST+url, body, OrderCancelDTO.class);

            if(orderCancelDTO != null){
                ApproveMapper.updatePayment(tid);
//               log.info(String.valueOf(orderCancelDTO));
            }
            return orderCancelDTO;
        } catch(RestClientException e){
            log.info(e.getMessage());
            log.info("취소는 완료됬지만 정보 가져올 수 없음");
        }
        return null;
    }

    public KakaoPayApproveVO getCancelInfo(String tid){
        log.info("CancelInfo" + ApproveMapper.getCancelInfo(tid));
        return  ApproveMapper.getCancelInfo(tid);

    }

    public KakaoPayApproveVO getByBasketId(String basket_id){
        return ApproveMapper.getByBasketId(basket_id);
    }
}
