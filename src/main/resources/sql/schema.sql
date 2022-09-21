drop table user;

create table user(
                     `user_id` int NOT NULL AUTO_INCREMENT,
                     `username` varchar(45) NOT null,
                     `password` varchar(200) NOT NULL,
                     `nickname` varchar(45) NOT NULL,
                     `email` varchar(200) ,
                     `birth` varchar(200) ,
                     `phone` varchar(200) ,
                     `date` varchar(200)  ,
                     `activated` varchar(45) NOT NULL,
                     PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

drop table authority;

create table authority(
                          `authority_name` varchar(60) NOT null,
                          PRIMARY KEY (`authority_name`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


drop table user_authority;

create table user_authority(
                               `user_id` INT NOT NULL ,
                               `authority_name` varchar(200) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

drop table movie;
CREATE TABLE movie (
                       `movieId` int NOT null AUTO_INCREMENT,
                       `title` varchar(60) NOT NULL,
                       `directorNm` varchar(45) NOT NULL,
                       `actorNm` varchar(45) NOT NULL,
                       `genre` varchar(45) NOT NULL,
                       `runtime` int NOT NULL,
                       `repRlsDate` date NOT NULL,
                       `rating` varchar(45) NOT NULL,
                       `posterUrl` varchar(200) NOT NULL,
                       `plot` varchar(1000) NOT NULL,
                       `star` double DEFAULT '0',
                       `audiAcc` int NOT NULL,
                       `stillUrl` varchar(1000) NOT NULL,
                       `country` varchar(100) not null,
                       `audioUrl` varchar(1000) not null,
                       PRIMARY KEY (`movieId`),
                       UNIQUE KEY `title_UNIQUE` (`title`),
                       UNIQUE KEY `posterUrl_UNIQUE` (`posterUrl`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

drop table store;

CREATE TABLE store (
                       `id` int NOT NULL AUTO_INCREMENT,
                       `price` int NOT NULL,
                       `amount` int DEFAULT NULL,
                       `name` varchar(45) NOT NULL,
                       `type` varchar(30) NOT NULL,
                       `image` varchar(500) NOT NULL,
                       PRIMARY KEY (`id`),
                       UNIQUE KEY `name_UNIQUE` (`name`),
                       UNIQUE KEY `image_UNIQUE` (`image`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

drop table cinema;

create table cinema
(
    id int auto_increment primary key,
    cinema_name varchar(45) not null,
    total_seat  int         not null,
    lat double not null,
    lng double not null,
    star double default 0,
    constraint cinema_name_UNIQUE
        unique (cinema_name),
    constraint id_UNIQUE
        unique (id)
);


drop table seatdb;

create table seatdb
(
    id     varchar(12)       not null
        primary key,
    booked tinyint default 0 not null,
    constraint id_UNIQUE
        unique (id)
);

drop table showing_movie;
create table showing_movie(
                              id               int auto_increment primary key,
                              title            varchar(60)                         not null,
                              cinema_name      varchar(45)                         not null,
                              showing_date     varchar(45)                         not null,
                              runtime          int                                 not null,
                              restSeat         int                                 not null,
                              seat_num         varchar(12)                         not null,
                              price            int              default 12000      not null,
                              showing_lastDate varchar(45)                         not null,
                              regDate          timestamp default CURRENT_TIMESTAMP not null
);
drop table item_basket;
create table item_basket
(
    id           int auto_increment
        primary key,
    user_id      varchar(45)  null,
    item_name    varchar(45)  not null,
    total_price  int          null,
    total_amount int          null,
    item_image   varchar(100) not null
);

drop table movie_basket;
create table movie_basket
(
    id           int auto_increment
        primary key,
    user_id      varchar(45)  not null,
    title        varchar(60)  not null,
    posterUrl    varchar(100) not null,
    movie_time   varchar(20)  not null,
    reserveDate  varchar(40)  not null,
    cinema_name  varchar(45)  not null,
    cinema_id    int          null,
    seat_num     varchar(45)  not null,
    total_amount int          null,
    total_price  int          null,
    mbti         varchar(15)  null
);
drop table tchat;

CREATE TABLE `tchat` (
                         `num` int NOT NULL AUTO_INCREMENT,
                         `tchat_id` varchar(45) NOT NULL,
                         `user_id` varchar(45) NOT NULL,
                         `context` varchar(1000) not null,
                         `time` varchar(45) not null,
                         PRIMARY KEY (`num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


drop table item_basket;
create table item_basket
(
    id           int auto_increment
        primary key,
    user_id      varchar(45)  null,
    item_name    varchar(45)  not null,
    total_price  int          null,
    total_amount int          null,
    item_image   varchar(100) not null
);

drop table movie_basket;
create table movie_basket
(
    id           int auto_increment
        primary key,
    user_id      varchar(45)  not null,
    title        varchar(60)  not null,
    posterUrl    varchar(100) not null,
    movie_time   varchar(20)  not null,
    reserveDate  varchar(40)  not null,
    cinema_name  varchar(45)  not null,
    cinema_id    int          null,
    seat_num     varchar(45)  not null,
    total_amount int          null,
    total_price  int          null,
    mbti         varchar(15)  null
);


drop table thunder;
create table thunder
(
    id        int auto_increment
        primary key,
    username  varchar(45)                         not null,
    title     varchar(100)                        not null,
    category  varchar(30)                         not null,
    content   varchar(500)                        not null,
    image     varchar(300)                        null,
    lat       double    default 38                null,
    lng       double    default 127               null,
    openlink  varchar(100)                        null,
    regdate   timestamp default CURRENT_TIMESTAMP not null,
    location  varchar(10)                         null,
    tags      varchar(30)                         null,
    address     varchar(90)                        not null ,
    activated int       default 1                 not null
);

drop table thunderinsert_images;
create table thunderinsert_images
(
    id  int auto_increment
        primary key,
    url varchar(200) not null
);

drop table chatroom;

create table chatroom
(
    id       int auto_increment
        primary key,
    post_id  int         not null,
    username varchar(45) not null
);

drop table thundercomment;
create table thundercomment
(
    user_id     varchar(45) default 'manager'         not null,
    content     varchar(600)                          not null,
    regDate     timestamp   default CURRENT_TIMESTAMP not null,
    posting_num int                                   not null,
    id          int auto_increment
        primary key
);

drop table likecomment;
create table likecomment
(
    UID    int           not null,
    CID    int           not null,
    id     int auto_increment
        primary key,
    status int default 1 not null
);
