package com.example.demo.VO.Kakaopay.Response;


import lombok.Data;

@Data
public class PaymentActionDetails {

    private String aid;
    private String approved_at;
    private String payment_action_type;
    private String payload;
    private Integer amount;
    private Integer point_amount;
    private Integer discount_amount;
}
