package com.example.demo.entity;

import lombok.*;

import javax.persistence.*;


@Entity
@Table(name = "`store`")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ExcelStore {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name", unique = true)
    private String name;

    @Column(name = "price")
    private int price;

    @Column(name = "amount")
    private int amount;

    @Column(name = "type")
    private String type;

    @Column(name = "image")
    private String image;
}

