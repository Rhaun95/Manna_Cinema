package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import java.util.Properties;

@Configuration
public class MailConfig {
    
    @Bean
    public JavaMailSender javaMailService(){
        
        JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();
        
        //메인 도메인 서버 주소 -> 정확히는 stmp 주소
        javaMailSender.setHost("smtp.naver.com");
        javaMailSender.setUsername("yjyjss01");
        javaMailSender.setPassword("tjdudwls9295!@");

        javaMailSender.setPort(465);

        //메일 인증서버 정보 가져오기
        javaMailSender.setJavaMailProperties(getMailProperties());

        return javaMailSender;
    }

    private Properties getMailProperties(){
        Properties properties = new Properties();

        properties.setProperty("mail.transport.protocol", "smtp"); //프로토콜 설정
        properties.setProperty("mail.smtp.auth", "true"); // smtp 인증
        properties.setProperty("mail.smtp.starttls.enable", "true"); // smtp strattles 사용
        properties.setProperty("mail.debug", "true"); // 디버그 사용
        properties.setProperty("mail.smtp.ssl.trust", "smtp.naver.com"); // ssl 인증 서버 -> smtp.naver.com
        properties.setProperty("mail.smtp.ssl.enable", "true"); //ssl 사용
        return properties;

    }
}
