package com.example.demo.VO.Kakaopay.Response;
import lombok.Data;

@Data
public class SelectedCardInfo {
    private String bin;
    private String card_corp_name;
    private String interest_free_install;
    private Integer install_month;
}
