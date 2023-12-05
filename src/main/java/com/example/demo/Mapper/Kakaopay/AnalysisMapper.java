package com.example.demo.Mapper.Kakaopay;


import com.example.demo.VO.Kakaopay.AnalysisDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AnalysisMapper {

    List<AnalysisDTO> getAll();


}
