package com.example.demo.VO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Thunder {
    private int id;
    private String username;
    private String title;
    private String content;
    private String image;
    private double lat;
    private double lng;
    private String openlink;
    private String regdate;
    private String location;
    private String address;
    private String tags;
    private String meetingtime;
    private int hit;
    private int like;


}
