package com.example.demo.VO.Kakaopay.Response;


import lombok.Data;

@Data
public class CancelAvailableAmount {
    int total, tax_free, vat, point, discount;
}
