package com.example.demo.entity;

import lombok.Data;

import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import java.util.Set;

@Data
public class User2 {
    private int userId;
    private String username;
    private String password;
    private String nickname;
    private String email;
    private String birth;
    private String phone;
    private String date;
    private boolean activated;

    @ManyToMany
    @JoinTable(
            name = "user_authority",
            joinColumns = {@JoinColumn(name = "user_id", referencedColumnName = "user_id")},
            inverseJoinColumns = {@JoinColumn(name = "authority_name", referencedColumnName = "authority_name")})
    private Set<Authority2> authorities;
}
