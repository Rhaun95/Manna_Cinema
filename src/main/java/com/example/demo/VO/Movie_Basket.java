package com.example.demo.VO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Movie_Basket {
    private int id;
    private String user_id;
    private String title;
    private String posterUrl;
    private String movie_time;
    private String reserveDate;
    private String cinema_name;
    private String cinema_id;
    private String seat_num;
    private int total_price;
    private int total_amount;
    private String mbti;
    private int status;
    private String regDate;


}