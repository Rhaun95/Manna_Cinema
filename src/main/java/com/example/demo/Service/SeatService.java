package com.example.demo.Service;


import com.example.demo.Mapper.SeatMapper;
import com.example.demo.VO.Seat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SeatService {

    @Autowired
    private SeatMapper seatMapper;

    public List<Seat> getAll() {
        return seatMapper.getAllSeats();
    }
//
//    public Seat getId(int id) {
//        return itembasketMapper.getIdStore(id);
//    }

//    public int insert(Seat iBasket) {
//        return  itembasketMapper.insertItemBasket(iBasket);
//    }
//
//    public int delete(int id) {
//        return itembasketMapper.deleteItemBasket(id);
//    }

    public int update(String id) {
        return seatMapper.updateStatus(id);
    }


}
