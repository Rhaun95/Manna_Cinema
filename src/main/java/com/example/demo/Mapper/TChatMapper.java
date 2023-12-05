package com.example.demo.Mapper;


import com.example.demo.VO.TChat;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Mapper
public interface TChatMapper {
    List<TChat> getAllTChat();
    List<TChat> getIdTChat(@Param("tchatid") int tchatid);//tchat id별 조회
    int insertTChat(@Param("tchat") @PathVariable("tchatid") TChat tChat, int tchatid);//추가
    int deleteTChat(@Param("num") int num);//삭제
}
