package com.example.demo.VO;
import lombok.Data;

@Data
public class Item_basket {

    private int id;
    private String user_id;
    private String item_name;
    private int total_price;
    private int total_amount;
    private String item_image;
    private int  status;
    private String regDate;
}

