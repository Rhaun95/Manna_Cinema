package com.example.demo.Mapper;


import com.example.demo.VO.LikeThunder;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface LikeThunderMapper {

    LikeThunder check(@Param("username")String uid, @Param("posting_num") int cid);

    List<LikeThunder> getAll(@Param("username")String username);
    int insertLike(@Param("likeThunder") LikeThunder likeThunder);//추가

    int deleteLike(@Param("username")String uid, @Param("posting_num") int cid);//삭제


}

