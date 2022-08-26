package com.example.demo.VO;

import lombok.Data;

import java.util.Date;

@Data
public class Movie {
    private int movieId;
    private String title;
    private String directorNm;
    private String actorNm;
    private String genre;
    private int runtime;
    private String repRlsDate;
    private String plot;
    private String rating;
    private String posterUrl;
    private double star;
    private int audiAcc;
    private String stillUrl;
    private String country;
    private String audioUrl;

}
