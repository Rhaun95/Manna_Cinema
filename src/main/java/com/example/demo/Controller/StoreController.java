package com.example.demo.Controller;

import com.example.demo.Service.MovieService;
import com.example.demo.Service.StoreService;
import com.example.demo.VO.Movie;
import com.example.demo.VO.Store;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalTime;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/store")
public class StoreController {

    @Autowired
    private StoreService storeService;


    @GetMapping("") // 전체 조회
    public List<Store> getAll() {
        return storeService.getAll();
    }


    @GetMapping("/{id}")
    public Store getById(@PathVariable("id") int id) {
        return storeService.getId(id);
    }

    @PostMapping("insert") // 추가
    public Store post(@RequestBody Store store) {
        storeService.insert(store);
        return store;
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable("id") int id) {
        storeService.delete(id);
        return id + "번 제품이 삭제되었습니다";
    }

    @PutMapping("/{id}")
    public String update(@PathVariable("id") int id, @RequestBody Store store) {
        storeService.update(id, store);
        return id + "번 제품 수정되었습니다." + LocalTime.now();
    }

}
