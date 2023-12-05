package com.example.demo.Controller;

import com.example.demo.Service.AnalysisService;
import com.example.demo.VO.Kakaopay.AnalysisDTO;
import lombok.Setter;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@Controller
@CrossOrigin
@Log
@RestController
@RequestMapping("/Analysis")
public class AnalysisController {

    @Setter(onMethod_ = @Autowired)
    private AnalysisService service;


}
