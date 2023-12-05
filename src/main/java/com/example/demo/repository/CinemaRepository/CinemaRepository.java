package com.example.demo.repository.CinemaRepository;

import com.example.demo.entity.ExcelCinema;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CinemaRepository extends JpaRepository<ExcelCinema, Integer> {
}
