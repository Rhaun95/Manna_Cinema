package com.example.demo.Controller;

import com.example.demo.Service.RegisterMailService;
import com.example.demo.VO.EmailDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Email;

@CrossOrigin
@RestController
@RequestMapping("/login")
public class AccountController {

    @Autowired
    private RegisterMailService registerMailService;

    @GetMapping("/emailCode/{email}")
    public String emailCode(@PathVariable("email") String email) throws Exception {

        EmailDto emailDto = new EmailDto();

        String code = registerMailService.sendSimpleMessage(email);
        emailDto.setEmail(email);
        emailDto.setCode(code);
        System.out.println(code);

        return emailDto.getCode();
    }

}
