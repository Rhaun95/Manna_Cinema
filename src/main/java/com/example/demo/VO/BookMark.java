package com.example.demo.VO;

import lombok.Data;

@Data
public class BookMark {
    private int post_id;
    private String own_id;
    private String user_id;
    private String title;
    private int hit;
    private String regDate;
    private String type;
    private int checkAnswer;
    private String cinema_name;
}
