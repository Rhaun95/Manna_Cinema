package com.example.demo.Service;


import com.example.demo.Mapper.item_basketMapper;
import com.example.demo.VO.Item_basket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Item_basketService {

    @Autowired
    private item_basketMapper itembasketMapper;

    public List<Item_basket> getAll() {
        return itembasketMapper.getAllItems();
    }

    public List<Item_basket> getByUsername(String username) {
        return itembasketMapper.getByUsername(username);
    }
//
//    public Seat getId(int id) {
//        return itembasketMapper.getIdStore(id);
//    }

    public int insert(Item_basket iBasket) {
        return  itembasketMapper.insertItemBasket(iBasket);
    }

    public int deleteAll(){
        return itembasketMapper.deleteAll();
    }
    public int deleteById(int id) {
        return itembasketMapper.deleteById(id);
    }

    public int updateStatus(int id){
        return itembasketMapper.updateStatus(id);
    }


}
