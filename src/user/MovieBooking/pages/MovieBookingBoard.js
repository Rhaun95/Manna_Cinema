import "../css/movieBookingBoard.css"
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



function MovieBookingBoard(){

    const navigate = useNavigate();
 

    useEffect(() =>{
        console.log("USEEFFECT시작")
        getAllMovieBooking();
        getLatestBooking();
      },[])

    //   console.log(Booked);
      const [bookings, setBookings] = useState([])
      
      const [booked, setBooked] = useState({})

    //   const posters = bookings.slice(0,bookings.length-1)

      const own_id = sessionStorage.getItem("id");

    const getAllMovieBooking=() =>{

        axios.get("http://localhost:8080/basket/booking/" + own_id)
        .then((res)=>{
            setBookings(res.data)
        })
    }

    const getLatestBooking=() =>{
        axios.get("http://localhost:8080/basket/getBooked/" + own_id)
            .then((res) =>{
                setBooked(res.data)
            })
    }
    console.log("booked: ", booked)
    console.log("bookings: ", bookings)

    const movetoDetail =()=>{
        navigate("/movieBooking", {state: booked.id})
        alert('상세내역 페이지로 이동합니다.')
    }


return(
 
    <div className="movieBookingBoard_container5040">
      
        <div className="movieBookingBoard_title"> &gt;&nbsp;전체 예매내역 </div>

            <div className="leastBooking">&lt;최근 예매내역&gt;</div>
            <div className="movieBookingBoard_container_sub" >
                <div className="bookingBoard_container_main">
                    <div className="bookingButton_movie"> 
                <button style={{width:"40px"}}  onClick={movetoDetail }>+</button>
                </div>
                    <div style={{fontSize:"25px"}}>{booked.title} </div>
                    <div><img width="190px" height="170px" src={booked.posterUrl}/></div>
                
                    <div className="bookingBoard_contentbox2">
                    
                        <div className="bookingBoard_content2">
                            <div>이용일 </div>
                            <div>상영관</div>
                            <div>시간</div>
                            <div>수량</div>
                        </div>
                        <div className="bookingBoard_content2">
                            <div>{booked.reserveDate}</div>
                            <div>{booked.cinema_name}</div>
                            <div>{booked.movie_time}</div>
                            <div>{booked.total_amount} 매</div>
                        </div>
                    </div>
                </div>
                    
            </div>
            

            <div className="movieBookingBoard_container_sub2">
            {bookings.map((booking) =>(
                <>
                <div key={booking.id} className="bookingBoard_container">
                    <div className="bookingBoard_contentbox1">
                        <div className="bookingButton_movie2"><button style={{width:"40px"}} onClick={movetoDetail }>+</button></div>
                        <div style={{fontSize:"25px"}}>{booking.title} </div>
                        <div><img width="150px" height="170px" src={booking.posterUrl}/></div>
                    </div>
                    <div className="bookingBoard_contentbox2">
                        <div className="bookingBoard_content1">
                            <div>이용일 </div>
                            <div>상영관</div>
                            <div>시간</div>
                            <div>수량</div>
                        </div>
                        <div className="bookingBoard_content2">
                            <div>{booking.reserveDate}</div>
                            <div>{booking.cinema_name}</div>
                            <div>{booking.movie_time}</div>
                            <div>{booking.total_amount} 매</div>
                        </div>
                    </div>
                </div>
                
                </>
            ))}
            </div>
        

    </div>
    


)


}

export default MovieBookingBoard;