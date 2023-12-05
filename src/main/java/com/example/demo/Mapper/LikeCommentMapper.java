package com.example.demo.Mapper;


import com.example.demo.VO.LikeComment;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface LikeCommentMapper {


    LikeComment check(@Param("uid")int uid, @Param("cid") int cid);

    int insertLike(@Param("likeComment") LikeComment likeComment);//추가

    int deleteLike(@Param("uid")int uid, @Param("cid") int cid);//삭제

}

