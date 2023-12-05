
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Container} from "react-bootstrap";

import "../css/seatForm.css";
import Seat from "../components/Seat";

import {useSelector, useDispatch} from "react-redux";
import {movieBasketActions} from '../../reduxstore/basketReducer';

const SeatForm = () => {

    //전체 좌석
    const [seatList, setSeatList] = useState([]);
    //클릭된 좌석들 
    const [seatForBasket, setSeatForBasket] = useState([]);

    //구분된 id들의 values
    const [seatIds, setSeatIds] = useState([])

    const [resultDB, setResultDB] = useState([]);
    const [resultBasket, setResultBasket] = useState("");


    //비/활성화
    const toggle=[
        {
            cheked: false,
            color:"#e0ca9f"
        },
        {
            checked: true,
            color: "gray"
        }]

    //Redux
    //예매된 좌석 
    const movieBasket = useSelector((state)=> state.basket.movieBasket);
    const seatBasket = useSelector((state)=> state.basket.seatBasket);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();


    //좌석 DB -> 예매된 좌석 구분
    useEffect(() => {
        seatDB()
     
    },[])

    useEffect(() => {
        getBookedIds()
    },[seatList])

    useEffect(()=>{
        //최종 상태 배열 = seatDB를 위함
        setResultDB(seatForBasket) 
       
        //최종 상태 문자열 = MovieBasket을 위함
        var data = seatForBasket.join();
        setResultBasket(data)

    },[seatForBasket])

    useEffect(()=>{
        console.log("resultDB: ", resultDB)
        console.log("resultBasket: ", resultBasket)

        dispatch(movieBasketActions.setSeatInMovieBasket({resultBasket}))
        dispatch(movieBasketActions.setSeatForDB({resultDB}))
    },[resultDB])


    //seatDB
    const seatDB = async () => {
        try{
            const temp = await axios.get("http://localhost:8080/seat",{
                        headers:{
                          'Content-type': 'application/json'
                      }})          
            setSeatList(temp.data) 
        }catch(error){
            console.log(error)   
        }
    }

    // 예매된 좌석 구분 [비동기]
    const getBookedIds = async()=>{
        try{
            const temp2 = await bookedIds(seatList)
            setSeatIds(temp2)      // seatIds: 구분된 좌석들의 ID 배열
        }catch(error){
            console.log(error)
        }
    }

     // 예매된 좌석 구분 함수 [Promise]
     function bookedIds(seatList){
        const promise = new Promise((resolve) => {
            setTimeout(()=>{
                let result =[];
                for(let i=0; i<seatList.length; i++){
                    if(seatList[i].booked === 1){
                        result.push(seatList[i])
                    } 
                }
                resolve(result.map(seat => seat.id));
            }, 5);
        });
        return promise;
        }

/**
 * *sort selected seats
 * @param id  seat id for seatBasket (배열형)
 * @param isSelected 선택여부
 */
    function getSeatForPay(id, isSelected){
        if(isSelected ==="0"){
            setSeatForBasket([
                ...seatForBasket,
                id])
            console.log("받아옴:", seatForBasket)
    //장바구니에 갈곳에서 삭제
        }else{
            let copys = seatForBasket;
            setSeatForBasket(copys.filter((copy)=>copy !== id));
            console.log("삭제됬나? ", seatForBasket)
        }
    };   
   


   //## 장바구니에 추가 -> 페이지 이동
   const basketForm=(e)=>{
    console.log("movieBasket: 장바구니로 가면서 ", movieBasket)
    console.log("seatBasket: 장바구니로 가면서 ", seatBasket)

    fetch("http://localhost:8080/basket/add", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(movieBasket), //JS Object를 JSON으로 변경해서 던진다
    })
        .then((res) => {
            console.log("성공: ", res)
        }).catch((err) => {
        console.log("영화 장바구니 추가 에러발생: ",err);
    })

    window.location.replace('/basket',{state:resultDB})
}


    return (
        <>
        <Container className='temp'>
            <div className="class_contai">
                
                <div className="screen">스크린</div>

                <div className="seat_container">
                    <div className="seat_explain_box">
                        <div className="seat_explain" style={{backgroundColor:"#e0ca9f"}}></div>예약 가능
                        <div className="seat_explain" style={{backgroundColor:"#afebae"}}></div>선택함
                        <div className="seat_explain" style={{backgroundColor:"grey"}}></div>예매 불가
                    </div>
                <div className="seat_box">
            
                        {seatList.map((seat,i)=>
                        (
                            seatIds.includes(seat.id)?
                            //toggle 1: 예매된 좌석
                            //toggle 2: 빈 좌석 
                            <Seat getSeatForPay={getSeatForPay} seat={seat} key={i} toggle={toggle[1]} />
                            :
                            <Seat  getSeatForPay={getSeatForPay} seat={seat} key={i} toggle={toggle[0]} /> 
                        ))}
                  </div>
                </div>
                <button className="btn_basket" onClick={basketForm} >장바구니로</button>
            </div>
        </Container>
        </>
    );
};

export default SeatForm;