package com.example.demo.Controller;

import com.example.demo.VO.LoginDto;
import com.example.demo.VO.TokenDto;
import com.example.demo.jwt.JwtFilter;
import com.example.demo.jwt.TokenProvider;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

// 로그인 API를 추가하기 위해 AuthController 생성
// TokenProvider, AuthenticationManagerBuilder를 주입

// 로그인 API경로는 /api/authenticate -> POST 요청

@RestController
@RequestMapping("/api")
public class AuthController {

    private final TokenProvider tokenProvider;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;

    public AuthController(TokenProvider tokenProvider, AuthenticationManagerBuilder authenticationManagerBuilder) {
        this.tokenProvider = tokenProvider;
        this.authenticationManagerBuilder = authenticationManagerBuilder;
    }

    // LoginDto의 username, password를 파라미터로 받고 - 1번
    // 이를 이용해 UsernamePasswordAuthenticationToken을 생성  <= username, password를 가지고 있으 - 2번
    @PostMapping("/authenticate")
    public ResponseEntity<TokenDto> authorize(@Valid @RequestBody LoginDto loginDto) {    // 1번

        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(loginDto.getUsername(), loginDto.getPassword());  // 2번

        //authenticationToken(2번)을 이용해
        // Authentication 객체를 생성하려고 authenticate 실행이 될때 
        // CustomUserDetailsService에 있는 loadUserByUsername 메소드가 실행  - 3번
        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication); //3번


        //3번을 기준으로 jwt Token 생성  - 4번 
        String jwt = tokenProvider.createToken(authentication);
    
        // jwt Token을 httpHeader에 넣어주고 
        // TokenDto를 이용해서 Response Body에도 넣어서 리턴 -5번
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add(JwtFilter.AUTHORIZATION_HEADER, "Bearer " + jwt);


        return new ResponseEntity<>(new TokenDto(jwt), httpHeaders, HttpStatus.OK);
    }


}
