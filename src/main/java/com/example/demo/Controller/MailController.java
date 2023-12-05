package com.example.demo.Controller;


import com.example.demo.Service.MailService;
import com.example.demo.Service.UserService;
import com.example.demo.VO.MailDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/email")
public class MailController {

    @Autowired
    private MailService mailService;

    @PostMapping("/mail")
    public void exeMail(MailDto mailDto){
        mailService.mailSend(mailDto);
    }
}
