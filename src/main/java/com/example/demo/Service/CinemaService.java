package com.example.demo.Service;


import com.example.demo.Mapper.CinemaMapper;
import com.example.demo.VO.Cinema;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CinemaService {

        @Autowired
        private CinemaMapper cinemaMapper;

        public List<Cinema> getAll() {
            return cinemaMapper.getAllCinema();
        }

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
