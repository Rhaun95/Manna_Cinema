package com.example.demo.Service;

import com.example.demo.Mapper.Kakaopay.AnalysisMapper;
import com.example.demo.VO.Kakaopay.AnalysisDTO;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Log
public class AnalysisService {

    @Autowired
    private AnalysisMapper analysis;


    private AnalysisDTO ADTO;



}
