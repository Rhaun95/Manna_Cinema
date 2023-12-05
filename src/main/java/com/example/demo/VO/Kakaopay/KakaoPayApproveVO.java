package com.example.demo.VO.Kakaopay;

import lombok.Data;
import lombok.Getter;

import java.util.Date;

@Data
@Getter
public class KakaoPayApproveVO{
    private String aid,tid,cid, sid,basket_id;
    private String partner_order_id, partner_user_id, payment_method_type, status;
    private String item_name, item_code;
    private AmountVO amount;
    private CardVO card_info;
    private Integer quantity, tax_free_amount,vat_amount, total_amount;
    private String created_at, approved_at;
    private Date canceled_at;
    private Integer total,tax_free,vat,point,discount;
}