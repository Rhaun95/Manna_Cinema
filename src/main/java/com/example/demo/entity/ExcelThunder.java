package com.example.demo.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Date;


@Entity
@Table(name = "`thunder`")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ExcelThunder {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "username")
    private String username;

    @Column(name = "title")
    private String title;

    @Column(name = "content")
    private String content;


    @Column(name = "lat")
    private double lat;

    @Column(name = "lng")
    private double lng;

    @Column(name = "meetingtime")
    private String mettingtime;

    @Column(name = "regdate")
    private String regdate;

    @Column(name = "location")
    private String location;

    @Column(name = "address")
    private String address;

    @Column(name = "tags")
    private String tags;
}

