package com.example.demo.Service;


import com.example.demo.Mapper.StoreMapper;
import com.example.demo.VO.Store;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StoreService {

        @Autowired
        private StoreMapper storeMapper;

        public List<Store> getAll() {
            return storeMapper.getAllStore();
        }

        public Store getId(int id) {
            return storeMapper.getIdStore(id);
        }

        public int insert(Store store) {
            return  storeMapper.insertStore(store);
        }

        public int delete(int id) {
            return storeMapper.deleteStore(id);
        }

        public int update(int id,Store store) {
            return storeMapper.updateStore(id,store);
        }
}
