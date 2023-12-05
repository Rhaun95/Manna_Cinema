package com.example.demo.Controller;

import com.example.demo.Service.Item_basketService;
import com.example.demo.VO.Item_basket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/itembasket")
public class  Item_basketController {

        @Autowired
        private Item_basketService itembasketService;


        @GetMapping("") // 전체 조회
        public List<Item_basket> getAll() {
            return itembasketService.getAll();
        }

        // 유저네임별 조회
        @GetMapping("/{username}")
        public List<Item_basket> getByUsername(@PathVariable("username") String username) {
            return itembasketService.getByUsername(username);
        }


//        @GetMapping("/{id}")
//        public Seat getById(@PathVariable("id") int id) {
//            return itembasketService.getId(id);
//        }

        @PostMapping("/insert") // 추가
        public Item_basket post(@RequestBody Item_basket item_basket) {
            itembasketService.insert(item_basket);
            return item_basket;
        }

        @DeleteMapping("/")
        public int deleteAll(){
            if(itembasketService.deleteAll() != 0){
                return 1;
            }else{
                return 0;
            }
        }

        @DeleteMapping("/{id}")
        public int deleteById(@PathVariable("id") int id) {
            System.out.println("아이템이 삭제되었습니다.");
            return itembasketService.deleteById(id);
        }

        @PutMapping("/updateStatus/{id}")
        public int updateStatus(@PathVariable("id") int id) {
            try {
                return itembasketService.updateStatus(id);
            } catch (Exception e) {
                return 0;
            }
        }

}
