package com.example.demo.entity;

import lombok.*;

import javax.persistence.*;


@Entity
@Table(name = "`movie`")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ExcelMovie {

    @Id
    @Column(name = "movieid")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int movieid;

    @Column(name = "title", length = 50, unique = true)
    private String title;

    @Column(name = "directornm")
    private String directornm;

    @Column(name = "actornm")
    private String actornm;

    @Column(name = "genre")
    private String genre;

    @Column(name = "runtime")
    private int runtime;

    @Column(name = "reprlsdate")
    private String reprlsdate;

    @Column(name = "plot")
    private String plot;

    @Column(name = "rating")
    private String rating;

    @Column(name = "posterurl")
    private String posterurl;

    @Column(name = "star")
    private double star;

    @Column(name = "audiacc")
    private int audiacc;

    @Column(name = "stillurl")
    private String stillurl;

    @Column(name = "country")
    private String country;

    @Column(name = "audiourl")
    private String audiourl;




}

