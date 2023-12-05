package com.example.demo.entity;

import lombok.*;

import javax.persistence.*;


@Entity
@Table(name = "`board`")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ExcelBoard {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "user_id")
    private String user_id;

    @Column(name = "title")
    private String title;

    @Column(name = "content")
    private String content;

    @Column(name = "regdate")
    private String regdate;

    @Column(name = "hit")
    private int hit;

    @Column(name = "type")
    private String type;

    @Column(name = "secret")
    private int secret;

}

