package com.example.demo.Service;


import com.example.demo.Mapper.CinemaMapper;
import com.example.demo.VO.Cinema;
import com.example.demo.entity.ExcelCinema;
import com.example.demo.repository.CinemaRepository.CinemaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CinemaService {

    @Autowired
    private CinemaMapper cinemaMapper;
    @Autowired
    private CinemaRepository cinemaRepository;


    public List<Cinema> searchCinema(String searchData){
        return cinemaMapper.searchCinema(searchData);
    }

    public List<Cinema> getAll() {
        return cinemaMapper.getAllCinema();
    }

    public List<ExcelCinema> getEAll() {return cinemaRepository.findAll();}
    public Cinema getId(int id) {
        return cinemaMapper.getIdCinema(id);
    }
    public int insert(Cinema cinema) {
        return  cinemaMapper.insertCinema(cinema);
    }
    public int delete(int id) {
        return cinemaMapper.deleteCinema(id);
    }
    public int update(int id,Cinema cinema) {
        return cinemaMapper.updateCinema(id,cinema);
    }


}
