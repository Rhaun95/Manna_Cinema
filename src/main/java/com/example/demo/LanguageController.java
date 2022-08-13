package com.example.demo;

import java.time.LocalTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/La")
public class LanguageController {

    @Autowired
    private LanguageMapper lanMapper;

    @GetMapping("list") // 전체 조회
    public List<Language> getAll() {
        return lanMapper.getAll();
    }

    @GetMapping("/{id}")
    public Language getById(@PathVariable("id") int id) {
        return lanMapper.getId(id);
    }

    @PostMapping("insert") // 추가
    public Language post(@RequestBody Language language) {
        lanMapper.insertTest(language);
        return language;
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable("id") int id) {
        lanMapper.deleteTest(id);
        return id + "번 제품이 삭제되었습니다";
    }

    @PostMapping("/{id}")
    public String update(@PathVariable("id") int id, @RequestBody Language language) {
        lanMapper.updateTest(id, language);
        return id + "번 제품 수정되었습니다." + LocalTime.now();
    }

}