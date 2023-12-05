package com.example.demo.entity;

import lombok.*;

import javax.persistence.*;


@Entity
@Table(name = "`cinema`")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ExcelCinema {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "cinema_name", unique = true)
    private String cinema_name;

    @Column(name = "total_seat")
    private int total_seat;

    @Column(name = "lat")
    private double lat;

    @Column(name = "lng")
    private double lng;

    @Column(name = "star")
    private double star;
}

