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
                         `image` varchar(100) NOT NULL,
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
