package com.example.demo.repository.StoreRepository;

import com.example.demo.entity.ExcelStore;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StoreRepository extends JpaRepository<ExcelStore, Integer> {
}
