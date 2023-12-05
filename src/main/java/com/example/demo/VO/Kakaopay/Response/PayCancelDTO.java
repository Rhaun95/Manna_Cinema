package com.example.demo.VO.Kakaopay.Response;


import lombok.Data;

@Data
public class PayCancelDTO {

    String tid;

    int cancel_amount;
    int cancel_tax_free_amount;

}
