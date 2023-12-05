package com.example.demo.Controller;

import com.example.demo.Service.StoreService;
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
    // 전체 조회
    @GetMapping("")
    public List<Store> getAll() {
        return storeService.getAll();
    }
    // 개별 조회
    @GetMapping("/{id}")
    public Store getById(@PathVariable("id") int id) {
        return storeService.getId(id);
    }
    // 추가
    @PostMapping("")
    public Store post(@RequestBody Store store) {
        storeService.insert(store);
        return store;
    }
    // 삭제
    @DeleteMapping("/{id}")
    public String delete(@PathVariable("id") int id) {
        storeService.delete(id);
        return id + "번 제품이 삭제되었습니다";
    }
    //수정
    @PutMapping("/{id}")
    public String update(@PathVariable("id") int id, @RequestBody Store store) {
        storeService.update(id, store);
        return id + "번 제품 수정되었습니다." + LocalTime.now();
    }

    @PostMapping("search")//검색
    public List<Store> searchSearch(@RequestBody String searchData) {
        return storeService.searchStore("%" + searchData + "%");
    }

}
