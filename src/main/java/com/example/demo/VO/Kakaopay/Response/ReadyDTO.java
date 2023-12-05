package com.example.demo.VO.Kakaopay.Response;

import com.example.demo.VO.Kakaopay.KakaoPayReadyVO;
import lombok.Data;

@Data
public class ReadyDTO extends KakaoPayReadyVO {
    private String tid, next_redirect_url;
    private String created_at;
}
