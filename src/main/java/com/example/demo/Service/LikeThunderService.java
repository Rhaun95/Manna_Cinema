package com.example.demo.Service;

import com.example.demo.Mapper.LikeThunderMapper;
import com.example.demo.VO.LikeThunder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LikeThunderService {

    @Autowired
    private LikeThunderMapper likeThunderMapper;

    public List<LikeThunder> getAll(String username){
        return likeThunderMapper.getAll(username);
    }

    //상세 조회(개별)
    public LikeThunder check(String username, int posting_num) {
        return likeThunderMapper.check(username, posting_num);
    }

    public int insert(LikeThunder likeThunder) {
        return  likeThunderMapper.insertLike(likeThunder);
    }

    public int delete(String username, int posting_num) {
        return likeThunderMapper.deleteLike(username, posting_num);
    }


}


