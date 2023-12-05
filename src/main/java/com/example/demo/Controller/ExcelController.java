package com.example.demo.Controller;

import com.example.demo.Service.*;
import com.example.demo.entity.*;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/excel")
public class ExcelController {
        @Autowired
        private MovieService movieService;
        @Autowired
        private CinemaService cinemaService;
        @Autowired
        private StoreService storeService;
        @Autowired
        private UserService userService;
        @Autowired
        private BoardService boardService;

        @Autowired
        private ThunderService thunderService;



        @GetMapping("/movie")
        public void downloadExcelMovie(HttpServletResponse response) throws IOException {
            Workbook workbook = new HSSFWorkbook();
            CellStyle style = workbook.createCellStyle();
            Sheet sheet = workbook.createSheet("만나극장 영화목록");
            int rowNo = 0;

            style.setFillForegroundColor(IndexedColors.YELLOW.index);
            style.setFillPattern(FillPatternType.SOLID_FOREGROUND);
            Row headerRow = sheet.createRow(rowNo++);

            headerRow.createCell(2).setCellValue("영화번호");
            headerRow.createCell(3).setCellValue("영화제목");
            headerRow.createCell(4).setCellValue("감독명");
            headerRow.createCell(5).setCellValue("배우명");
            headerRow.createCell(6).setCellValue("장르");
            headerRow.createCell(7).setCellValue("상영시간");
            headerRow.createCell(8).setCellValue("개봉일");
            headerRow.createCell(9).setCellValue("순위");
            headerRow.createCell(10).setCellValue("제조국");
            headerRow.createCell(11).setCellValue("줄거리");
            headerRow.createCell(12).setCellValue("별점");
            headerRow.createCell(13).setCellValue("관객수");
            headerRow.createCell(14).setCellValue("스틸이미지url");
            headerRow.createCell(15).setCellValue("포스터url");
            headerRow.createCell(16).setCellValue("스틸영상url");

            for(int i=2; i<=16; i++) {
                headerRow.getCell(i).setCellStyle(style);
            }


            List<ExcelMovie> list = movieService.getMAll();
            for (ExcelMovie movie : list) {
                Row row = sheet.createRow(rowNo++);
                row.createCell(2).setCellValue(movie.getMovieid());
                row.createCell(3).setCellValue(movie.getTitle());
                row.createCell(4).setCellValue(movie.getDirectornm());
                row.createCell(5).setCellValue(movie.getActornm());
                row.createCell(6).setCellValue(movie.getGenre());
                row.createCell(7).setCellValue(movie.getRuntime());
                row.createCell(8).setCellValue(movie.getReprlsdate());
                row.createCell(9).setCellValue(movie.getRating());
                row.createCell(10).setCellValue(movie.getCountry());
                row.createCell(11).setCellValue(movie.getPlot());
                row.createCell(12).setCellValue(movie.getStar());
                row.createCell(13).setCellValue(movie.getAudiacc());
                row.createCell(14).setCellValue(movie.getStillurl());
                row.createCell(15).setCellValue(movie.getPosterurl());
                row.createCell(16).setCellValue(movie.getAudiourl());
            }
            response.setContentType("ms-vnd/excel");
            response.setHeader("Content-Disposition", "attachment;filename=MeetCinema_Movie.xls");

            workbook.write(response.getOutputStream());
            workbook.close();
        }

        @GetMapping("/cinema")
        public void downloadExcelCinema(HttpServletResponse response) throws IOException {
            Workbook workbook = new HSSFWorkbook();
            CellStyle style = workbook.createCellStyle();
            Sheet sheet = workbook.createSheet("만나극장 극장목록");
            int rowNo = 0;

            style.setFillForegroundColor(IndexedColors.BLUE.index);
            style.setFillPattern(FillPatternType.SOLID_FOREGROUND);

            Row headerRow = sheet.createRow(rowNo++);
            headerRow.createCell(0).setCellValue("상영관번호");
            headerRow.createCell(1).setCellValue("상영관이름");
            headerRow.createCell(2).setCellValue("좌석 개수");
            headerRow.createCell(3).setCellValue("위도");
            headerRow.createCell(4).setCellValue("경도");
            headerRow.createCell(5).setCellValue("별점");

            for(int i=0; i<=5; i++) {
                headerRow.getCell(i).setCellStyle(style);
            }

            List<ExcelCinema> list = cinemaService.getEAll();
            for (ExcelCinema cinema : list) {
                Row row = sheet.createRow(rowNo++);
                row.createCell(0).setCellValue(cinema.getId());
                row.createCell(1).setCellValue(cinema.getCinema_name());
                row.createCell(2).setCellValue(cinema.getTotal_seat());
                row.createCell(3).setCellValue(cinema.getLat());
                row.createCell(4).setCellValue(cinema.getLng());
                row.createCell(5).setCellValue(cinema.getStar());
            }
            response.setContentType("ms-vnd/excel");
            response.setHeader("Content-Disposition", "attachment;filename=MeetCinema_Cinema.xls");

            workbook.write(response.getOutputStream());
            workbook.close();
        }
    @GetMapping("/store")
    public void downloadExcelStore(HttpServletResponse response) throws IOException {
        Workbook workbook = new HSSFWorkbook();
        CellStyle style = workbook.createCellStyle();
        Sheet sheet = workbook.createSheet("만나극장 스토어목록");
        int rowNo = 0;

        style.setFillForegroundColor(IndexedColors.AQUA.index);
        style.setFillPattern(FillPatternType.SOLID_FOREGROUND);

        Row headerRow = sheet.createRow(rowNo++);
        headerRow.createCell(0).setCellValue("상품번호");
        headerRow.createCell(1).setCellValue("상품이름");
        headerRow.createCell(2).setCellValue("상품재고");
        headerRow.createCell(3).setCellValue("상품타입");
        headerRow.createCell(4).setCellValue("상품가격");
        headerRow.createCell(5).setCellValue("이미지URL");

        for(int i=0; i<=5; i++) {
            headerRow.getCell(i).setCellStyle(style);
        }

        List<ExcelStore> list = storeService.getSAll();
        for (ExcelStore store : list) {
            Row row = sheet.createRow(rowNo++);
            row.createCell(0).setCellValue(store.getId());
            row.createCell(1).setCellValue(store.getName());
            row.createCell(2).setCellValue(store.getAmount());
            row.createCell(3).setCellValue(store.getType());
            row.createCell(4).setCellValue(store.getPrice());
            row.createCell(5).setCellValue(store.getImage());
        }
        response.setContentType("ms-vnd/excel");
        response.setHeader("Content-Disposition", "attachment;filename=MeetCinema_Store.xls");

        workbook.write(response.getOutputStream());
        workbook.close();
    }
    @GetMapping("/user")
    public void downloadExcelUser(HttpServletResponse response) throws IOException {
        Workbook workbook = new HSSFWorkbook();
        CellStyle style = workbook.createCellStyle();
        Sheet sheet = workbook.createSheet("만나극장 유저목록");
        int rowNo = 0;

        style.setFillForegroundColor(IndexedColors.CORAL.index);
        style.setFillPattern(FillPatternType.SOLID_FOREGROUND);

        Row headerRow = sheet.createRow(rowNo++);
        headerRow.createCell(0).setCellValue("회원번호");
        headerRow.createCell(1).setCellValue("아이디");
        headerRow.createCell(2).setCellValue("닉네임");
        headerRow.createCell(3).setCellValue("이메일");
        headerRow.createCell(4).setCellValue("생일");
        headerRow.createCell(5).setCellValue("핸드폰번호");
        headerRow.createCell(6).setCellValue("가입일");

        for(int i=0; i<=6; i++) {
            headerRow.getCell(i).setCellStyle(style);
        }

        List<User> list = userService.getUserExcel();
        for (User user : list) {
            Row row = sheet.createRow(rowNo++);
            row.createCell(0).setCellValue(user.getUserId());
            row.createCell(1).setCellValue(user.getUsername());
            row.createCell(2).setCellValue(user.getNickname());
            row.createCell(3).setCellValue(user.getEmail());
            row.createCell(4).setCellValue(user.getBirth());
            row.createCell(5).setCellValue(user.getPhone());
            row.createCell(6).setCellValue(user.getDate());
        }
        response.setContentType("ms-vnd/excel");
        response.setHeader("Content-Disposition", "attachment;filename=MeetCinema_User.xls");

        workbook.write(response.getOutputStream());
        workbook.close();
    }
    @GetMapping("/board")
    public void downloadExcelBoard(HttpServletResponse response) throws IOException {
        Workbook workbook = new HSSFWorkbook();
        CellStyle style = workbook.createCellStyle();
        Sheet sheet = workbook.createSheet("만나극장 게시판목록");
        int rowNo = 0;

        style.setFillForegroundColor(IndexedColors.YELLOW.index);
        style.setFillPattern(FillPatternType.SOLID_FOREGROUND);

        Row headerRow = sheet.createRow(rowNo++);
        headerRow.createCell(0).setCellValue("게시판번호");
        headerRow.createCell(1).setCellValue("작성자ID");
        headerRow.createCell(2).setCellValue("글 제목");
        headerRow.createCell(3).setCellValue("글 내용");
        headerRow.createCell(4).setCellValue("등록일");
        headerRow.createCell(5).setCellValue("조회수");
        headerRow.createCell(6).setCellValue("타입");
        headerRow.createCell(7).setCellValue("비밀글여부");

        for(int i=0; i<=7; i++) {
            headerRow.getCell(i).setCellStyle(style);
        }

        List<ExcelBoard> list = boardService.getBoardExcel();
        for (ExcelBoard board : list) {
            Row row = sheet.createRow(rowNo++);
            row.createCell(0).setCellValue(board.getId());
            row.createCell(1).setCellValue(board.getUser_id());
            row.createCell(2).setCellValue(board.getTitle());
            row.createCell(3).setCellValue(board.getContent());
            row.createCell(4).setCellValue(board.getRegdate());
            row.createCell(5).setCellValue(board.getHit());
            row.createCell(6).setCellValue(board.getType());
            row.createCell(7).setCellValue(board.getSecret());
        }
        response.setContentType("ms-vnd/excel");
        response.setHeader("Content-Disposition", "attachment;filename=MeetCinema_Board.xls");

        workbook.write(response.getOutputStream());
        workbook.close();
    }

    @GetMapping("/thunder")
    public void downloadExcelThunder(HttpServletResponse response) throws IOException {
        Workbook workbook = new HSSFWorkbook();
        CellStyle style = workbook.createCellStyle();
        Sheet sheet = workbook.createSheet("만나극장 번개게시판 목록");
        int rowNo = 0;

        style.setFillForegroundColor(IndexedColors.GREEN.index);
        style.setFillPattern(FillPatternType.SOLID_FOREGROUND);

        Row headerRow = sheet.createRow(rowNo++);
        headerRow.createCell(0).setCellValue("번개_번호");
        headerRow.createCell(1).setCellValue("작성자");
        headerRow.createCell(2).setCellValue("글 제목");
        headerRow.createCell(3).setCellValue("글 내용");
        headerRow.createCell(4).setCellValue("위도");
        headerRow.createCell(5).setCellValue("경도");
        headerRow.createCell(6).setCellValue("등록일");
        headerRow.createCell(7).setCellValue("장소");
        headerRow.createCell(8).setCellValue("태그");
        headerRow.createCell(9).setCellValue("주소");
        headerRow.createCell(10).setCellValue("만남시간");

        for(int i=0; i<=10; i++) {
            headerRow.getCell(i).setCellStyle(style);
        }

        List<ExcelThunder> list = thunderService.getThunderExcel();
        for (ExcelThunder thunder : list) {
            Row row = sheet.createRow(rowNo++);
            row.createCell(0).setCellValue(thunder.getId());
            row.createCell(1).setCellValue(thunder.getUsername());
            row.createCell(2).setCellValue(thunder.getTitle());
            row.createCell(3).setCellValue(thunder.getContent());
            row.createCell(4).setCellValue(thunder.getLat());
            row.createCell(5).setCellValue(thunder.getLng());
            row.createCell(6).setCellValue(thunder.getRegdate());
            row.createCell(7).setCellValue(thunder.getLocation());
            row.createCell(8).setCellValue(thunder.getTags());
            row.createCell(9).setCellValue(thunder.getAddress());
            row.createCell(10).setCellValue(thunder.getMettingtime());

        }
        response.setContentType("ms-vnd/excel");
        response.setHeader("Content-Disposition", "attachment;filename=MeetCinema_Thunder.xls");

        workbook.write(response.getOutputStream());
        workbook.close();
    }
}
