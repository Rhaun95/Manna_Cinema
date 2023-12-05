import React, { useState,useEffect } from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";

import MovieBasket from "../components/MovieBasket";
import ItemBasket from "../components/ItemBasket";
import "../css/basket.css"

import {Container} from "react-bootstrap";
import {useSelector} from "react-redux";

const Basket = () => {
    const navigate = useNavigate();
    const user = sessionStorage.getItem("id")
    const {state} = useLocation();


    let seatLength=0;
    let selectedPrice =0;

    //영화 1표 가격
    const moviePrice = 13000;

    //랜더링 변수
    const [reload, setReload]= useState(true);

    //DB 데이터 담는 곳
    const [movieItems,setMovieItems] = useState([]);
    const [storeItems, setStoreItems] = useState([]);

    // 예매 내역
    const [booking, setBooking]= useState([
        [],
        []
    ]);
    let bookingLength = booking[0].length;

    // 결제 후 예매내역으로 되는 ID들
    const [movieBasketIds, setMovieBasketIds] = useState([]) 
    const [itemBasketIds , setItemBasketIds] = useState([])

    // 결제 하는 좌석
    const [paySeats, setPaySeats] = useState([])

    // 전 페이지에서 선택한 좌석들
    const seatBasket = useSelector((state)=>state.basket.seatBasket)


    // 가격[영화/스토어/총결제 가격]
    const [mPrice, setMPrice] = useState(0);
    const [iPrice, setIPrice] = useState(0);
    const tPrice =  mPrice + iPrice;

   /**
     * * 결제 내역
     * ? total_amount: 영화 1좌석 = 1건
     */
    const [payment,setPayment] = useState({
        id:0,
        user_id:user,
        item_name:"",
        total_price:0,
        total_amount:0
    })

    console.log("payment: ", payment)


   /**
    * * 최초 렌더링: DB data 호출 
    */
    useEffect(()=>{
        getData();
    },[])


    /**
     * *  결제 내역이 변할 때마다 재랜더링
     */
    useEffect(()=>{ 
        getData();
        getSeats();
        console.log("확인")
        console.log("booking: ", booking)
  
    },[reload])

    /**
     * * (해당 유저의) 영화/스토어 장바구니 DB 
     */
    const getData = () =>{
        axios.all([axios.get("http://localhost:8080/basket/"+user),
                   axios.get("http://localhost:8080/itembasket/"+user),
                ])
                .then(axios.spread((...res)=> {
                    setMovieItems(res[0].data);
                    setStoreItems(res[1].data);
        }))
    }

    /**
     * * 영화 가격 계산
     * ? 선택한 영화여부가 true 일 때만 결제 내역에 반영
     * ? 해당 좌석들을 배열로 변환 시키고 그 길이 만큼 값 계산
     * ! false일 경우 해당 부분만 내역에서 삭제
     * ! 가격 수정
     */
    function payMovie(movie, isSelected){
        seatLength = movie.seat_num.split(",").length;
        selectedPrice =  seatLength * 13000
        
        if(isSelected){
            booking[0].push(movie);
            // let states = [...state, movie.seat_num]
            // console.log(states)
            setMovieBasketIds([...movieBasketIds, movie.id])
            payment.total_amount+= seatLength
            payment.total_price += selectedPrice
         
            setMPrice(mPrice + seatLength*moviePrice);

        }else{
            booking[0].splice(booking[0].indexOf(movie), 1)

            setMovieBasketIds(movieBasketIds.filter(id=> movie.id !== id))
            payment.total_amount -= seatLength
            payment.total_price -= selectedPrice
        
            setMPrice(mPrice - seatLength*moviePrice);
        }
    }
    console.log("statestate: ", state)
   

    /**
     * * 매점 가격 계산
     */
    function payStore(item, isSelected){
        selectedPrice = item.total_price * item.total_amount

        if(isSelected){
            booking[1].push(item);

            setItemBasketIds([...itemBasketIds, item.id])
            payment.total_amount += item.total_amount
            payment.total_price += selectedPrice

            setIPrice(iPrice+ item.total_amount*item.total_price);
        }else{
            booking[1].splice(booking[1].indexOf(item), 1)

            setItemBasketIds(itemBasketIds.filter(id=> item.id !== id))
            payment.total_amount -= item.total_amount
            payment.total_price -= selectedPrice

            setIPrice(iPrice- item.total_amount*item.total_price);
        }
    } 

    /**
     * * 결제할 영화 좌석만 넣기
     */
    function getSeats(){
        let data = booking[0]
        let length= data.length

       for(let i=0; i<length; i++){
            setPaySeats(
                paySeats.concat(data[i].seat_num.split(","))
            )}}

    /**
     * * 결제 후 좌석DB 업데이트
     */
    function updateSeat(seats){
        for(let i=0; i<seats.length;i++){
            axios.put("http://localhost:8080/seat/"+seats[i])
            .then(res=>console.log(res.data))
        }}


        console.log(booking)
/**-------------------------------------------------------------------------------- */

    /**
     * * 예매내역으로 udpate
     * ? 결제된 아이들은 status=1
     */
    function updateStaus(){
        for(let i=0; i<movieBasketIds.length; i++)
            axios.put("http://localhost:8080/basket/updateStatus/"+movieBasketIds[i])
            .then(res=>{
                    console.log(movieBasketIds[i]+ "번 영화 장바구니가 결제되었습니다.")
            })
        for(let i=0; i<itemBasketIds.length; i++)
            axios.put("http://localhost:8080/itembasket/updateStatus/"+itemBasketIds[i])
            .then(res=>{
                    console.log(itemBasketIds[i]+ "번 아이템 장바구니가 결제되었습니다.")
            })
    }
/**
 * * 업데이트 좌석 가져오기
 */

function upup(){
    let se = ""
    for(let i =0; i<booking[0].length;i++){
        se += booking[0][i].seat_num+","
        
    }
    se = se.slice(0,se.length-1)
    se = se.split(",")
    return se
}

/**
 * * 결제하기
 * * 좌석 중복 제거
 * ? 결제한 해당 항목들만 updateStatus()로 DB 업데이트
 */
function paytest(){
    payment.item_name = booking[0][0].title
    payment.id = booking[0][0].id
    console.log(payment)
    getSeats();
    updateSeat(upup());
    updateStaus();
    navigate('/payment/addCart',{state : payment})
}





    let temp=[]
   /**
     * * 결제하기
     * * 좌석 중복을 new Set으로 제거해줌 
     * ? 결제한 해당 항목들만 장바구니에서 삭제  XXXx  제거가 아니라 updateStatus()로 DB 업데이트만
     *  ?준영 결제완료후 실행
     */
    const paymentForm=()=>{
        
        getSeats();
          temp = [...new Set(paySeats)]
        setPaySeats(temp)

        console.log("결제할 때 좌석 들: ", temp)
        console.log(temp *2)
        
        // let movieId=[]

        // for(let i=0; i<bookingLength; i++){
        //     axios.delete("http://localhost:8080/basket/"+booking[0][i].id)
        //     .then((res)=>console.log(i+"번 영화 성공"))
        // }
        // for(let i=0; i<booking[1].length; i++){
        //     axios.delete("http://localhost:8080/itembasket/"+booking[1][i].id)
        //     .then((res)=>console.log(i+"번 아이템 성공"))
        // }
            updateSeat(paySeats);
       
        navigate('/payment/addCart',{state:payment})
    }



/**-------------------------------------------------------------------------------- */

    return (
        <>
            <Container className='temp'>
                <div >
                   
                    <div className='basket_container_title'>영화 장바구니</div>
                    <div className="basket_container">
                        {movieItems.map((mb) => (
                            <MovieBasket mb={mb} payMovie={payMovie} setReload={setReload} getData={getData}/>
                        ))}
                    </div>
                    <div className="basket_container_price">
                        <h3>가격 :  {mPrice} 원</h3>
                    </div>
                </div>
 {/*------------------------------------------*/}
                {/* <button style={{width:"150px"}} onClick={updateStaus}>update Test 용</button>
                <button style={{width:"150px"}} onClick={paytest}>페이먼트갈때 Test 용</button> */}
 {/*------------------------------------------*/}

                <div >
                    <div className='basket_container_title'>매점 장바구니</div>
                    <div className="basket_container">
                        {storeItems.map((bi) => ( 
                            <ItemBasket bi={bi} payStore={payStore}  setReload={setReload} getData={getData}/>
                        ))}
                    </div>
                    <div className="basket_container_price">
                        <h3>가격 : {iPrice} 원</h3>
                    </div>
                </div>

                <div className='basket_container_bottom_box'>

                    <div className="basket_container_bottom">
                        <div className="baske_btn_payment_total" style={{marginRight:"10px"}}>총액 : {tPrice} 원</div>
                        <button className="basket_container_btn_payment" onClick={paytest}>결제하기</button>
                    </div>
                </div>
               
            </Container>
        </>
    );
};

export default Basket;