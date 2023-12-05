package com.example.demo.Controller;

import com.example.demo.Service.ThunderService;
import com.example.demo.VO.Thunder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/thunder")
public class ThunderController {

    @Autowired
    private ThunderService thunderService;

    // 전체 조회
    @GetMapping("/")
    public List<Thunder> getAll() {
        return thunderService.getAll();
    }

    //선택한 로케이션만 조회
    @GetMapping("/search/{location}")
    public List<Thunder> getByLocation(@PathVariable("location") String location){
        return thunderService.getByLocation(location);
    }

    @GetMapping("/{id}")
    public Thunder getById(@PathVariable("id") int id) {
        return thunderService.getId(id);
    }

    @GetMapping("/select/{username}")
    public List<Thunder> getById(@PathVariable("username") String username) {
        return thunderService.getByUsername(username);
    }


    @GetMapping("/search/{username}/{location}")
    public List<Thunder> getById(@PathVariable("username") String username, @PathVariable("location") String location) {
        return thunderService.getWanted(username,location);
    }
    //최대 좋아요 4등까지 조회
    @GetMapping("/hot")
    public List<Thunder> getHot(){
        return thunderService.getHot();
    }

    @GetMapping("/{category}{location}{username}")
    public List<Thunder> getByALl(@PathVariable("category") String category,@PathVariable("location") String location, @PathVariable("username") String username) {
        System.out.println("category: "+ category);
        System.out.println("location: "+ location);
        System.out.println("username: "+ username);
        return thunderService.getByAll(category, location, username);
    }


    @PostMapping("/insert") // 추가
    public int post(@RequestBody Thunder thunder) {
        int res = thunderService.insert(thunder);

        if(res == 1){
            return res;
        }else{
            System.out.println("추가 오류");
            return 0;
        }
    }
    @DeleteMapping("/{id}")
    public String delete(@PathVariable("id") int id) {
        thunderService.delete(id);
        return id + "번 제품이 삭제되었습니다";
    }
//
//    @PutMapping("/{id}")
//    public String update(@PathVariable("id") int id, @RequestBody Thunder store) {
//        thunderService.update(id, store);
//        return id + "번 제품 수정되었습니다." + LocalTime.now();
//    }
//
//    @PostMapping("/search")//검색
//    public List<Thunder> searchSearch(@RequestBody String searchData) {
//        return thunderService.searchStore("%" + searchData + "%");
//    }

}
