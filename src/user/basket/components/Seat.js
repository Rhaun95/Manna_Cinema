import React,{useState,useEffect} from 'react';
import '../css/seat.css'
const Seat = (props) => {


    const {id, booked} = props.seat;
    const {checked,color} = props.toggle;

    //booked의 기본값은 0 이다
    const [isSelected, setIsSelected] = useState("0")

    function set(e){
        e.preventDefault();
        setTimeout(()=>{
            setIsSelected(isSelected === "0"? "1" : "0");
        },100)
    
        props.getSeatForPay(id, isSelected)
        }
    
    return (
        <>
           <button className="seat_btn" style={{backgroundColor: isSelected==="1"?"#afebae":color}} onClick={set} disabled={checked}>
            <div className="seat_icon"></div>
            <div className="seat_text">{id}</div>
        </button> 
        </>
    );
};

export default Seat;