package com.example.demo.repository.ThunderRepository;

import com.example.demo.entity.ExcelThunder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ThunderRepository extends JpaRepository<ExcelThunder, Integer> {
}
