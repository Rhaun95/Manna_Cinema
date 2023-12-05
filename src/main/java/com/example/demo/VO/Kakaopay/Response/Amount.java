package com.example.demo.VO.Kakaopay.Response;
import lombok.Data;

@Data
public class Amount {
    String tid;
    private Integer total,tax_free,vat,point,discount;
}

