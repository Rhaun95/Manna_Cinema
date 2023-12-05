package com.example.demo.VO.Kakaopay.Response;

import lombok.Data;

import java.util.Date;

@Data
public class OrderCancelDTO {

    private String cid;
    private String tid;
    private String aid;
    private String status;
    private String partner_order_id;
    private String partner_user_id;
    private String payment_method_type;
    private Amount amount;
    private ApprovedCancelAmount approved_cancel_Amount;
    private CanceledAmount canceled_amount;
    private CancelAvailableAmount cancel_available_amount;
    private String item_name;
    private String item_code;
    private Integer quantity;
    private Date created_at;
    private Date approved_at;
    private Date canceled_at;
}