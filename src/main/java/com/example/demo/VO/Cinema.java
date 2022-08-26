package com.example.demo.VO;

import lombok.Data;

@Data
public class Cinema {
    private int id;
    private String cinema_name;
    private int total_seat;
    private double lat;
    private double lng;
    private double star;
}
