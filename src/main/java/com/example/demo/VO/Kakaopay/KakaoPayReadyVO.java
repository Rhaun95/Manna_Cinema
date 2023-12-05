package com.example.demo.VO.Kakaopay;

import lombok.Data;
import lombok.Getter;

@Data
@Getter
public class KakaoPayReadyVO {


    private String partner_order_id,partner_user_id, item_name;
    private String tid, next_redirect_pc_url, basket_id;
    private int quantity, total_amount;
    private String created_at;
}

