package com.example.demo.config;

import com.example.demo.jwt.JwtAccessDeniedHandler;
import com.example.demo.jwt.JwtAuthenticationEntryPoint;
import com.example.demo.jwt.JwtSecurityConfig;
import com.example.demo.jwt.TokenProvider;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.Arrays;


@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true) //PreAuthorize 어노테이션 활성화
public class SecurityConfig {
    private final TokenProvider tokenProvider;
    private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
    private final JwtAccessDeniedHandler jwtAccessDeniedHandler;
    private final CorsFilter corsFilter;

    // jwt 패키지에 있는 클래스 값을 주입받음
    public SecurityConfig(
            TokenProvider tokenProvider,
            JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint,
            JwtAccessDeniedHandler jwtAccessDeniedHandler,
            CorsFilter corsFilter) {
        this.tokenProvider = tokenProvider;
        this.jwtAuthenticationEntryPoint = jwtAuthenticationEntryPoint;
        this.jwtAccessDeniedHandler = jwtAccessDeniedHandler;
        this.corsFilter = corsFilter;
    }
    
    //PasswordEncoderder는 BCryptPasswordEncoder 사용
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    //H2-console 하위 모든 요청과 파피콘은 모두 무시함
    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return (web) -> web.ignoring().antMatchers("/h2-console/**"
                , "/favicon.ico"
                , "/error");
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity
                // token을 사용하는 방식이기 때문에 csrf를 disable합니다.
                .csrf().disable()

                .addFilterBefore(corsFilter, UsernamePasswordAuthenticationFilter.class)

                .exceptionHandling()
                .authenticationEntryPoint(jwtAuthenticationEntryPoint)
                .accessDeniedHandler(jwtAccessDeniedHandler)

                // enable h2-console
                .and()
                .headers()
                .frameOptions()
                .sameOrigin()

//                // 세션을 사용하지 않기 때문에 STATELESS로 설정
//                .and()
//                .sessionManagement()
//                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)

                // permitAll 인증 없이 접근 허용
                .and()
                .authorizeRequests()
                .antMatchers("/api/hello").permitAll()
                .antMatchers("/api/authenticate").permitAll()
                .antMatchers("/api/signup").permitAll()
                .antMatchers("/api/boards").permitAll()
                .antMatchers("/api/te").permitAll()
                .antMatchers("/api/abc").permitAll()

                .antMatchers("/api/abc").permitAll()
                .antMatchers("/api/{id}").permitAll()
                .antMatchers("/api/user").permitAll()
                .antMatchers("/api/").permitAll()
                .antMatchers("/api/{username}").permitAll()
                .antMatchers("/api/user/{username}").permitAll()
                .antMatchers("/api/admin/{id}").permitAll()
                .antMatchers("/api/test").permitAll()//
                .antMatchers("/api/userList").permitAll()


//              @장호
//              검색
                .antMatchers("/movie/search").permitAll()
                .antMatchers("/store/search").permitAll()
                .antMatchers("/cinema/search").permitAll()
//              영화
                .antMatchers("/movie").permitAll()
                .antMatchers("/movie/{id}").permitAll()
                .antMatchers("/movie/insert").permitAll()
                .antMatchers("/movie/{id}/still1").permitAll()
                .antMatchers("/movie/{id}/still2").permitAll()
                .antMatchers("/movie/{id}/still3").permitAll()
//              상영관
                .antMatchers("/cinema").permitAll()
                .antMatchers("/cinema/{id}").permitAll()
                .antMatchers("/cinema/insert").permitAll()
//              상점
                .antMatchers("/store").permitAll()
                .antMatchers("/store/{id}").permitAll()
                .antMatchers("/store/insert").permitAll()
//              엑셀
                .antMatchers("/excel/movie").permitAll()
                .antMatchers("/excel/cinema").permitAll()
                .antMatchers("/excel/store").permitAll()
                .antMatchers("/excel/user").permitAll()
                .antMatchers("/excel/board").permitAll()
                .antMatchers("/excel/thunder").permitAll()
//              채팅
                .antMatchers("/tchat/{tchatid}").permitAll()

                .antMatchers("/basket").permitAll()
                .antMatchers("/itembasket").permitAll()
                .antMatchers("/seat").permitAll()

//              크롤링 Mcomment
                .antMatchers("/mcomment").permitAll()
                .antMatchers("/mcomment/{id}").permitAll()


//               @영진 회원가입
                .antMatchers("/sign/check/{username}").permitAll()
                .antMatchers("/sign/email/mail").permitAll()
                .antMatchers("/login/emailCode/{email}").permitAll()
                .antMatchers("/login/mailConfirm").permitAll()
                .antMatchers("/login/mailCheck").permitAll()

//              @수현
                .antMatchers("/thCo").permitAll()
                .antMatchers("/thCo/{id}").permitAll()
                .antMatchers("/thCo/insert").permitAll()
                .antMatchers("/thCo/select/{username}").permitAll()

                .antMatchers("/likeCo/{uid}/{cid}").permitAll()
                .antMatchers("/likeCo/{id}").permitAll()
                .antMatchers("/likeCo/insert").permitAll()

                .antMatchers("/seat/{id}").permitAll()
                .antMatchers("/seat").permitAll()

                .antMatchers("/basket/").permitAll()
                .antMatchers("/basket/{username}").permitAll()
                .antMatchers("/basket/add").permitAll()
                .antMatchers("/basket/seatsize").permitAll()
                .antMatchers("/basket/{id}").permitAll()
                .antMatchers("/basket/updateStatus/{id}").permitAll()
                .antMatchers("/basket/booking/{user_id}").permitAll()
                .antMatchers("/basket/OneBooking/{id}").permitAll()


                .antMatchers("/itembasket").permitAll()
                .antMatchers("/itembasket/{id}").permitAll()
                .antMatchers("/itembasket/{username}").permitAll()
                .antMatchers("/itembasket/insert").permitAll()
                .antMatchers("/itembasket/updateStatus/{id}").permitAll()


                .antMatchers("/thunder").permitAll()
                .antMatchers("/thunder/").permitAll()
                .antMatchers("/thunder/getHot").permitAll()
                .antMatchers("/thunder/{id}").permitAll()
                .antMatchers("/thunder/select/{username}").permitAll()
                .antMatchers("/thunder/search/{location}").permitAll()
                .antMatchers("/thunder/search/{username}/{location}").permitAll()

                .antMatchers("/thunder/{category}{location}{username}").permitAll()
                .antMatchers("/thunder/insert").permitAll()
                .antMatchers("/thunderinsert").permitAll()

                .antMatchers("/chatroom").permitAll()
                .antMatchers("/chatroom/{id}").permitAll()

                .antMatchers("/likeTh/insert").permitAll()
                .antMatchers("/likeTh/{username}").permitAll()
                .antMatchers("/likeTh/{username}/{posting_num}").permitAll()
                .antMatchers("/likeTh/{username}/{postingNr}").permitAll()

                //서현
                .antMatchers("/Bo/board").permitAll()
                .antMatchers("/Bo/board/{id}").permitAll()
                .antMatchers("/Bo/board/filter/{type}").permitAll()
                .antMatchers("/Bo/boardSearch/{type}/{search}").permitAll()
                .antMatchers("/Bo/OneOnOne/{user_id}").permitAll()
                /* .antMatchers("/Rb/bookMark/{id}").permitAll()*/
                .antMatchers("/Bo/board/addHit/{id}").permitAll()
                .antMatchers("/Co/comment/{id}").permitAll()
                .antMatchers("/Co/insertComment").permitAll()
                .antMatchers("/Co//update/{posting_num}").permitAll()
                .antMatchers("/Co/reviewComment/{review_id}").permitAll()
                .antMatchers("/Co/reviewComment_desc/{review_id}").permitAll()
                .antMatchers("/Co/delete/{user_id}/{posting_num}").permitAll()
                .antMatchers("/RB/reviewBoard").permitAll()
                .antMatchers("/RB/reviewBoard/{id}").permitAll()
                .antMatchers("/RB/reviewBoard/addHit/{id}").permitAll()
                .antMatchers("/RB/search/{type}").permitAll()
                .antMatchers("/RB/filter/{type}").permitAll()
                .antMatchers("/RB/search/{type}/{search}").permitAll()
                .antMatchers("/Bm/bookMark/markReview").permitAll()
                .antMatchers("/RB/bookMark/markReview").permitAll()
                .antMatchers("/RB/update/{id}").permitAll()
                .antMatchers("/Bm/bookMark/{own_id}").permitAll()
                .antMatchers("/Bm/bookMark/{post_id}").permitAll()
                .antMatchers("/Bm/bookMark/addHit/{post_id}").permitAll()
                .antMatchers("/Bm/filter/{type}").permitAll()
                .antMatchers("/Bm/bookMark").permitAll()
                .antMatchers("/Mv").permitAll()
                .antMatchers("/Mv/{id}").permitAll()
                .antMatchers("/Mv/get/{id}").permitAll()
                .antMatchers("/Mv/delete/{id}").permitAll()
                .antMatchers("/basket/booking/{user_id}").permitAll()
                .antMatchers("/basket/OneBooking/{id}").permitAll()
                .antMatchers("/basket/getBooked/{user_id}").permitAll()


                // 준영 카카오페이
                .antMatchers("/payment/kakaoPaySuccess").permitAll()
                .antMatchers("/payment/kakaoPay").permitAll()
                .antMatchers("/payment/addCart").permitAll()
                .antMatchers("/payment/getCart").permitAll()
                .antMatchers("/payment/orderInfo").permitAll()
                .antMatchers("/payment/kakaoInfo").permitAll()
                .antMatchers("/payment/detailsPayment").permitAll()
                .antMatchers("/payment/cancelPayment").permitAll()
                .antMatchers("/analysis/getAmount").permitAll()
                .antMatchers("/payment/getByBasketId/{basket_id}").permitAll()


                .anyRequest().authenticated()

                .and()
                .apply(new JwtSecurityConfig(tokenProvider))
//
                .and()
                .cors()
                ;
        return httpSecurity.build();
    }

    @Bean
    public WebMvcConfigurer corsConfigurer(){
        return new WebMvcConfigurer(){
          @Override
          public void addCorsMappings(CorsRegistry registry){
              registry.addMapping("/**")
                      .allowedOrigins("http://localhost:3000");
          }

        };
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource(){
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

//    @Bean
//    public CorsConfigurationSource corsConfigurationSource(){
//        CorsConfiguration configuration = new CorsConfiguration();
//
//        configuration.addAllowedOriginPattern("*");
//        configuration.addAllowedHeader("*");
//        configuration.addAllowedMethod("*");
//        configuration.setAllowCredentials(true);
//
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", configuration);
//        return source;
//    }
}




//@EnableWebSecurity
//public class SecurityConfig extends WebSecurityConfigurerAdapter {
//
//    //H2-console 하위 모든 요청과 파피콘은 모두 무시함
//    //
//    @Override
//    public void configure(WebSecurity web){
//        web
//                .ignoring()
//                .antMatchers(
//                        "/h2-console/**"
//                        ,"/favicon.ico"
//                );
//    }
//
//
//    @Override
//    protected void configure(HttpSecurity http) throws  Exception{
//        http
//                .authorizeRequests() //HttpServletRequest를 사용하는 요청들에 대한 접근 제한
//                .antMatchers("/api/hello").permitAll() //permitAll 인증 없이 접근 허용
//                .anyRequest().authenticated(); //나머지는 인증을 받아야함
//    }
//}
