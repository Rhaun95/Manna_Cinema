import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';

import '../css/ThunderMap.css';

import ThunderBoardItem from '../components/ThunderBoardItem';

import { Map, MapMarker, useMap } from "react-kakao-maps-sdk";


//Map과(Marker) 계시글 형식
const ThunderMap = () => {

    const navigate = useNavigate();

    const [thunders, setThunders] = useState([]);
    const [location, setLocation] = useState("모두보기");
    let [cinemas,setCinemas] = useState([]);


    useEffect(()=>{
        getThunders()
        getCinemas();

        console.log("각 영화관 별 정보: ",cinemas)
        console.log("번개 보임 정보: ",thunders)    
    },[]) 




    useEffect(()=>{
        console.log("적용중인 location: ", location)
        console.log(location)
        filteredByLocation()
    },[location])


    /**
     * * Cinema DB 받아옴
     */
    function getCinemas(){
        fetch('http://localhost:8080/cinema', {
         method: 'GET',
       })
         .then((res) => res.json())
         .then((res) => {
           setCinemas(res);
         }); 
    }
    /**
     * * 번개 DB 받아옴
     */
    const getThunders= async()=>{
        
        try{
          const temp = await axios.get("http://localhost:8080/thunder/")
          setThunders(temp.data) ;
    
        }catch(error){
          console.log("번개 이미지 호출 에러: ",error);
        }
    }


    function notUser(){
        alert("로그인을 해주세요")
    }
    

    const changeLocation = (e)=>{
        setLocation(e.target.value)
        if(e.target.value =="none" || e.target.value=="극장별"){
            getThunders()
        }else{
            axios.get("http://localhost:8080/thunder/search/"+ e.target.value)
            .then((res)=>{
                setThunders(res.data)
            })
        }
     }
       
    function toInsert(e){
        navigate("/thunderInsert");
    } 
    function toCard(e){
        e.preventDefault();
        navigate("/thunder");
    }

    function filteredByLocation(){
        if(location == "none" || location =="모두보기"){
            getThunders()
        }else{
        axios.get("http://localhost:8080/thunder/selectlocation/"+ location)
        .then((res)=>{
            setThunders(res.data)
        })} 
    }



    const EventMarkerContainer = ({thunder}) => {
        const map = useMap()
        const [isVisible, setIsVisible] = useState(false)

    
        return (

          <MapMarker
            position={{ lat:thunder.lat, lng:thunder.lng }} // 마커를 표시할 위치
            onClick={(marker) => {
                map.panTo(marker.getPosition())
                
            }}
            onMouseOver={() => setIsVisible(true)}
            onMouseOut={() => setIsVisible(false)}
          >
           
                {isVisible && <div  className='marker_content' >
                                <div>
                                    <img src={thunder.image} alt="" width="80px" height="100px"/>
                                </div>
                                <div style={{display:"flex", flexDirection:"column", alignItems:"baseline", marginLeft:"7px"}}>
                                    <div>제목 : {thunder.title}</div>
                                    <div>만나시간 : {thunder.meetingtime}</div>
                                    <div>장소 : {thunder.address}</div>
                                    <div> 관심: {thunder.tags.slice(0,thunder.tags.length-1)}</div>
                                </div>
                                    
                              </div>}
          </MapMarker>
        )
      }

    const CinemaMarker = ({cinema}) => {
        const map = useMap()
        const [isVisible, setIsVisible] = useState(false)

    
        return (

          <MapMarker
            position={{ lat:cinema.lat, lng:cinema.lng }} // 마커를 표시할 위치
        
            image={{
                src: "https://cdn-icons-png.flaticon.com/512/7954/7954405.png",
                size:{
                    width:35,
                    height: 50
                },
            }}// 마커이미지의 크기입니다
        

            onClick={(marker) => {
                map.panTo(marker.getPosition())
                
            }}
            onMouseOver={() => setIsVisible(true)}
            onMouseOut={() => setIsVisible(false)}
          >
           
                {isVisible && <div  className='cinemaMarker_content' >
                                <div >{cinema.cinema_name}극장</div>
                                    
                              </div>}
          </MapMarker>
        )
      }

    
    return (
        <>
        <h1 style={{marginTop:"100px",color:"whitesmoke"}}>ThunderMap</h1>

        <div className="thunderMap_container">
            <div className="thunderMapBoard_container">
                <div className="thunderMapBoard_container_title">모임 리스트</div>
                
                {thunders.map((thunder)=>(
                    <>
                     <ThunderBoardItem thunder={thunder} notUser={notUser} onMouseOver={()=>{}} />
                    </>
                ))}
            </div>

            <div className="map_container">
            <button type="button" className="toCard" onClick={toCard}>카드로 보기</button>
                <select className="mapcategoryselect" name="location" onChange={changeLocation} value={location}>
                    <option value="none">모두 보기</option>
                    <option value="건대" >건대</option>
                    <option value="남양주">남양주</option>
                    <option value="장승배기" >장승배기</option>
                    <option value="가산" >가산</option>
                    <option value="부천">부천</option>
                </select>
                {window.sessionStorage.getItem("id")?
                    <button className="toCard" onClick={toInsert}>번개 등록</button>
                    :
                    <button className="toCard" onClick={notUser}>번개 등록</button>
                }
                <Map className='map_item'
                    center={{ lat: 37.5973028, lng: 127.0291826 }}
                    level={9}>
                
                    {thunders.map((thunder)=>(
                        <>
                        
                            <EventMarkerContainer
                                key={`EventMarkerContainer-${thunder.lat}-${thunder.lng}`}
                                thunder={thunder}
                            />

                            
                        </>
                    ))}
                    {cinemas.map((cinema)=>(
                        <CinemaMarker  key={`EventMarkerContainer-${cinema.lat}-${cinema.lng}`} cinema={cinema}/>
                    ))}

                </Map>
            </div>
        </div>

        </>
    );
};

export default ThunderMap;