package com.example.demo.VO.Kakaopay;
import lombok.Data;
import lombok.Getter;

@Data
@Getter
public class CartVO {
    int basket_id;
    String partner_order_id,partner_user_id,item_name;
    int quantity, total_amount;
}
