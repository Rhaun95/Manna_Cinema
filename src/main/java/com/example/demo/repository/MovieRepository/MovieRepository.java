package com.example.demo.repository.MovieRepository;

import com.example.demo.entity.ExcelMovie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<ExcelMovie, Integer> {
}
