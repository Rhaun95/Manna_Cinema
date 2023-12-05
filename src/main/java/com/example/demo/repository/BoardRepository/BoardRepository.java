package com.example.demo.repository.BoardRepository;

import com.example.demo.entity.ExcelBoard;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<ExcelBoard, Integer> {
}
