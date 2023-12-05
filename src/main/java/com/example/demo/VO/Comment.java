package com.example.demo.VO;

import lombok.Data;

@Data
public class Comment {
    private int id;
    private String user_id;
    private String content;
    private String title;
    private String regDate;
    private int posting_num;
    private String type;
    private int review_id;
}
