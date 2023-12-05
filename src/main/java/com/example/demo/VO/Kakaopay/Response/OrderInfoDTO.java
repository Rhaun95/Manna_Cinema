package com.example.demo.VO.Kakaopay.Response;


import lombok.Data;

import java.util.Date;

@Data
public class OrderInfoDTO {

    String cid;
    String cid_secret;
    String tid;
    String status;
    String partner_order_id;
    String partner_user_id;
    String payment_method_type;
    Amount amount;
    CanceledAmount canceled_amount;
    CancelAvailableAmount cancel_available_amount;
    String item_name;
    String item_code;
    Integer quantity;
    Date created_at;
    Date approved_at;
    Date canceled_at;
    SelectedCardInfo selected_card_info;
    PaymentActionDetails[] payment_action_details;
}