package com.example.demo.Controller;

import com.example.demo.Service.ThunderInsert_ImagesService;
import com.example.demo.VO.ThunderInsert_Images;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("/thunderinsert")
public class ThunderInsert_ImagesController {

    @Autowired
    private ThunderInsert_ImagesService service;
    
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @GetMapping("")
    public List<ThunderInsert_Images>getAll(){
        logger.info("모든 번개 이미지 호출");

        return service.getAll();
    }




}
