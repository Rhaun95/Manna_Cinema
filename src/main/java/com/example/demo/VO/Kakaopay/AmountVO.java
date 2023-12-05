package com.example.demo.VO.Kakaopay;

import lombok.Data;

@Data // @Getter, Setter, ToString, EqualAndHashCode, RequireArgsConstructor 을 합쳐놓은 종합선물세트
public class AmountVO {
    String tid;
    private Integer total,
            tax_free,
            vat,
            point,
            discount;
}
