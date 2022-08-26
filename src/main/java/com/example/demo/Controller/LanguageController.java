package com.example.demo.Controller;

import java.time.LocalTime;
import java.util.List;

import com.example.demo.Service.LanguageService;
import com.example.demo.VO.Language;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@RestController
@RequestMapping("/La")
public class LanguageController {

    @Autowired
    private LanguageService languageService;


    @GetMapping("list") // 전체 조회
    public List<Language> getAll() {
        return languageService.getAll();
    }


    @GetMapping("/{id}")
    public Language getById(@PathVariable("id") int id) {
        return languageService.getId(id);
    }

    @PostMapping("insert") // 추가
    public Language post(@RequestBody Language language) {
        languageService.insert(language);
        return language;
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable("id") int id) {
        languageService.delete(id);
        return id + "번 제품이 삭제되었습니다";
    }

    @PutMapping("/{id}")
    public String update(@PathVariable("id") int id, @RequestBody Language language) {
        languageService.update(id, language);
        return id + "번 제품 수정되었습니다." + LocalTime.now();
    }



}