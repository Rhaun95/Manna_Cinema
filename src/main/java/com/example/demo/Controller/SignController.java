package com.example.demo.Controller;

import com.example.demo.Service.signUpCheckService;
import com.example.demo.entity.User2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/sign")
public class SignController {

    @Autowired
    private signUpCheckService signUpCheckService;


//
    @GetMapping("/check/{username}" )
    public int check(@PathVariable ("username") String username){
        if(signUpCheckService.getByIdCheck(username) == null){
            System.out.println(signUpCheckService.getByIdCheck(username));
            System.out.println(username);
            return 200;
        }else{
            System.out.println(signUpCheckService.getByIdCheck(username));
            System.out.println(username);
            return 400;
        }

    }
}
