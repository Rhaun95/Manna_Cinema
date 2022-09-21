insert into user (username, password, nickname, activated) values ('admin', '$2a$08$lDnHPz7eUkSi6ao14Twuau08mzhWrL4kyZGGU5xfiGALO/Vxd5DOi', 'admin', 1);
insert into user (username, password, nickname, activated) values ('user', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'user', 1);
insert into user (username, password, nickname, activated) values ('testuser', '$2a$10$4O370jcqJlVAwedLCyc4eeVeR3wuiS1aAk.tEb.IdHnpq1DhDgPh.', '테스트닉', 1);


insert into authority (authority_name) values ('ROLE_USER');
insert into authority (authority_name) values ('ROLE_ADMIN');

insert into user_authority (user_id, authority_name) values (1, 'ROLE_USER');
insert into user_authority (user_id, authority_name) values (1, 'ROLE_ADMIN');
insert into user_authority (user_id, authority_name) values (2, 'ROLE_USER');

insert into movie(title,directorNm,actorNm,genre,runtime,repRlsDate,rating,posterUrl,plot,star,audiAcc,stillUrl,country,audioUrl)
values(
          "헌트",
          "이정재",
          "이정재,정우성,전혜진,허성태,고윤정,김종수,정만식",
          "action",
          125,
          20220810,
          "15세 관람가",
          "https://movie-phinf.pstatic.net/20220805_227/1659685387586PIORG_JPEG/movie_image.jpg",
          "[조직 내 숨어든 스파이를 색출하라! ‘사냥꾼’이 될 것인가, ‘사냥감’이 될 것인가!] 망명을 신청한 북한 고위 관리를 통해 정보를 입수한 안기부 해외팀 ‘박평호’(이정재)와 국내팀 ‘김정도’(정우성)는 조직 내 숨어든 스파이 ‘동림’ 색출 작전을 시작한다. 스파이를 통해 일급 기밀사항들이 유출되어 위기를 맞게 되자 날 선 대립과 경쟁 속, 해외팀과 국내팀은 상대를 용의선상에 올려두고 조사에 박차를 가한다.  찾아내지 못하면 스파이로 지목이 될 위기의 상황, 서로를 향해 맹렬한 추적을 펼치던 ‘박평호’와 ‘김정도’는 감춰진 실체에 다가서게 되고, 마침내 ‘대한민국 1호 암살 작전’이라는 거대한 사건과 직면하게 되는데…… 하나의 목표, 두 개의 총구 의심과 경계 속 두 남자의 신념을 건 작전이 시작된다",
          8.5,
          "3131425",
          "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220525_87%2F1653443133703GAJor_JPEG%2Fmovie_image.jpg,https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220525_60%2F1653443165404G7p3h_JPEG%2Fmovie_image.jpg,https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220525_200%2F16534431879974hbt0_JPEG%2Fmovie_image.jpg",
          "한국",
          "https://s3550.smartucc.kr/encodeFile/3550/2022/07/21/e213cde3727f767b637ac47284b71bc7_W.mp4");

insert into movie(title,directorNm,actorNm,genre,runtime,repRlsDate,rating,posterUrl,plot,star,audiAcc,stillUrl,country,audioUrl)
values(
          "탑건: 매버릭",
          "조셉 코신스키",
          "톰 크루즈,마일즈 텔러,제니퍼 코넬리,존 햄,에드 헤리스,글렌 포웰, 제이 엘리스",
          "action",
          130,
          20220622,
          "전체 관람가",
          "https://movie-phinf.pstatic.net/20220509_176/1652081912471yhg3N_JPEG/movie_image.jpg",
          "최고의 파일럿이자 전설적인 인물 매버릭(톰 크루즈)은 자신이 졸업한 훈련학교 교관으로 발탁된다. 그의 명성을 모르던 팀원들은 매버릭의 지시를 무시하지만 실전을 방불케 하는 상공 훈련에서 눈으로 봐도 믿기 힘든 전설적인 조종 실력에 모두가 압도된다. 매버릭의 지휘아래 견고한 팀워크를 쌓아가던 팀원들에게 국경을 뛰어넘는 위험한 임무가 주어지자 매버릭은 자신이 가르친 동료들과 함께 마지막이 될 지 모를 하늘 위 비행에 나서는데…",
          9.6,
          "7880300",
          "https://movie-phinf.pstatic.net/20191219_253/1576735700330webEM_JPEG/movie_image.jpg?type=m427_320_2,https://movie-phinf.pstatic.net/20191219_176/1576735700763y1rP2_JPEG/movie_image.jpg?type=m427_320_2,https://movie-phinf.pstatic.net/20220331_153/1648689964919opv47_JPEG/movie_image.jpg?type=m427_320_2",
          "미국",
          "https://s3550.smartucc.kr/encodeFile/3550/2022/05/04/a2bb4362179ac0848a9bd6b23009077a_W.mp4");

insert into movie(title,directorNm,actorNm,genre,runtime,repRlsDate,rating,posterUrl,plot,star,audiAcc,stillUrl,country,audioUrl)
values(
          "놉",
          "조던 필",
          "다니엘 칼루야, 키키 팰머, 스티븐 연, 마이클 윈콧, 브랜든 페레아",
          "공포(호러),미스터리",
          130,
          20220817,
          "12세이상 관람가",
          "https://img.megabox.co.kr/SharedImg/2022/08/02/hQsvDEd41AY0pmON6fAhJ55ouwS5K3wb_420.jpg",
          "그것은 우리 위에 있다. 거대하고, 주목받길 원하고, 미쳤다. 나쁜 기적이라는 것도 있을까?",
          8.0,
          "361719",
          "https://img.megabox.co.kr/SharedImg/2022/08/02/gMKCFf0Ma10llghxcn94XhtyGn1yLQul_1100.jpg,https://img.megabox.co.kr/SharedImg/2022/08/02/N8dVRzINCGR7srgES7gTZJHYliHDgouh_1100.jpg,https://img.megabox.co.kr/SharedImg/2022/08/02/WRmpzCxgjCkPQX5VNdzLET4lpWsL9kD6_1100.jpg",
          "미국",
          "https://s3550.smartucc.kr/encodeFile/3550/2022/06/09/20c8a12e0fd5e6f5dfc77c85f0c1fd9c_W.mp4");

insert into movie(title,directorNm,actorNm,genre,runtime,repRlsDate,rating,posterUrl,plot,star,audiAcc,stillUrl,country,audioUrl)
values(
          "한산: 용의 출현",
          "김한민",
          "박해일, 변요한, 안성기, 손현주, 김성규, 김성균, 김향기, 옥택연, 공명",
          "액션",
          129,
          20220727,
          "12세이상 관람가",
          "https://img.megabox.co.kr/SharedImg/2022/07/28/1ogGcWYxCNJ9MTnizlZLdZ6REjg6xX1z_1280.jpg",
          "나라의 운명을 바꿀 압도적 승리의 전투가 시작된다!

          1592년 4월, 조선은 임진왜란 발발 후 단 15일 만에 왜군에 한양을 빼앗기며 절체절명의 위기에 놓인다.
          조선을 단숨에 점령한 왜군은 명나라로 향하는 야망을 꿈꾸며 대규모 병역을 부산포로 집결시킨다.

          한편, 이순신 장군은 연이은 전쟁의 패배와 선조마저 의주로 파천하며 수세에 몰린 상황에서도
          조선을 구하기 위해 전술을 고민하며 출전을 준비한다.
          하지만 앞선 전투에서 손상을 입은 거북선의 출정이 어려워지고,
          거북선의 도면마저 왜군의 첩보에 의해 도난 당하게 되는데…

          왜군은 연승에 힘입어 그 우세로 한산도 앞바다로 향하고,
          이순신 장군은 조선의 운명을 가를 전투를 위해 필사의 전략을 준비한다.

          1592년 여름, 음력 7월 8일 한산도 앞바다,
          압도적인 승리가 필요한 조선의 운명을 건 지상 최고의 해전이 펼쳐진다.",
          9.2,
          "7026088",
          "https://img.megabox.co.kr/SharedImg/2022/06/24/KM5BY2itRSqF7Xl6cF33K4pfsMUO3tRJ_1100.jpg,https://img.megabox.co.kr/SharedImg/2022/06/24/ZDIZk9yNOMME5CW23XGx7W8NWabbZyph_1100.jpg,https://img.megabox.co.kr/SharedImg/2022/06/24/bHrchvgXhGw2OF9X40yfdLpfnOWsq2NC_1100.jpg",
          "한국",
          "https://s3550.smartucc.kr/encodeFile/3550/2022/07/28/7661ee82e8c69d5d73898d8426889ac8_W.mp4");

insert into movie(title,directorNm,actorNm,genre,runtime,repRlsDate,rating,posterUrl,plot,star,audiAcc,stillUrl,country,audioUrl)
values(
          "헤어질 결심",
          "박찬욱",
          "탕웨이, 박해일, 이정현, 박용우, 고경표, 김신영",
          "드라마,로맨스,미스터리",
          138,
          20220629,
          "15세이상 관람가",
          "https://img.megabox.co.kr/SharedImg/2022/06/07/S3GJQZbpshoIx0Lelerscl9rlI14FHqK_1280.jpg",
          "산 정상에서 추락한 한 남자의 변사 사건.
          담당 형사 '해준'(박해일)은
          사망자의 아내 '서래'(탕웨이)와 마주하게 된다.

          '산에 가서 안 오면 걱정했어요, 마침내 죽을까 봐.'

          남편의 죽음 앞에서 특별한 동요를 보이지 않는 '서래'.
          경찰은 보통의 유가족과는 다른 '서래'를 용의선상에 올린다.
          '해준'은 사건 당일의 알리바이 탐문과 신문,
          잠복수사를 통해 '서래'를 알아가면서
          그녀에 대한 관심이 점점 커져가는 것을 느낀다.

          한편, 좀처럼 속을 짐작하기 어려운 ‘서래’는
          상대가 자신을 의심한다는 것을 알면서도
          조금의 망설임도 없이 ‘해준’을 대하는데….

          진심을 숨기는 용의자
          용의자에게 의심과 관심을 동시에 느끼는 형사
          그들의 <헤어질 결심>",
          9.0,
          "1861843",
          "https://img.megabox.co.kr/SharedImg/2022/06/10/Phzs2Oe7g3wDyvl5hD1lLWVBPqZi8OKU_1100.jpg,https://img.megabox.co.kr/SharedImg/2022/06/10/WEYYz1KzZjjNIuQjjbUyPc98foNF4hJf_1100.jpg,https://img.megabox.co.kr/SharedImg/2022/06/10/hmNzWJdLybP7dfMeMvorjVAxJN1p8Jic_1100.jpg",
          "한국",
          "https://s3550.smartucc.kr/encodeFile/3550/2022/05/10/5e13a7154872dfc8f052298d0fd11e14_W.mp4");

insert into movie(title,directorNm,actorNm,genre,runtime,repRlsDate,rating,posterUrl,plot,star,audiAcc,stillUrl,country,audioUrl)
values(
          "사랑할 땐 누구나 최악이 된다",
          "요아킴 트리에",
          "레나테 레인스베, 안데스 다니엘슨 리, 할버트 노르드룸",
          "드라마",
          128,
          20220825,
          "15세이상 관람가",
          "https://img.megabox.co.kr/SharedImg/2022/08/29/CyFJcEEUDngBCO7vzJra2mSocDg1Trmk_1280.jpg",
          "의학을 공부하던 스물아홉 율리에는 자신이 진짜 원하는 걸 찾아 세상으로 나온다.
          파티에서 만난 만화가 악셀과 사랑에 빠진 율리에,
          하지만 삶의 다른 단계에서 만난 두 사람은 각자 다른 걸 원했고 조금씩 어긋난다.
          “내 삶에서 조연 역할을 하는 것 같아…” 율리에는 인생의 다음 챕터로 달려나간다.",
          8.5,
          "12161",
          "https://img.megabox.co.kr/SharedImg/2022/08/02/yl4NypW2XPHTFjxeVi6KcH2l3u0iY0Cm_1100.jpg,https://img.megabox.co.kr/SharedImg/2022/08/02/FRVMJaE4NilG2I70CeZvAmANBdg1XXo8_1100.jpg,https://img.megabox.co.kr/SharedImg/2022/08/02/pBSvhU9hKibQFkHtdfbrQjY7Xu9E3PPI_1100.jpg",
          "미국",
          "https://s3550.smartucc.kr/encodeFile/3550/2022/08/29/8d7295278d407a6864762921174b85c1_W.mp4");

insert into movie(title,directorNm,actorNm,genre,runtime,repRlsDate,rating,posterUrl,plot,star,audiAcc,stillUrl,country,audioUrl)
values(
          "귀멸의 칼날: 아사쿠사 편",
          "소토자키 하루오",
          "하나에 나츠키(카마도 탄지로),키토 아카리(카마도 네즈코),세키 토시히코(무잔)",
          "애니메이션",
          103,
          20220825,
          "15세이상 관람가",
          "https://movie-phinf.pstatic.net/20220718_53/1658127057578b3bsI_JPEG/movie_image.jpg",
          "귀살대에 입대한 탄지로는 매일 소녀가 실종된다고 하는 마을로 향한다.
           혈귀의 냄새는 나지만 그 모습을 찾을 수 없는 가운데, 새로운 소녀에게 혈귀의 손이 다가온다.

           그다음으로 탄지로가 방문한 곳은 아사쿠사.
           화려한 도시와 즐비한 상점에 당황하는 탄지로는 그곳에서 혈귀의 냄새를 찾아낸다.
           그 냄새는 인간을 혈귀로 바꿀 수 있는 유일한 존재이자
           탄지로의 숙적이기도 한 키부츠지 무잔의 것이었다.
           이윽고 탄지로의 앞에 타마요와 유시로가 나타나는데…",
          6.3,
          "15159",
          "https://movie-phinf.pstatic.net/20220722_186/1658467578949SfDXb_JPEG/movie_image.jpg?type=m886_590_2,https://movie-phinf.pstatic.net/20220722_51/1658467597412vvSX5_JPEG/movie_image.jpg?type=m886_590_2,https://movie-phinf.pstatic.net/20220722_60/1658467614647mWVWI_JPEG/movie_image.jpg?type=m886_590_2",
          "일본",
          "http://h.vod.cgv.co.kr/vodCGVa/86064/86064_204990_1200_128_960_540.mp4");

insert into movie(title,directorNm,actorNm,genre,runtime,repRlsDate,rating,posterUrl,plot,star,audiAcc,stillUrl,country,audioUrl)
values(
          "불릿 트레인",
          "데이빗 레이치",
          "브래드 피트, 조이 킹, 애론 테일러 존슨, 브라이언 타이리 헨리, 배드 버니",
          "액션",
          126,
          20220824,
          "청소년관람불가",
          "https://img.megabox.co.kr/SharedImg/2022/08/19/kB4qlNCnZxfnZqjp0yFlBUzXTpdCqhcD_420.jpg",
          "승차는 자유, 하차는 불가?! 초고속 열차에서 벌어지는 '레이디버그’(브래드 피트)와 고스펙 킬러들의 피 튀기는 전쟁!  운이 없기로 유명한 킬러 '레이디버그’(브래드 피트)는 초고속 열차에 탑승해 의문의 서류 가방을 가져오라는 미션을 받는다. 생각보다 쉽게 미션을 클리어한 후 열차에서 내리려는 그를 가로막는 것이 있었으니, 그것은 바로 전세계에서 몰려든 초특급 킬러들! 열차에서 내릴 수 없다면 목숨을 걸고 가방을 지켜야만 한다. 과연 '레이디버그'는 무사히 열차에서 내려 미션을 완수할 수 있을까?  8월, 누구도 멈출 수 없는 논스톱 액션 블록버스터 [불릿 트레인]에 탑승하라!",
          7.2,
          "1200000",
          "https://img.megabox.co.kr/SharedImg/2022/07/20/cfUFT77sO9zgdGQaXMd5wRNyhYJ71iER_648.jpg,https://img.megabox.co.kr/SharedImg/2022/08/19/uw7VoHZaIEKg4pmDB9KYMuiLfDTk2rea_648.jpg,https://img.megabox.co.kr/SharedImg/2022/07/20/Bh6lFgcbbmwmVmQXwD09eO4EiI5UdI0P_648.jpg",
          "미국",
          "https://s3550.smartucc.kr/encodeFile/3550/2022/08/19/0a3a7e621ec2d274fc2220934e6fa59a_W.mp4");

insert into movie(title,directorNm,actorNm,genre,runtime,repRlsDate,rating,posterUrl,plot,star,audiAcc,stillUrl,country,audioUrl)
values(
          "미니언즈2",
          "카일 발다 ",
          "스티브 카렐, 타라지 P.헨슨, 양자경",
          "애니메이션",
          129,
          20220720,
          "전체 관람가",
          "https://img.megabox.co.kr/SharedImg/2022/07/20/0v4Yp5q079dJPP0Eqt0JExH8qkl7bMks_420.jpg",
          "세계 최고의 슈퍼 악당을 꿈꾸는 미니보스 ‘그루’와 그를 따라다니는 미니언들.어느 날 그루는 최고의 악당 조직 ‘빌런6’의 마법 스톤을 훔치는데 성공하지만뉴페이스 미니언 ‘오토’의 실수로 스톤을 잃어버리고 빌런6에게 납치까지 당한다.미니보스를 구하기 위해 잃어버린 스톤을 되찾아야 하는 ‘오토’, 그리고 쿵푸를 마스터해야 하는 ‘케빈’, ‘스튜어트’, ‘밥’!올여름 극장가를 점령할 MCU(미니언즈 시네마틱 유니버스)가 돌아온다!",
          9.0,
          "2246981",
          "https://img.megabox.co.kr/SharedImg/2022/06/27/tDdm5YOjDe2hlvGyzTrs4TOeMkoF723H_1100.jpg,https://img.megabox.co.kr/SharedImg/2022/06/27/Gv7oRDYfGZ2OyLlHqrgAhCJdU5fxmitY_1100.jpg,https://img.megabox.co.kr/SharedImg/2022/06/27/ZOAvYbubWB0SOtEh4tIQ8tCi6SHwhSFD_1100.jpg",
          "미국",
          "https://s3550.smartucc.kr/encodeFile/3550/2022/06/17/a7906eb5f2cdeab4f03e73e988f89c45_W.mp4");

insert into movie(title,directorNm,actorNm,genre,runtime,repRlsDate,rating,posterUrl,plot,star,audiAcc,stillUrl,country,audioUrl)
values(
          "육사오(6/45)",
          "박규태",
          "고경표, 이이경, 음문석, 박세완, 곽동연, 이순원, 김민호",
          "코미디",
          113,
          20220824,
          "12세이상관람가",
          "https://img.megabox.co.kr/SharedImg/2022/07/28/8SfJ8Fmgcum3MdNXr0YodTDDQaax6Rpn_420.jpg",
          "바람을 타고 군사분계선을 넘어가버린 57억 1등 당첨 로또를 둘러싼 남북 군인들간의 코믹 접선극",
          8.5,
          "74658",
          "https://img.megabox.co.kr/SharedImg/2022/07/20/ei8Tq85Uum1RqqjyXK8Z3YuulG4EIzXe_380.jpg,https://img.megabox.co.kr/SharedImg/2022/07/20/kFmn8A3P6P6xH11a0ttpeOXr2YzLF0a3_380.jpg,https://img.megabox.co.kr/SharedImg/2022/07/22/XLzaF1LPUzM7YU7vNBgEFYQBpUZINtdA_380.jpg",
          "한국",
          "https://s3550.smartucc.kr/encodeFile/3550/2022/08/02/cb2221b0326b019f84cbad2cbfd1af52_W.mp4");


INSERT INTO store
(price, amount, name, `type`, image)
VALUES(5000, 500, '오리지널팝콘R 1', '단품', 'https://ccimg.hellomarket.com/images/2021/item/08/22/02/0843318_2839104_1.jpg?size=s6');

INSERT INTO store
(price, amount, name, `type`, image)
VALUES(1000, 500, '메가박스 탄산음료(대)', '단품', 'https://market.shosyn.com/assets/data/product/_product_image_413.jpg?u=1560428796');

INSERT INTO store
(price, amount, name, `type`, image)
VALUES(10000, 500, '러브콤보', '세트', 'https://img.megabox.co.kr/SharedImg/store/2022/03/07/qB1IVqlOLCV7hOOEAJp4J9iG3J5oVWjv_280.png');

INSERT INTO store
(price, amount, name, `type`, image)
VALUES(13000, 500, '더블콤보', '세트', 'https://img.megabox.co.kr/SharedImg/store/2022/03/07/ERDC5wGVMC0YZPIRUsuuaJuAGRyqeDjC_280.png');

INSERT INTO store
(price, amount, name, `type`, image)
VALUES(11500, 500, '불닭컵치밥콤보', '세트', 'https://www.fetv.co.kr/data/photos/20220518/art_16516211692297_981edc.jpg');

INSERT INTO cinema(cinema_name, total_seat,lat,lng,star) VALUES ('장승배기', 45,37.505,126.9392,3);
INSERT INTO cinema(cinema_name, total_seat,lat,lng,star) VALUES ('남양주', 54,37.6534,127.2444,4);
INSERT INTO cinema(cinema_name, total_seat,lat,lng,star) VALUES ('건대', 63,37.5406,127.0693,4);
INSERT INTO cinema(cinema_name, total_seat,lat,lng,star) VALUES ('가산', 72,37.4815,126.8826,3.5);
INSERT INTO cinema(cinema_name, total_seat,lat,lng) VALUES ('부천', 81,37.4841,126.7828);
INSERT INTO cinema(cinema_name, total_seat,lat,lng,star) VALUES ('부산', 90,35.1153,129.0395,5);







INSERT INTO seatdb (id, booked) VALUES ('A0', 0);
INSERT INTO seatdb (id, booked) VALUES ('A1', 0);
INSERT INTO seatdb (id, booked) VALUES ('A2', 0);
INSERT INTO seatdb (id, booked) VALUES ('A3', 0);
INSERT INTO seatdb (id, booked) VALUES ('A4', 0);
INSERT INTO seatdb (id, booked) VALUES ('A5', 0);
INSERT INTO seatdb (id, booked) VALUES ('A6', 0);
INSERT INTO seatdb (id, booked) VALUES ('A7', 0);
INSERT INTO seatdb (id, booked) VALUES ('A8', 0);
INSERT INTO seatdb (id, booked) VALUES ('A9', 0);

INSERT INTO seatdb (id, booked) VALUES ('B0', 0);
INSERT INTO seatdb (id, booked) VALUES ('B1', 0);
INSERT INTO seatdb (id, booked) VALUES ('B2', 0);
INSERT INTO seatdb (id, booked) VALUES ('B3', 0);
INSERT INTO seatdb (id, booked) VALUES ('B4', 0);
INSERT INTO seatdb (id, booked) VALUES ('B5', 0);
INSERT INTO seatdb (id, booked) VALUES ('B6', 1);
INSERT INTO seatdb (id, booked) VALUES ('B7', 1);
INSERT INTO seatdb (id, booked) VALUES ('B8', 1);
INSERT INTO seatdb (id, booked) VALUES ('B9', 0);


INSERT INTO seatdb (id, booked) VALUES ('C0', 0);
INSERT INTO seatdb (id, booked) VALUES ('C1', 0);
INSERT INTO seatdb (id, booked) VALUES ('C2', 0);
INSERT INTO seatdb (id, booked) VALUES ('C3', 1);
INSERT INTO seatdb (id, booked) VALUES ('C4', 1);
INSERT INTO seatdb (id, booked) VALUES ('C5', 1);
INSERT INTO seatdb (id, booked) VALUES ('C6', 1);
INSERT INTO seatdb (id, booked) VALUES ('C7', 1);
INSERT INTO seatdb (id, booked) VALUES ('C8', 1);
INSERT INTO seatdb (id, booked) VALUES ('C9', 0);

INSERT INTO seatdb (id, booked) VALUES ('D0', 0);
INSERT INTO seatdb (id, booked) VALUES ('D1', 1);
INSERT INTO seatdb (id, booked) VALUES ('D2', 1);
INSERT INTO seatdb (id, booked) VALUES ('D3', 0);
INSERT INTO seatdb (id, booked) VALUES ('D4', 1);
INSERT INTO seatdb (id, booked) VALUES ('D5', 1);
INSERT INTO seatdb (id, booked) VALUES ('D6', 1);
INSERT INTO seatdb (id, booked) VALUES ('D7', 0);
INSERT INTO seatdb (id, booked) VALUES ('D8', 0);
INSERT INTO seatdb (id, booked) VALUES ('D9', 0);

INSERT INTO seatdb (id, booked) VALUES ('E0', 0);
INSERT INTO seatdb (id, booked) VALUES ('E1', 1);
INSERT INTO seatdb (id, booked) VALUES ('E2', 1);
INSERT INTO seatdb (id, booked) VALUES ('E3', 1);
INSERT INTO seatdb (id, booked) VALUES ('E4', 0);
INSERT INTO seatdb (id, booked) VALUES ('E5', 0);
INSERT INTO seatdb (id, booked) VALUES ('E6', 0);
INSERT INTO seatdb (id, booked) VALUES ('E7', 0);
INSERT INTO seatdb (id, booked) VALUES ('E8', 0);
INSERT INTO seatdb (id, booked) VALUES ('E9', 0);

INSERT INTO showing_movie (id, title, cinema_name, showing_date, runtime, restSeat, seat_num, price, showing_lastDate, regDate) VALUES (1, '헌트', '장승배기', '2022-08-15', 125, 45, 'A1', 12000, '2022-09-20', '2022-08-24 02:14:08');
INSERT INTO showing_movie (id, title, cinema_name, showing_date, runtime, restSeat, seat_num, price, showing_lastDate, regDate) VALUES (2, '탑건: 매버릭', '건대', '2022-07-07', 130, 63, 'B1', 12000, '2022-08-13', '2022-08-24 02:14:11');



INSERT INTO item_basket (id, user_id, item_name, total_price, total_amount, item_image) VALUES (1, 'Jang', '메가박스 탄산음료(대)', 2000, 2, 'https://market.shosyn.com/assets/data/product/_product_image_413.jpg?u=1560428796');
INSERT INTO item_basket (id, user_id, item_name, total_price, total_amount, item_image) VALUES (8, 'Jang', '오리지널팝콘R 1', 5000, 2, 'https://ccimg.hellomarket.com/images/2021/item/08/22/02/0843318_2839104_1.jpg?size=s6');
INSERT INTO item_basket (id, user_id, item_name, total_price, total_amount, item_image) VALUES (10, 'Jang', '더블콤보', 13000, 2, 'https://img.megabox.co.kr/SharedImg/store/2022/03/07/ERDC5wGVMC0YZPIRUsuuaJuAGRyqeDjC_280.png');

INSERT INTO movie_basket (id, user_id, title, posterUrl, movie_time, reserveDate, cinema_name, cinema_id, seat_num, total_amount, total_price, mbti) VALUES (23, 'kim', '헌트', 'https://movie-phinf.pstatic.net/20220805_227/1659685387586PIORG_JPEG/movie_image.jpg', '9:30', '2022-09-08T08:18:03.000Z', '장승배기', 11111, 'E1,E2,E3', 3, 39000, 'INFJ');
INSERT INTO movie_basket (id, user_id, title, posterUrl, movie_time, reserveDate, cinema_name, cinema_id, seat_num, total_amount, total_price, mbti) VALUES (24, 'kim', '탑건: 매버릭', 'https://movie-phinf.pstatic.net/20220509_176/1652081912471yhg3N_JPEG/movie_image.jpg', '11:30', '2022-09-01T08:18:43.000Z', '가산', 22222, 'D1,D2', 2, 26000, 'INTP');



INSERT INTO thunderinsert_images (id, url) VALUES (1, 'https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121__340.jpg');
INSERT INTO thunderinsert_images (id, url) VALUES (2, 'https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396__340.jpg');
INSERT INTO thunderinsert_images (id, url) VALUES (3, 'https://cdn.pixabay.com/photo/2016/08/01/20/13/girl-1561989__340.jpg');
INSERT INTO thunderinsert_images (id, url) VALUES (4, 'https://cdn.pixabay.com/photo/2014/12/16/22/25/sunset-570881__340.jpg');
INSERT INTO thunderinsert_images (id, url) VALUES (5, 'https://cdn-icons-png.flaticon.com/128/1046/1046755.png');
INSERT INTO thunderinsert_images (id, url) VALUES (6, 'https://cdn-icons-png.flaticon.com/128/776/776443.png');
INSERT INTO thunderinsert_images (id, url) VALUES (7, 'https://cdn-icons-png.flaticon.com/128/3214/3214781.png');
INSERT INTO thunderinsert_images (id, url) VALUES (8, 'https://cdn-icons-png.flaticon.com/128/1376/1376408.png');
INSERT INTO thunderinsert_images (id, url) VALUES (9, 'https://cdn-icons-png.flaticon.com/128/2780/2780137.png');
INSERT INTO thunderinsert_images (id, url) VALUES (10, 'https://cdn-icons-png.flaticon.com/128/2363/2363860.png');
INSERT INTO thunderinsert_images (id, url) VALUES (11, 'https://cdn-icons-png.flaticon.com/128/3099/3099073.png');
INSERT INTO thunderinsert_images (id, url) VALUES (12, 'https://cdn-icons-png.flaticon.com/128/854/854894.png');
INSERT INTO thunderinsert_images (id, url) VALUES (13, 'https://cdn-icons-png.flaticon.com/128/5333/5333722.png');
INSERT INTO thunderinsert_images (id, url) VALUES (14, 'https://cdn-icons-png.flaticon.com/128/566/566651.png');



INSERT INTO chatroom (id, post_id, username) VALUES (1, 4, 'Rhaun');
INSERT INTO chatroom (id, post_id, username) VALUES (2, 4, 'gamsa');
INSERT INTO chatroom (id, post_id, username) VALUES (3, 5, 'Rhaun');
INSERT INTO chatroom (id, post_id, username) VALUES (4, 4, 'hanul');
INSERT INTO chatroom (id, post_id, username) VALUES (5, 4, 'sora');
INSERT INTO chatroom (id, post_id, username) VALUES (6, 4, 'Rhaun');
INSERT INTO chatroom (id, post_id, username) VALUES (7, 4, 'gamsa');
INSERT INTO chatroom (id, post_id, username) VALUES (8, 4, 'Rhaun');
INSERT INTO chatroom (id, post_id, username) VALUES (9, 4, 'hanul');
INSERT INTO chatroom (id, post_id, username) VALUES (10, 4, 'sora');

INSERT INTO thundercomment (id, user_id, content, regDate, posting_num) VALUES (1, 'Kim', '15번글 댓글입니다', '2022-09-17 09:12:08', 15);
INSERT INTO thundercomment (id, user_id, content, regDate, posting_num) VALUES (10, 'Lee', '15번 댓글 2', '2022-09-17 09:39:42', 15);
INSERT INTO thundercomment (id, user_id, content, regDate, posting_num) VALUES (16, 'kim', '19번 댓글', '2022-09-17 13:45:06', 19);
INSERT INTO thundercomment (id, user_id, content, regDate, posting_num) VALUES (17, 'kim', 'ㄱㄱㄱㄱㄱ', '2022-09-17 13:45:10', 19);
INSERT INTO thundercomment (id, user_id, content, regDate, posting_num) VALUES (18, 'kim', 'ㄱㄱㄱㄱㄱ', '2022-09-17 13:45:11', 19);
INSERT INTO thundercomment (id, user_id, content, regDate, posting_num) VALUES (19, 'kim', '되난?', '2022-09-17 13:46:15', 19);
INSERT INTO thundercomment (id, user_id, content, regDate, posting_num) VALUES (20, 'kim', 'ㅓㅓㅓ', '2022-09-17 14:45:41', 2);
INSERT INTO thundercomment (id, user_id, content, regDate, posting_num) VALUES (21, 'kim', '댓글을 달아보아요', '2022-09-17 14:45:59', 2);
INSERT INTO thundercomment (id, user_id, content, regDate, posting_num) VALUES (22, 'kim', '15번 댓글 지겨워요', '2022-09-17 14:46:03', 2);
INSERT INTO thundercomment (id, user_id, content, regDate, posting_num) VALUES (23, 'kim', '댓 글 진짜 죽이고 싷ㅍ다', '2022-09-17 14:48:31', 2);

INSERT INTO likecomment (id, UID, CID, status) VALUES (1, 5040, 1, 1);
INSERT INTO likecomment (id, UID, CID, status) VALUES (2, 5040, 14, 1);
INSERT INTO likecomment (id, UID, CID, status) VALUES (6, 5040, 2, 1);
INSERT INTO likecomment (id, UID, CID, status) VALUES (7, 5040, 3, 1);
INSERT INTO likecomment (id, UID, CID, status) VALUES (8, 5040, 4, 1);
INSERT INTO likecomment (id, UID, CID, status) VALUES (9, 5040, 5, 1);
INSERT INTO likecomment (id, UID, CID, status) VALUES (17, 5040, 24, 0);
INSERT INTO likecomment (id, UID, CID, status) VALUES (42, 5040, 35, 1);
INSERT INTO likecomment (id, UID, CID, status) VALUES (57, 5040, 43, 1);
INSERT INTO likecomment (id, UID, CID, status) VALUES (58, 5040, 42, 1);


INSERT INTO thunder (id, username, title, category, content, image, lat, lng, openlink, regdate, location, tags, address, activated) VALUES (1, 'kim', '첫번째', '같이보기', '첫 번개다 잘되라', 'https://cdn.pixabay.com/photo/2016/08/01/20/13/girl-1561989__340.jpg', 37.544335, 126.90429, 'https://open.kakao.com/o/sB8URuAe', '2022-09-09 20:43:50', '장승배기', '#20대,#30대,#코미디,', '용산구', 1);
INSERT INTO thunder (id, username, title, category, content, image, lat, lng, openlink, regdate, location, tags, address, activated) VALUES (2, 'SOOOO', '두번째', '이벤트 투어', '두번째도 되자', 'https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396__340.jpg', 37.55653, 126.92393, 'https://open.kakao.com/o/sB8URuAe', '2022-09-09 20:45:16', '장승배기', '#20대,#30대,#코미디,#조조,', '용산구', 0);
INSERT INTO thunder (id, username, title, category, content, image, lat, lng, openlink, regdate, location, tags, address, activated) VALUES (3, 'Rhaun', '세번째', '이벤트 투어', '주말에 1박 2일로 노지캠핑 가실 분 모셔요~~



장소는 참여자분들에게만 개별 통보 합니다. (비밀 유지 부탁)



장비, 음식 등등 각자 알아서 챙겨 오시면 되시고, 부족한 것들은 인근 편의점에서 구입(추후 정산)하면 될 것 같아요.



참고로 수도, 전기, 화장실 없습니다.... ^^;;.', 'https://cdn.pixabay.com/photo/2014/12/16/22/25/sunset-570881__340.jpg', 37.5505579, 126.8874528, 'https://open.kakao.com/o/sB8URuAe', '2022-09-09 20:53:00', '장승배기', '#20대,#40대,', '가산', 0);
INSERT INTO thunder (id, username, title, category, content, image, lat, lng, openlink, regdate, location, tags, address, activated) VALUES (4, 'hansol', '네번째', '이벤트 투어', '되되도디ㅗ디', 'https://cdn.pixabay.com/photo/2016/08/01/20/13/girl-1561989__340.jpg', 37.4789439, 126.8818645, 'https://open.kakao.com/o/sB8URuAe', '2022-09-12 17:49:28', '가산', '#20대,#30대,', '용산구', 0);
INSERT INTO thunder (id, username, title, category, content, image, lat, lng, openlink, regdate, location, tags, address, activated) VALUES (5, 'nusol', '다섯번째', '같이보기', 'ㄹㅇㄹㅇㄹ', 'https://cdn.pixabay.com/photo/2014/12/16/22/25/sunset-570881__340.jpg', 37.65345, 127.24384, 'https://open.kakao.com/o/sB8URuAe', '2022-09-12 17:49:44', '남양주', '#20대,#액션,#조조,', '용산구', 1);
INSERT INTO thunder (id, username, title, category, content, image, lat, lng, openlink, regdate, location, tags, address, activated) VALUES (6, 'kang', '여섯번째', '같이보기', '첫 번개다 잘되라', 'https://cdn.pixabay.com/photo/2014/12/16/22/25/sunset-570881__340.jpg', 37.65794, 127.24688, 'https://open.kakao.com/o/sB8URuAe', '2022-09-09 20:43:50', '남양주', '#코미디,#30대,', '용산구', 0);
INSERT INTO thunder (id, username, title, category, content, image, lat, lng, openlink, regdate, location, tags, address, activated) VALUES (7, 'jihyeon', '일곱번째', '이벤트 투어', '두번째도 되자', 'https://cdn.pixabay.com/photo/2016/08/01/20/13/girl-1561989__340.jpg', 37.6489, 127.23925, 'https://open.kakao.com/o/sB8URuAe', '2022-09-09 20:45:16', '부천', '#20대,#로맨스,#액션,', '용산구', 1);
INSERT INTO thunder (id, username, title, category, content, image, lat, lng, openlink, regdate, location, tags, address, activated) VALUES (8, 'jonghun', '여덟번째', '이벤트 투어', '세세세세세세버더저저버ㅓ 쨰ㅒㅉ쨰ㅒㅉ', 'https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396__340.jpg', 37.4813452, 126.878116, 'https://open.kakao.com/o/sB8URuAe', '2022-09-09 20:53:00', '가산', '#20대,#30대,', '용산구', 1);
INSERT INTO thunder (id, username, title, category, content, image, lat, lng, openlink, regdate, location, tags, address, activated) VALUES (9, 'gamsa', '영화관 이벤트 같이 참여하실 분들 모집합니다', '이벤트 투어', '되되도디ㅗ디', 'https://cdn.pixabay.com/photo/2016/08/01/20/13/girl-1561989__340.jpg', 37.53998, 127.07889, 'https://open.kakao.com/o/sB8URuAe', '2022-09-12 17:49:28', '건대', '#호러,#30대,#조조,', '용산구', 0);
INSERT INTO thunder (id, username, title, category, content, image, lat, lng, openlink, regdate, location, tags, address, activated) VALUES (10, 'hobak', '햄버거 먹자', '같이보기', '햄버거 먹자', 'https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121__340.jpg', 37.53869, 127.074, 'https://open.kakao.com/o/sB8URuAe', '2022-09-12 17:49:44', '건대', '#20대,#스릴러,', '용산구', 1);