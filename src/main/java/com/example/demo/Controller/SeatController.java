package com.example.demo.Controller;

import com.example.demo.Service.SeatService;
import com.example.demo.VO.Seat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/seat")
public class SeatController {

        @Autowired
        private SeatService seatService;


        @GetMapping("") // 전체 조회
        public List<Seat> getAll() {
            return seatService.getAll();
        }


//        @GetMapping("/{id}")
//        public Seat getById(@PathVariable("id") int id) {
//            return itembasketService.getId(id);
//        }
//
//        @PostMapping("insert") // 추가
//        public Seat post(@RequestBody Seat item_basket) {
//            itembasketService.insert(item_basket);
//            return item_basket;
//        }
//
//        @DeleteMapping("/{id}")
//        public int delete(@PathVariable("id") int id) {
//            return itembasketService.delete(id);
//        }

        @PutMapping("/{id}")
        public int update(@PathVariable("id") String id) {
            return seatService.update(id);
        }

}
