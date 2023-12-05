import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/movieBooking.css"
import { useLocation } from "react-router-dom";



const MovieBooking = () => {
  const [data, setData] = useState([]);
  const [pay, setPay] = useState([]);
  
  const location = useLocation();
  const id = location.state;

  useEffect(() => {
    getData();
    getPayData();
  }, []);


  console.log(id)

const getData =()=>{
axios.get("http://localhost:8080/basket/OneBooking/"+id)
  .then((res) =>setData(res.data))
}
console.log(setData)


const getPayData = () =>{
  axios.get('http://localhost:8080/payment/getByBasketId/' + id)
  .then((res) =>setPay(res.data))
}


console.log("pay: ", pay)



  
  return (
    <>
      <div className="all_container2">
        <div className="all_container_ub">
          <div className="all_container_3" style={{display:"flex",marginBottom:"10px" }}>
            <div className= "all_container_board"style={{fontSize:"40px", marginRight:"770px"}}> &gt; 예매 내역</div>
            {/* <div style={{fontSize:"20px", alignSelf:"flex-end"}}>예매확인/취소</div> */}
           
          </div>
          <div className="container_box">
            <div className="main_title">{data.title}</div>
            <div className="row_container">
                <div className="row_box">
                  <div className="row_left">예매자</div>
                  <div className="row_right">{data.user_id}</div>
                </div>
                <div className="row_box">
                  <div className="row_left">예약번호</div>
                  <div className="row_right">{data.id}</div>
                </div >
                <div className="row_box">
                  <div className="row_left"> 이용일</div>
                  <div className="row_right">{data.reserveDate}</div>
                </div>
                <div className="row_box"> 
                  <div className="row_left">장소</div>
                  <div className="row_right">{data.cinema_name}</div>
                </div>
                <div className="row_box">
                  <div className="row_left">좌석</div>
                  <div className="row_right">{data.seat_num}</div>
                </div>
                <div className="row_box">
                  <div className="row_left">티켓수령 방법</div>
                  <div className="row_right"> 현장수령</div>
                </div>
            </div>
          </div>
       

        <div className="main_container_box">
          <div className="main_top">
            <div>결제내역</div>
          </div>
          <div className="container_box">
            <div className="row_container">
              <div>
                <div className="row_box">
                  <div className="row_left">예매일</div>
                  <div className="row_right">{data.regDate}</div>
                </div >
                <div className="row_box">
                  <div className="row_left">결제수단</div>
                  <div className="row_right">{pay.payment_method_type}</div>
                </div>
                </div>
                <div>
                <div className="row_box">
                  <div className="row_left">현재상태</div>
                  <div className="row_right">예매</div>
                </div >
                <div className="row_box">
                  <div className="row_left">결제상태</div>
                  <div className="row_right">결제</div>
                </div >
                </div>
              </div>
          </div>
        </div>


        <div className="main_container_box22">
              {/* <div className="main_top">
                <div>예매 내역으리ㅡ ㄹ아렁ㄴㄹ ㅓㅏㅇ니러나ㅣ러 ㅏㅣㄴㅇ</div>
              </div> */}
              
              <div className="container_box2">
                <div className="row_container2">
                    <div className="row_box2">
                      <div className="row_left2">예약번호</div>
                      <div className="row_right2">{pay.tid}</div>
                    </div >
                    <div className="row_box2">
                      <div className="row_left2"> 좌석번호</div>
                      <div className="row_right2">{data.seat_num}</div>
                    </div>

                    <div className="row_box2">
                      <div className="row_left2"> 가격</div>
                      <div className="row_right2">{pay.total_amount}</div>
                    </div>
                     
                    <div className="row_box2">
                      <div className="row_left2">취소여부</div>
                      <div className="row_right2">취소불가능</div>
                    </div>
                    <div className="row_box2">
                      <div className="row_left2">상영관</div>
                      <div className="row_right2">{data.cinema_name}</div>
                    </div>

                  </div>
                 </div>
              </div>
        
              <div className="container_box3">
                <div className="row_container">
                    <div className="row_box">
                      <div className="row_left">결제금액</div>
                    
                      <div className="row_right">{pay.total_amount}</div>
                    </div>
                  </div>
              </div>
              </div>
            </div>
           
        
    </>
  );
};

export default MovieBooking;
