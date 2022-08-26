package com.example.demo.Service;

import com.example.demo.Mapper.LanguageMapper;
import com.example.demo.VO.Language;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LanguageService {

    @Autowired
    private LanguageMapper languageMapper;

    public List<Language> getAll() {
        return languageMapper.getAll();
    }

    public Language getId(int id) {
        return languageMapper.getId(id);
    }

    public int insert(Language language) {
       return  languageMapper.insertTest(language);
    }

    public int delete(int id) {
        return languageMapper.deleteTest(id);
    }

    public int update(int id,Language language) {
        return languageMapper.updateTest(id,language);
    }
}
