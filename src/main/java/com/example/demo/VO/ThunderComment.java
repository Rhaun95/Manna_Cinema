package com.example.demo.VO;

import lombok.Data;

@Data
public class ThunderComment {
    private int id;
    private String user_id;
    private String content;
    private String regDate;
    private int posting_num;
}
