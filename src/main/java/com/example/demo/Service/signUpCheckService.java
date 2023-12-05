package com.example.demo.Service;

import com.example.demo.Mapper.SignUpCheck;
import com.example.demo.entity.User2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class signUpCheckService {

    @Autowired
    private SignUpCheck signUpCheck;

    public User2 getByIdCheck(String username) {
        return signUpCheck.getByIdCheck(username);
    }

}
