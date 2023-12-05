import React,{useEffect, useState} from 'react';
import { Container } from 'react-bootstrap';
// import { MapMarker } from 'react-kakao-maps-sdk';
import HomeMovieItem from '../components/HomeMovieItem';

import { Map, MapMarker, useMap } from "react-kakao-maps-sdk";
import axios from 'axios';
import Post from '../components/HomePost';

import '../css/Home.css';
import '../css/HomeThunder.css';
import { useNavigate } from 'react-router-dom';

import StoreItem from '../components/StoreItem'
// import '../css/HomeStore.css'

const Home = ()=>{

  const[toggle, setToggle]= useState(true);
  const [items, setItems] = useState([])
  
  const [thunders, setThunders] = useState([]);
  const [thundersHot, setThundersHot] = useState([]);

  const thunderPosts = thunders.slice(0,9)

  const navigate = useNavigate();

  let [cinemas,setCinemas] = useState([]);

  let [state, setState] = useState({
    level:9,
    // 지도의 초기 위치
    center: { lat: 37.570726054433734, lng: 126.9818 },
    // 지도 위치 변경시 panto를 이용할지에 대해서 정의
    isPanto: false,
  })

  const [stores, setStores] = useState([])
    

  useEffect(() => {
    fetch('http://localhost:8080/movie', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {

        setItems(res.slice(0,7));
 
        console.log(res)

        // console.log(items);
      }); //비동기 함수
      getThunders();
      getThundersHot();
      getCinemas();
      getStore();
      
   }, []);

   function getStore(){
   fetch('http://localhost:8080/store', {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((res) => {
      setStores(res);

      // console.log(items);
    }); //비동기 함수
  }
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

   const getThunders= async()=>{
        
    try{
      const temp = await axios.get("http://localhost:8080/thunder/")
      setThunders(temp.data) ;
      console.log(temp.data)

    }catch(error){
      console.log("번개 이미지 호출 에러: ",error);
    }
}
   const getThundersHot= async()=>{
        
    try{
      const temp = await axios.get("http://localhost:8080/thunder/hot")
      setThundersHot(temp.data) ;
      console.log(temp.data)

    }catch(error){
      console.log("번개 이미지 호출 에러: ",error);
    }
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
     
     {isVisible &&<div  className='home_cinemaMarker_content' >
            <div  style={{width:"150px", height:"30px", color:"purple"}}>{cinema.cinema_name}극장</div>
                
          </div>}
    </MapMarker>
  )
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
     
          {isVisible && <div  className='home_marker_content' >
                          <div>
                              <img src={thunder.image} alt="" width="80px" height="100px"/>
                          </div>
                          <div style={{display:"flex", flexDirection:"column", alignItems:"baseline"}}>
                              <div>제목 : {thunder.title}</div>
                              <div>카테고리 : {thunder.category}</div>
                          </div>
                              
                        </div>}
    </MapMarker>
  )
}
const [value,setValue] = useState(0)


function toLeft(){
  if(value==0){
    setValue(200)
  }else{
    setValue(value-100)
  }

}

function toRight(){
  if(value==200){
    setValue(0)
  }else{
    setValue(value+100)
  }
}


let [storeValue,setStoreValue] = useState(660)


function storetoLeft(){
  if(storeValue>=660){
    setStoreValue(660)
  }else{
    setStoreValue(storeValue+100)
  }

}

function storetoRight(){
   if(storeValue<=-140){
    setStoreValue(-140)
  }else{
    setStoreValue(storeValue-100)
  }
}


  return(
    <>
    <div className='home_main_all_container'>
      <div className='top_main_image'/>
      <div className='top_main_image1'>
        <div className='top_main_content'>
            <div>스파이더맨, 아이언맨 좋아해?</div>
            <div>그럼 이제부터 다 잊어.</div>
            <div>난 너만의 아임유얼맨 이니까.</div> 
             {/* <small style={{marginLeft:"430px"}}>-만나 극장-</small> */}
             <img src='https://i.esdrop.com/d/f/8AgqMbQApP/r99SKL2BvA.jpg'onClick={()=>navigate("/movie")} style={{cursor:"pointer",marginLeft:"600px",height:'15vh',transform: "rotate( -10deg  )"}}/>
        </div>
      </div>
   </div>
      
    
      
{/* 상영정보 */}
<div className='home_main_all_container2'>
      <div className="main_movies_container">
 
        <div className='main_movies_back'>  </div>
  

      {/* 상영정보 안에 들어갈 내용 */}
        <div className='main_movies_content' style={{marginTop:"50px"}}>
          
          <Container className='main_movies_temp'>   
          <div style={{marginRight:"20px", cursor:"pointer"}}  onClick={toLeft}><img src='https://cdn-icons-png.flaticon.com/128/3682/3682653.png'  width="30px" alt=''/></div>
            <div className='main_movies_flex'  >   
                {items.map((item) => (
                    <HomeMovieItem item={item} key={item.movieId} value={value}/>                
                ))}
            </div>  
          
                
            <div style={{cursor:"pointer"}}  onClick={toRight}><img src='https://cdn-icons-png.flaticon.com/512/3682/3682651.png'  width="30px" alt=''/></div>
            
          </Container>

      </div></div></div>

      
{/* 매점 */}
<div className='home_store_container'>
  <div  className='home_store_title'>
    <div> 매점</div>  
  </div>
  <div>
        <Container className='store_temp_conatiner'>   
       
          <div className='home_store_temp_conatiner1'>
                {stores.map((store) => (
                    <StoreItem storeValue={storeValue}   item={store} key={store.id}/>                
                ))}
          
          </div>
            <div style={{display:"flex", justifyContent:"center"}}>
              <div style={{ marginRight:"20px", cursor:"pointer"}}  onClick={storetoLeft}><img src='https://cdn-icons-png.flaticon.com/128/3682/3682653.png'  width="60px" alt=''/></div>
              <div style={{marginLeft:"20px" , cursor:"pointer"}}  onClick={storetoRight}><img src='https://cdn-icons-png.flaticon.com/512/3682/3682651.png'  width="60px" alt=''/></div>
            </div>
        </Container>
        
  </div>

  
</div>


{/* 고객센터
    <div className='home_something_container'>

      <h1>무언가</h1>

    </div>     */}


{/* 번개모임 */}
<div className='home_thunder_container'>
      <div>
        <div className='home_thunder_title'><span style={{color:"red"}}>HOT</span><small>한 번개들</small></div>
        <div className="post_container">
            {thundersHot.map((thunder)=>(
              <>
                <div className='temmpp'>
                    <div className="post">
                        <Post thunder={thunder}/>
                    </div>
                    <button className='join_btn1111' type="button" onClick={(e)=>{
                            navigate("/thunder/"+thunder.id, {state: thunder})
                        }}>참여하기</button>
                </div>
              </>
              ))}
          </div>
        </div>
      </div>





{/* 지도 */}
<div className='home_map_container' style={{display:"flex", flexDirection:"column"}}>
  <button style={{fontSize:"20px", padding:"10px 20px" , marginTop:"20px"}} onClick={()=>
                  {
                    setState({
                      level:9,
                      center: { lat: 37.570726054433734, lng: 126.9818 },
                      isPanto: true,
                    })
                  }

            }>센터로</button>
  
        <Map className='home_map_item'
            center={state.center}
            isPanto={state.isPanto}
            level={state.level}
            style={{ marginBottom:"30px"}}
            onCenterChanged={(map) => setState({
              level: map.getLevel(),
              center: {
                lat: map.getCenter().getLat(),
                lng: map.getCenter().getLng(),
              }
            })}>
            



            {thunderPosts.map((thunder)=>(
                <>
                    <EventMarkerContainer
                        key={`EventMarkerContainer-${thunder.lat}-${thunder.lng}`}
                        thunder={thunder}/>
                </>
            ))}
            {cinemas.map((cinema)=>(
                        <CinemaMarker  key={`EventMarkerContainer-${cinema.lat}-${cinema.lng}`} cinema={cinema}/>
                    ))}

             
        </Map>
      </div>


{/* 고객센터 */}
        <div className='home_service_container'>

            <div className='home_service_title'> 고객센터</div>

            <div className='home_service_content' >

                <img onClick={()=>navigate("/board")} style={{cursor:"pointer"}} width="80px" heigth="80px" src='https://cdn-icons-png.flaticon.com/128/8084/8084156.png' alt='service'/>
                <img onClick={()=>navigate("/board")} style={{cursor:"pointer"}} width="80px" heigth="80px" src='https://cdn-icons-png.flaticon.com/128/4480/4480421.png' alt='service'/>
                <img onClick={()=>navigate("/board")} style={{cursor:"pointer"}} width="80px" heigth="80px" src='https://cdn-icons-png.flaticon.com/128/5300/5300651.png' alt='service'/>
                <img onClick={()=>navigate("/board")}style={{cursor:"pointer"}} width="80px" heigth="80px"src='https://cdn-icons-png.flaticon.com/128/6327/6327290.png' alt='service'/>

            </div>



        </div>

</>
    
  )
}

export default Home;