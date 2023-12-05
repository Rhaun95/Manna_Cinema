package com.example.demo.VO;

import lombok.Data;

@Data
public class TChat {
    private int num; //1번채팅방 - 1번 5번채팅방  2번
    private String tchat_id;//게시물 번호
    private String user_id;//닉네임
    private String context;
    private String time;
}
