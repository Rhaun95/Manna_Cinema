package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMessage.RecipientType;
import java.io.UnsupportedEncodingException;
import java.util.Random;


@Service
public class RegisterMailService {

    @Autowired
    JavaMailSender emailsender;

    //인증번호 생성 -> ePw가 호출되면 createKey() 메서드 실행
    private final String ePw = createKey();

    //메일 내용 작성 준비
    public MimeMessage createMessage(String to) throws MessagingException, UnsupportedEncodingException {
//        System.out.println("보내는 대상 : " + to);
//        System.out.println("인증번호 :" + ePw);

        MimeMessage message = emailsender.createMimeMessage();
    
        //to -> 보내는 대상
        message.addRecipients(RecipientType.TO, to);
        //메일 제목
        message.setSubject("만나극장 회원가입 이메일 인증입니다");

        //메일 내용
        String msgg = "";

        msgg += "<div style='margin:100px;'>";
        msgg += "<h1> 안녕하세요 </h1>";
        msgg += "<h1> 영화 정보 사이트입니다 </h1>";
        msgg += "<br>";
        msgg += "<p>아래 코드를 회원가입 창으로 돌아가 입력해주세요<p>";
        msgg += "<br>";
        msgg += "<div align='center' style='border:1px solid black; font-family:verdana';>";
        msgg += "<h3 style='color:blue;'>회원가입 인증 코드입니다</h3>";
        msgg += "<div style='font-size:130%'>";
        msgg += "CODE : <strong>";
        msgg += ePw + "</strong><div><br/>";
        msgg += "</div>";

        // subtype을 html로 지정해주었기 때문에 html 문법 사용 가능
        message.setText(msgg, "utf-8", "html");

        //보내는 사람의 이메일 주소, 보내는 사람 이름
        message.setFrom(new InternetAddress("yjyjss01@naver.com", "만나극장"));

        return message;

    }

    // 랜덤 인증 코드 생성
    public String createKey(){
        StringBuffer key = new StringBuffer();
        Random rnd = new Random();

        for(int i=0; i<8; i++){
            int index = rnd.nextInt(3); // 0~2까지 랜덤, rnd 값에 따라 switch문 실행

            switch(index){
                case 0:
                    key.append((char) ((int) (rnd.nextInt(26)) + 97)); // 영어 소문자
                    break;
                case 1:
                    key.append((char) ((int) (rnd.nextInt(26)) + 65)); // 영어 대문자
                    break;
                case 2:
                    key.append((rnd.nextInt(10))); // 숫자
                    break;
            }
        }
        return key.toString();
    }

    // 메일발송
    // sendSimpleMessage 의 매개변수로 들어온 to는 곧 이메일 주소가 되고
    // MimeMessage 객체 안에 내가 전송할 메일의 내용을 담음
    // 그리고 bean 으로 등록해둔 javaMail 객체를 사용해서 이메일 보냄
    public String sendSimpleMessage(String to) throws Exception{

        MimeMessage message = createMessage(to);

        try{
            emailsender.send(message);
        }catch(MailException es){
            es.printStackTrace();
            throw new IllegalAccessException();
        }
        return ePw; //메일로 보냈던 인증코드 서버로 반환
    }
}
