import React, {useState} from 'react';
import axios from "axios";
import "../css/movieBasket.css";

const MovieBasket = (props) => {

    const mb= props.mb
    
    const [isSelected, setIsSelected] = useState(true)
    const [reload, setReload] = useState(true)


    /**
     * * 선택 목록 삭제
     */
    function deleteMovie(e){
        axios.delete("http://localhost:8080/basket/"+mb.id)
            .then((res)=>{
                console.log("영화 장바구니 삭제 성공", res)
                props.setReload(!reload)
                props.getData();
            }).catch(err=>
                console.log("영화 장바구니 삭제 실패", err)) 
    }

    /**
     * * 선택 여부 처리
     */
    function select(){
        setIsSelected(isSelected? false : true);
        props.payMovie(mb, isSelected);  
    }

    return (
        <>
        <div className="movieItem">
            <div className="movie_poster">
                <img style={{width: '130px', height: '180px' }}
                        src={mb.posterUrl}
                        alt="이미지" />
            </div>

            <div className="basket_details">
                <div className="details">영화 : {mb.title}</div>
                <div className="details">예약 날짜 : {mb.reserveDate.slice(0,10)}</div>
                <div className="details">예매 시간 : {mb.movie_time}</div>
                <div className="details">상영관 : {mb.cinema_name}</div>
                <div className="details">좌석 : {mb.seat_num}</div>
            </div>
            <div className='setting_container'>
                <input className='checkbx' type="checkbox" name="check" value ={mb.id} onChange={select}/>
                <button className="btnDelete" onClick={deleteMovie}>X</button>
            </div>
        </div>
        </>
    );
};

export default MovieBasket;