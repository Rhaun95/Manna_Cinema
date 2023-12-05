package com.example.demo.VO;

import lombok.Data;

@Data
public class Board {


    private int id;
    private String user_id;
    private String title;
    private String content;
    private String regDate;
    private int hit;
    private String type;
    private int next;
    private int prev;
    private String nextTitle;
    private String prevTitle;
    private int secret;
    private String board_pw;






}
