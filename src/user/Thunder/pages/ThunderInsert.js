

import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {Form} from "react-bootstrap";
import {Map, MapMarker} from "react-kakao-maps-sdk";
import '../css/ThunderInsert.css';
import Tag from '../components/Tag';


const ThunderInsert= ()=>{

  const navigate = useNavigate();

  const user  = sessionStorage.getItem("id")
  const[viewLoc,setViewLoc] =useState("")
  
  const [val, setVal] = useState({
    username: user,
    title:"",
    location:"",
    content:"",
    image:"",
    openlink: "",
    address: "",
    meetingtime:"",
    tags: ""
  })

  
  const [images, setImages]=useState([]);
  const [position, setPosition] = useState({
    lat:"",
    lng:"",
  })
  const [locationObj, setLocationObj] = useState({});

  const[tags, setTags]= useState([])

  useEffect(()=>{
    getImages();
  
  },[])

  useEffect(()=>{
    _callApi();
    console.log(typeof position.lng)
    console.log( position.lng )
    },[position])

  /**
   * * 지역값 받아올 수 있도록 강제 렌더링
   */
  useEffect(()=>{
    console.log( locationObj)
  },[locationObj])

  
  /**
   * * RestAPI 사용해서 좌표로 주소 가져오기
   */
    const _callApi = async () => {
      try {
       await axios.get(
            `https://dapi.kakao.com/v2/local/geo/coord2address.json?input_coord=WGS84&x=${position.lng}&y=${position.lat}`,
            {
              headers: {
                Authorization: 'KakaoAK ' + process.env.REACT_APP_KAKAOMAP_API_KEY,
              },
            },
          )
          .then(res => {
            const location = res.data.documents[0];
            setViewLoc(     
              location.address.region_1depth_name + " " +
              location.address.region_2depth_name + " " +
              location.address.region_3depth_name)

            val.address=
              location.address.region_1depth_name + " " +
              location.address.region_2depth_name + " " +
              location.address.region_3depth_name

          });
        console.log(val);
      } catch (error) {
        console.log(error.message);
      }
    };

  const getImages= async()=>{
    try{
      const temp = await axios.get("http://localhost:8080/thunderinsert")
      setImages(temp.data) ;

    }catch(error){
      console.log("번개 이미지 호출 에러: ",error);
    }
  }

  const ChangeValue = (e) => {
      setVal({
          ...val,
          [e.target.name]: e.target.value,

      });
      console.log(val)
  }

  function addImage(e){
    val.image = e.target.src;
    console.log(val)
  }



  const addThunder = (e) => {
      e.preventDefault()

      //태그 중복 제거
      let temp = val.tags.slice(0,val.tags.length).split(",")
      let temp2  = [...new Set(temp)]
      val.tags = temp2.toString()


    if(val.address==""|| val.image==""|| val.location==="" || 
      val.title===""|| val.tags===""||val.meetingtime===""||val.content ===""){
        alert("모두 입력(선택) 하셨는지 확인해주세요")
      }else{
          if(window.confirm(user+ "님의 번개모임이 성공적으로 등록되었습니다")){
            axios.post("http://localhost:8080/thunder/insert",val)
            .then((res) => {
                if (res.data === 1) {
                    console.log('추가 성공');
                    console.log(res.data);
                    navigate('/thunder');
                } else {
                    alert("문의글 등록에 실패하셨습니다. 빈칸 없이 작성해주시기 바랍니다.");
                    console.log('추가 실패');
                }
            });
          }} 
    
    }
 

  
  const toThunder = (e) => {
      navigate("/thunder");
  }

  function set(e){
    val.tags =e.target.getAttribute('data-msg')+ ","+val.tags 
    
    console.log(val)
  }



  return (
    <>
      <div className='thunderinsert_all'>
      <div className="thunderinsert">

          <div className='thunerinsert_headers1'>번개 모임 등록</div>
          <Form className="thunderinsert_write" onSubmit={addThunder}>
              <div className="thunderinsert_write_wrap">
                 <div className='thunerinsert_headers'> 제목</div> <input  type="text" placeholder="제목 입력" name="title" onChange={ChangeValue} value={val.title} style={{paddingLeft:"10px", width:"300px"}}/>
                
                  <div className='thunerinsert_headers' >영화관</div>   
                    <select name="location" onChange={ChangeValue} style={{width:"120px", textAlign:"center"}} >
                        <option value="none" disabled>=== 선택 ===</option>
                        <option value ="장승배기" name="location">장승배기</option>
                        <option value ="남양주" name="location">남양주</option>
                        <option value ="건대" name="location">건대</option>
                        <option value ="부천" name="location">부천</option>
                        <option value ="가산" name="location">가산</option>
                    </select>
                    <div className='thunerinsert_headers'>&nbsp;시간</div> 
                    <input type="text" placeholder='시간을 알려주세요' onChange={ChangeValue} name="meetingtime" style={{width:"200px", textAlign:"center"}} value={val.meetingtime}/> 
              </div>
                  <div className="thunderinsert_main">
                      <textarea cols="70" rows="15" placeholder="내용 입력" name="content" onChange={ChangeValue} style={{padding:"10px"}}
                                value={val.content}/>

                      <div className='thunderinsert_imagebox'>
                        <div className='thunerinsert_headers'>이미지 선택</div>
                        
                          {images.map((image)=>(
                            // <div className="thunderinsert_images">
                              <img key={image.id} className="thunderinsert_image" src={image.url} name="image" onClick={addImage} value={image.url}/>
                            // </div>
                          ))}
                      </div>
                  </div>

                  <div className='thunderInsert_bottom'>    
                    
                    <div className='thunderInsert_bottom_box'>

                      <div className='thunderInsert_bottom_box2'>
                        <div className='thunerinsert_headers'  style={{marginBottom:"10px", marginRight:"20px"}}>        
                          카카오 오픈링크&nbsp;&nbsp;<input type="text" name="openlink" onChange={ChangeValue} value={val.openlink} style={{width:"400px"}}/>
                        </div>  
                        <div style={{display:"flex"}}>
                          <div className='thunerinsert_headers'  style={{display:"flex"}}>만남 장소 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div> 
                            <div style={{display:"flex", padding:"5px", width:"400px", backgroundColor:"white", color:"black", alignItems:"center"}}>
                                  <div>{viewLoc}</div>
                              </div>
                            {/* <button type = "button"className='bottom_btn1' onClick={reset}>리셋</button>      */}
                        </div>
                        <div className='bottom_btn'>
                      <button className='bottom_btn1' type="submit">등록</button>
                      <button className='bottom_btn1' onClick={toThunder}>취소</button>
                    </div>
                      </div>

                      <div className='thunderInsert_tags_box' style={{paddingBottom:"10px"}}>
                          <Tag className='thunderInsert_tags_box1' twenty data-msg={'#20대'} onClick={set} ># 20대</Tag>
                          <Tag className='thunderInsert_tags_box1'  thirdty data-msg={'#30대'} onClick={set} ># 30대</Tag>
                          <Tag className='thunderInsert_tags_box1'  forthy data-msg={'#40대'} onClick={set} ># 40대</Tag>
                          <Tag className='thunderInsert_tags_box1'  early data-msg={'#조조'} onClick={set} >#조조</Tag>
                          <Tag className='thunderInsert_tags_box1'  night data-msg={'#심야'} onClick={set} >#심야</Tag>
                          <Tag className='thunderInsert_tags_box1'  evening data-msg={'#저녁'} onClick={set} >#저녁</Tag>
                          <Tag className='thunderInsert_tags_box1'  comedy data-msg={'#코미디'} onClick={set} >#코미디</Tag>
                          <Tag className='thunderInsert_tags_box1'  action data-msg={'#액션'} onClick={set} >#액션</Tag>
                          <Tag className='thunderInsert_tags_box1'  romance data-msg={'#로맨스'} onClick={set} >#로맨스</Tag>
                          <Tag className='thunderInsert_tags_box1'  horror data-msg={'#공포'} onClick={set} >#공포</Tag>
                          <Tag className='thunderInsert_tags_box1'  thriller data-msg={'#스릴러'} onClick={set} >#스릴러</Tag>

                      </div>

                     
                    </div> 
                    {val.tags}
                  </div>
            </Form>
          </div>


          <div className='thunderInsert_map'>
            <Map // 지도를 표시할 Container

              center={{
                lat: 37.5379867, lng:126.9873077
              }}
              style={{
                width: "600px",
                height: "700px",
              }}
              level={9} // 지도의 확대 레벨
              onClick={(_t, mouseEvent) => 
                {
                  setPosition({
                  lat: mouseEvent.latLng.getLat().toFixed(7),
                  lng: mouseEvent.latLng.getLng().toFixed(7),
                  })
                  val.lat =mouseEvent.latLng.getLat().toFixed(7)
                  val.lng = mouseEvent.latLng.getLng().toFixed(7)
                }}>
              {position && <MapMarker position={position} />}
            </Map>
          </div>
      </div>
    </>
  )
}


export default ThunderInsert;