package com.example.demo.VO;

import lombok.Data;

@Data
public class ReviewBoard {
    private int id;
    private String user_id;
    private String title;
    private String content;
    private String regDate;
    private int hit;
    private String type;
    private String url;
    private String cinema_name;
    private int star;
    private String cinema_image;
    private double markerLat;
    private double markerLng;
    private String location;
    private int next;
    private int prev;
    private String nextTitle;
    private String prevTitle;
}
